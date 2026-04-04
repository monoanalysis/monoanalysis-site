import { getAllReportSlugs, getReportBySlug } from '@/lib/reports';
import Link from 'next/link';

// Generate static paths for all reports
export async function generateStaticParams() {
  const slugs = getAllReportSlugs();
  return slugs.map(slug => ({ slug }));
}

export default async function ReportPage({ params }) {
  const report = await getReportBySlug(params.slug);

  const dateStr = new Date(report.date).toLocaleDateString('en-US', {
    month: 'long', day: 'numeric', year: 'numeric'
  });

  return (
    <div className="report-content">
      <Link href="/research" style={{
        fontFamily: 'var(--mono)', fontSize: '0.72rem',
        color: 'var(--accent)', marginBottom: '2rem', display: 'inline-block'
      }}>
        ← Back to Reports
      </Link>

      {/* TAGS */}
      <div className="card-tags" style={{ marginBottom: '1rem' }}>
        {report.tags?.map(tag => <span className="tag" key={tag}>{tag}</span>)}
      </div>

      {/* TITLE */}
      <h1>{report.title}</h1>
      {report.subtitle && <p className="report-subtitle">{report.subtitle}</p>}

      {/* META */}
      <div className="report-meta">
        <span>{dateStr}</span>
        <span>Monu</span>
        <span>8 min read</span>
      </div>

      {/* BODY (rendered from markdown) */}
      <div
        className="report-body"
        dangerouslySetInnerHTML={{ __html: report.contentHtml }}
      />

      {/* DISCLAIMER */}
      <div className="disclaimer">
        <p>
          Disclaimer: This report is for educational and informational purposes only.
          It does not constitute investment advice or a recommendation to buy or sell
          any security or commodity.
        </p>
      </div>
    </div>
  );
}
