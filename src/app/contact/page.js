export default function ContactPage() {
  return (
    <div className="container" style={{ maxWidth: '600px', margin: '0 auto' }}>
      <div className="section-label">Contact</div>
      <h1 style={{
        fontFamily: 'var(--serif)', fontSize: '2.2rem', fontWeight: 400,
        letterSpacing: '-0.02em', marginBottom: '1rem'
      }}>Get in touch</h1>
      <p style={{
        fontSize: '0.95rem', color: 'var(--ink-muted)',
        lineHeight: 1.7, marginBottom: '2.5rem'
      }}>
        Interested in discussing commodity markets, potential collaborations,
        or have feedback on my research? Reach out below or connect on LinkedIn.
      </p>

      <form>
        <div className="form-group">
          <label className="form-label">Name</label>
          <input type="text" placeholder="Your name" className="form-input" />
        </div>
        <div className="form-group">
          <label className="form-label">Email</label>
          <input type="email" placeholder="your@email.com" className="form-input" />
        </div>
        <div className="form-group">
          <label className="form-label">Subject</label>
          <input type="text" placeholder="What is this about?" className="form-input" />
        </div>
        <div className="form-group">
          <label className="form-label">Message</label>
          <textarea rows={5} placeholder="Your message..." className="form-textarea" />
        </div>
        <button type="submit" className="btn-primary">Send Message</button>
      </form>

      <div style={{
        marginTop: '3rem', paddingTop: '2rem',
        borderTop: '1px solid var(--border)', display: 'flex', gap: '2rem'
      }}>
        <a href="https://linkedin.com" target="_blank" rel="noopener"
          style={{ fontFamily: 'var(--mono)', fontSize: '0.78rem', color: 'var(--accent)' }}>
          LinkedIn →
        </a>
        <a href="mailto:monu@example.com"
          style={{ fontFamily: 'var(--mono)', fontSize: '0.78rem', color: 'var(--accent)' }}>
          Email →
        </a>
      </div>
    </div>
  );
}
