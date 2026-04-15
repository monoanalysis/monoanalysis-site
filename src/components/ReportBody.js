'use client';

import { useEffect, useRef } from 'react';

// React's dangerouslySetInnerHTML never executes <script> tags.
// This component re-creates and appends every script found in the HTML
// after the content mounts — fixing charts that only show on hard reload.
export default function ReportBody({ html }) {
  const ref = useRef(null);

  useEffect(() => {
    if (!ref.current) return;

    const container = ref.current;

    // Find all <script> elements injected via innerHTML
    const scripts = Array.from(container.querySelectorAll('script'));

    scripts.forEach(oldScript => {
      const newScript = document.createElement('script');

      // Copy all attributes (src, type, etc.)
      Array.from(oldScript.attributes).forEach(attr => {
        newScript.setAttribute(attr.name, attr.value);
      });

      // Copy inline script content
      newScript.textContent = oldScript.textContent;

      // Replace old (inert) script with the new executable one
      oldScript.parentNode.replaceChild(newScript, oldScript);
    });
  }, [html]); // re-run if the report content changes

  return (
    <div
      ref={ref}
      className="report-body"
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}
