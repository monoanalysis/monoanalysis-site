'use client';

import { useState } from 'react';

export default function ContactPage() {
  const [status, setStatus] = useState('idle');

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus('sending');

    const form = e.target;
    const data = {
      name: form.name.value,
      email: form.email.value,
      subject: form.subject.value,
      message: form.message.value,
    };

    try {
      const res = await fetch('https://formspree.io/f/mkopporj', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (res.ok) {
        setStatus('sent');
        form.reset();
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  }

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

      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label className="form-label">Name</label>
          <input type="text" name="name" placeholder="Your name" className="form-input" required />
        </div>
        <div className="form-group">
          <label className="form-label">Email</label>
          <input type="email" name="email" placeholder="your@email.com" className="form-input" required />
        </div>
        <div className="form-group">
          <label className="form-label">Subject</label>
          <input type="text" name="subject" placeholder="What is this about?" className="form-input" required />
        </div>
        <div className="form-group">
          <label className="form-label">Message</label>
          <textarea rows={5} name="message" placeholder="Your message..." className="form-textarea" required />
        </div>
        <button type="submit" className="btn-primary" disabled={status === 'sending'}>
          {status === 'sending' ? 'Sending...' : 'Send Message'}
        </button>

        {status === 'sent' && (
          <p style={{
            marginTop: '1rem', fontFamily: 'var(--mono)', fontSize: '0.8rem',
            color: '#4a9e6d'
          }}>
            Message sent successfully. I will get back to you soon.
          </p>
        )}
        {status === 'error' && (
          <p style={{
            marginTop: '1rem', fontFamily: 'var(--mono)', fontSize: '0.8rem',
            color: '#c45050'
          }}>
            Something went wrong. Please try emailing me directly.
          </p>
        )}
      </form>

      <div style={{
        marginTop: '3rem', paddingTop: '2rem',
        borderTop: '1px solid var(--border)', display: 'flex', gap: '2rem'
      }}>
        <a href="https://www.linkedin.com/in/monu-chouhan/" target="_blank" rel="noopener"
          style={{ fontFamily: 'var(--mono)', fontSize: '0.78rem', color: 'var(--accent)' }}>
          LinkedIn →
        </a>
        <a href="mailto:monuchouhan833@gmail.com"
          style={{ fontFamily: 'var(--mono)', fontSize: '0.78rem', color: 'var(--accent)' }}>
          Email →
        </a>
      </div>
    </div>
  );
}