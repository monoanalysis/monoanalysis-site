'use client';

export default function LinkedInShareButton() {
  function handleShare() {
    const url = encodeURIComponent(window.location.href);
    const shareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${url}`;
    window.open(shareUrl, '_blank', 'width=600,height=500');
  }

  return (
    <button
      onClick={handleShare}
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
        e.target.style.borderColor = '#0a66c2';
        e.target.style.color = '#0a66c2';
      }}
      onMouseLeave={e => {
        e.target.style.borderColor = 'var(--border)';
        e.target.style.color = 'var(--ink-muted)';
      }}
    >
      Share on LinkedIn
    </button>
  );
}
