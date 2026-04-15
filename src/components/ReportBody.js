'use client';

import { useEffect, useRef } from 'react';

function loadScript(src) {
  return new Promise((resolve, reject) => {
    // If already loaded, resolve immediately
    if (document.querySelector(`script[src="${src}"]`)) {
      resolve();
      return;
    }
    const s = document.createElement('script');
    s.src = src;
    s.onload = resolve;
    s.onerror = reject;
    document.head.appendChild(s);
  });
}

async function executeScripts(container) {
  const scripts = Array.from(container.querySelectorAll('script'));

  // Separate external (src) scripts from inline scripts
  const externalScripts = scripts.filter(s => s.src);
  const inlineScripts = scripts.filter(s => !s.src);

  // Load all external scripts first (in order), waiting for each
  for (const s of externalScripts) {
    await loadScript(s.src);
  }

  // Then execute all inline scripts
  for (const s of inlineScripts) {
    const newScript = document.createElement('script');
    newScript.textContent = s.textContent;
    s.parentNode.replaceChild(newScript, s);
  }
}

export default function ReportBody({ html }) {
  const ref = useRef(null);

  useEffect(() => {
    if (!ref.current) return;
    executeScripts(ref.current);
  }, [html]);

  return (
    <div
      ref={ref}
      className="report-body"
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}
