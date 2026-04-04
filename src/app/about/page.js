export default function AboutPage() {
  return (
    <div className="container" style={{ maxWidth: '760px', margin: '0 auto' }}>
      <div className="section-label">About</div>

      {/* HEADSHOT + INTRO */}
      <div style={{
        display: 'flex', gap: '2.5rem', alignItems: 'flex-start',
        marginBottom: '2.5rem', flexWrap: 'wrap'
      }}>
        <img
          src="/headshot.jpg"
          alt="Monu Chouhan"
          style={{
            width: '180px', height: '180px', objectFit: 'cover',
            objectPosition: 'center top', border: '1px solid var(--border)',
            flexShrink: 0
          }}
        />
        <div style={{ flex: 1, minWidth: '280px' }}>
          <h1 style={{
            fontFamily: 'var(--serif)', fontSize: '2.2rem', fontWeight: 400,
            letterSpacing: '-0.02em', marginBottom: '0.75rem', lineHeight: 1.2
          }}>
            Markets are physical before they are financial
          </h1>
          <p style={{
            fontSize: '0.95rem', color: 'var(--ink-muted)', lineHeight: 1.7
          }}>
            Monu Chouhan — Master of Finance candidate at Babson College,
            focused on commodity, energy, and risk management.
          </p>
          <div style={{ display: 'flex', gap: '1.5rem', marginTop: '1rem' }}>
            <a href="https://www.linkedin.com/in/monu-chouhan/" target="_blank" rel="noopener"
              style={{ fontFamily: 'var(--mono)', fontSize: '0.72rem', color: 'var(--accent)' }}>
              LinkedIn →
            </a>
            <a href="mailto:monuchouhan833@gmail.com"
              style={{ fontFamily: 'var(--mono)', fontSize: '0.72rem', color: 'var(--accent)' }}>
              Email →
            </a>
          </div>
        </div>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
        <p style={{ fontFamily: 'var(--serif)', fontSize: '1.02rem', lineHeight: 1.85 }}>
          I grew up around my father&apos;s industrial materials business. Before I
          understood a futures curve, I watched raw commodities move through supply
          chains. That ground-level perspective shapes everything I write about
          markets today.
        </p>
        <p style={{ fontFamily: 'var(--serif)', fontSize: '1.02rem', lineHeight: 1.85 }}>
          My first career was in engineering. I spent four years at Reliance Jio
          building 5G RAN automation systems. Engineering taught me to think in
          systems — how components interact, where bottlenecks form, how small
          failures cascade. That framework translates directly to commodity markets.
        </p>
        <p style={{ fontFamily: 'var(--serif)', fontSize: '1.02rem', lineHeight: 1.85 }}>
          I cover natural gas, crude oil, power markets, agriculture, and metals.
          This site is where I publish independent research that reflects how I think about these markets.
        </p>
      </div>

      {/* SKILLS */}
      <div style={{ marginTop: '3rem', paddingTop: '2.5rem', borderTop: '1px solid var(--border)' }}>
        <div className="section-label">Analytical Toolkit</div>
        <div className="skills-grid">
          {[
             { title: 'Markets', items: 'Commodity futures, Options, Basis trading, Spread analysis' },
            { title: 'Risk Management', items: 'Credit, Operational, Regulatory, Derivatives' },
            { title: 'Data', items: 'Bloomberg Terminal, EIA, USDA, FRED, CFTC' },
          ].map((s, i) => (
            <div className="skill-card" key={i}>
              <h4>{s.title}</h4>
              <p>{s.items}</p>
            </div>
          ))}
        </div>
      </div>

      {/* CAREER FOCUS 
      <div className="credential-box" style={{ marginTop: '2.5rem' }}>
        <p>
          <strong>Focus:</strong> Commodity and energy markets — trading,
          risk management, and derivatives products. This site is where I publish
          independent research that reflects how I think about these markets.
        </p>
      </div>
      */}
    </div>
  );
}
