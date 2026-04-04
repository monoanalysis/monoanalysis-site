export default function AboutPage() {
  return (
    <div className="container" style={{ maxWidth: '760px', margin: '0 auto' }}>
      <div className="section-label">About</div>
      <h1 style={{
        fontFamily: 'var(--serif)', fontSize: '2.2rem', fontWeight: 400,
        letterSpacing: '-0.02em', marginBottom: '2.5rem'
      }}>
        Markets are physical before they are financial
      </h1>

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
          I am currently pursuing a Master of Finance at Babson College, focused on
          commodity derivatives, energy trading, and portfolio risk. At the 2026
          Rotman International Trading Competition, our team placed 13th of 37
          global teams across energy, volatility, and algorithmic trading cases.
        </p>
      </div>

      {/* SKILLS */}
      <div style={{ marginTop: '3rem', paddingTop: '2.5rem', borderTop: '1px solid var(--border)' }}>
        <div className="section-label">Analytical Toolkit</div>
        <div className="skills-grid">
          {[
            { title: 'Quantitative', items: 'Python, NumPy, Pandas, Statsmodels, Matplotlib' },
            { title: 'Financial Modeling', items: 'Derivatives pricing, BSM, Greeks, Duration/Convexity' },
            { title: 'Markets', items: 'Commodity futures, Options, Basis trading, Spread analysis' },
            { title: 'Data', items: 'Bloomberg Terminal, EIA data, USDA WASDE, AIS vessel tracking' },
          ].map((s, i) => (
            <div className="skill-card" key={i}>
              <h4>{s.title}</h4>
              <p>{s.items}</p>
            </div>
          ))}
        </div>
      </div>

      {/* CAREER FOCUS */}
      <div className="credential-box" style={{ marginTop: '2.5rem' }}>
        <p>
          <strong>Career focus:</strong> Commodity and energy markets — trading,
          risk management, and structured products. This site is where I publish
          independent research that reflects how I think about these markets.
        </p>
      </div>
    </div>
  );
}
