import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';

const reportsDirectory = path.join(process.cwd(), 'content/reports');

// Get all report slugs (for static page generation)
export function getAllReportSlugs() {
  const fileNames = fs.readdirSync(reportsDirectory);
  return fileNames
    .filter(f => f.endsWith('.md'))
    .map(f => f.replace(/\.md$/, ''));
}

// Get metadata for all reports (for listing pages)
export function getAllReports() {
  const slugs = getAllReportSlugs();
  const reports = slugs.map(slug => {
    const fullPath = path.join(reportsDirectory, `${slug}.md`);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { data } = matter(fileContents);
    return { slug, ...data };
  });

  // Sort by date descending
  return reports.sort((a, b) => (a.date < b.date ? 1 : -1));
}

// Get a single report with full HTML content
export async function getReportBySlug(slug) {
  const fullPath = path.join(reportsDirectory, `${slug}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);

  const processedContent = await remark().use(html).process(content);
  const contentHtml = processedContent.toString();

  return {
    slug,
    contentHtml,
    ...data,
  };
}
