import { getAllReports } from '@/lib/reports';
import ResearchPageClient from '@/components/ResearchPageClient';

export default function ResearchPage() {
  const reports = getAllReports();
  return <ResearchPageClient reports={reports} />;
}
