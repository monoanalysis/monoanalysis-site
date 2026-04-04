'use client';

import { useState } from 'react';
import Link from 'next/link';

// NOTE: In a static export, we fetch data at build time.
// For client-side filtering, we pass reports as a prop from a server component.
// This is a simplified version that works with static export.

const TAGS = ['All', 'Oil', 'Gas', 'Agriculture', 'Metals', 'Macro'];

export default function ResearchPageClient({ reports }) {
  const [activeTag, setActiveTag] = useState('All');
  const [search, setSearch] = useState('');

  const filtered = reports.filter(r => {
    const matchTag = activeTag === 'All' || r.tags?.includes(activeTag);
    const matchSearch = search === '' ||
      r.title.toLowerCase().includes(search.toLowerCase()) ||
      r.summary?.toLowerCase().includes(search.toLowerCase());
    return matchTag && matchSearch;
  });

  return (
    <div className="container">
      <div className="section-label">Research Library</div>
      <h1 style={{
        fontFamily: 'var(--serif)', fontSize: '2.2rem', fontWeight: 400,
        letterSpacing: '-0.02em', marginBottom: '2.5rem'
      }}>Published Reports</h1>

      {/* FILTERS */}
      <div className="filter-bar">
        <input
          value={search}
          onChange={e => setSearch(e.target.value)}
          placeholder="Search reports..."
          className="search-input"
        />
        <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
          {TAGS.map(tag => (
            <button
              key={tag}
              onClick={() => setActiveTag(tag)}
              className={`filter-btn ${activeTag === tag ? 'active' : ''}`}
            >{tag}</button>
          ))}
        </div>
      </div>

      <div style={{
        fontFamily: 'var(--mono)', fontSize: '0.7rem',
        color: 'var(--ink-faint)', marginBottom: '1.5rem'
      }}>
        {filtered.length} report{filtered.length !== 1 ? 's' : ''} found
      </div>

      {/* REPORT LIST */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        {filtered.map(r => (
          <Link href={`/reports/${r.slug}`} key={r.slug}>
            <div className="report-card" style={{
              display: 'grid', gridTemplateColumns: '1fr auto',
              gap: '2rem', alignItems: 'center'
            }}>
              <div>
                <div className="card-tags">
                  {r.tags?.map(tag => <span className="tag" key={tag}>{tag}</span>)}
                </div>
                <h3 className="card-title" style={{ fontSize: '1.1rem' }}>{r.title}</h3>
                <p className="card-summary">{r.summary?.slice(0, 150)}...</p>
              </div>
              <div style={{ textAlign: 'right', minWidth: '90px' }}>
                <div className="card-date">
                  {new Date(r.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
                </div>
                <div style={{
                  fontFamily: 'var(--mono)', fontSize: '0.65rem',
                  color: 'var(--accent)', marginTop: '0.5rem',
                  textTransform: 'uppercase', letterSpacing: '0.06em'
                }}>Read →</div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
