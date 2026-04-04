'use client';

export default function PdfButton() {
  return (
    <button
      onClick={() => window.print()}
      style={{
        fontFamily: 'var(--mono)',
        fontSize: '0.72rem',
        letterSpacing: '0.06em',
        textTransform: 'uppercase',
        padding: '0.5rem 1.2rem',
        background: 'transparent',
        border: '1px solid var(--border)',
        color: 'var(--ink-muted)',
        cursor: 'pointer',
        transition: 'all 0.2s',
        display: 'inline-flex',
        alignItems: 'center',
        gap: '0.5rem',
      }}
      onMouseEnter={e => {
        e.target.style.borderColor = 'var(--accent)';
        e.target.style.color = 'var(--accent)';
      }}
      onMouseLeave={e => {
        e.target.style.borderColor = 'var(--border)';
        e.target.style.color = 'var(--ink-muted)';
      }}
    >
      ↓ Export PDF
    </button>
  );
}
