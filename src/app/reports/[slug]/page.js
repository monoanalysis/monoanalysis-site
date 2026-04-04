import { getAllReportSlugs, getReportBySlug } from '@/lib/reports';
import Link from 'next/link';
import PdfButton from '@/components/PdfButton';

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
      <div className="no-print">
        <Link href="/research" style={{
          fontFamily: 'var(--mono)', fontSize: '0.72rem',
          color: 'var(--accent)', marginBottom: '2rem', display: 'inline-block'
        }}>
          ← Back to Reports
        </Link>
      </div>

      {/* TAGS */}
      <div className="card-tags" style={{ marginBottom: '1rem' }}>
        {report.tags?.map(tag => <span className="tag" key={tag}>{tag}</span>)}
      </div>

      {/* TITLE */}
      <h1>{report.title}</h1>
      {report.subtitle && <p className="report-subtitle">{report.subtitle}</p>}

      {/* META + PDF BUTTON */}
      <div style={{
        display: 'flex', justifyContent: 'space-between', alignItems: 'center',
        marginTop: '1.5rem', paddingBottom: '2rem', borderBottom: '1px solid var(--border)',
        flexWrap: 'wrap', gap: '1rem'
      }}>
        <div className="report-meta" style={{
          margin: 0, padding: 0, border: 'none'
        }}>
          <span>{dateStr}</span>
          <span>Monu</span>
          <span>8 min read</span>
        </div>
        <div className="no-print">
          <PdfButton />
        </div>
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

      {/* PDF FOOTER - only visible when printing */}
      <div className="print-only">
        <div style={{
          marginTop: '3rem', paddingTop: '1rem',
          borderTop: '1px solid #ddd', textAlign: 'center'
        }}>
          <p style={{ fontSize: '0.75rem', color: '#999' }}>
            monuanalysis.com — Independent Commodity Research
          </p>
        </div>
      </div>
    </div>
  );
}
