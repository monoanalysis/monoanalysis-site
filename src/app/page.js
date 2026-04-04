import Link from 'next/link';
import { getAllReports } from '@/lib/reports';

export default function HomePage() {
  const reports = getAllReports();
  const recent = reports.slice(0, 4);

  return (
    <div>
      {/* HERO */}
      <header className="hero">
        <div className="hero-grid-overlay" />
        <div className="hero-content">
          {/* 
          <div className="section-label" style={{ color: '#d4714a', marginBottom: '1.5rem' }}>
            Est. 2026
          </div>
          */}
          <h1>Independent Commodity Research &amp; Market Insights</h1>
          <p className="hero-desc">
            Data-driven analysis of energy, agriculture, and global trade flows. 
            Covering cross-commodity relationships, market structure, and price dynamics.
          </p>
          <p className="hero-desc">
          <div>
            Published by Monu Chouhan
          </div>
          </p>
          <div className="hero-stats">
            <div>
              <div className="stat-number">{reports.length}</div>
              <div className="stat-label">Published Reports</div>
            </div>
            <div>
              <div className="stat-number">Weekly</div>
              <div className="stat-label">Market Notes</div>
            </div>
          </div>
        </div>
      </header>

      {/* LATEST RESEARCH */}
      <section className="container" style={{ paddingTop: '4rem' }}>
        <div className="section-label">Latest Research</div>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '1.25rem',
          marginTop: '1rem'
        }}>
          {recent.map(report => (
            <Link href={`/reports/${report.slug}`} key={report.slug}>
              <div className="report-card">
                <div className="card-tags">
                  {report.tags.map(tag => (
                    <span className="tag" key={tag}>{tag}</span>
                  ))}
                </div>
                <h3 className="card-title">{report.title}</h3>
                <p className="card-summary">{report.summary?.slice(0, 120)}...</p>
                <div className="card-date">
                  {new Date(report.date).toLocaleDateString('en-US', {
                    month: 'short', day: 'numeric', year: 'numeric'
                  })}
                </div>
              </div>
            </Link>
          ))}
        </div>
        <div style={{ textAlign: 'center', marginTop: '2.5rem' }}>
          <Link href="/research" className="btn-primary" style={{ display: 'inline-block', textDecoration: 'none' }}>
            View All Reports
          </Link>
        </div>
      </section>
    </div>
  );
}
