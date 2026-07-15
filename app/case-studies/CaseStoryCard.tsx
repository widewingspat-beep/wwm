import Link from 'next/link';
import type { CaseCardData } from './cases-data';

export default function CaseStoryCard({ data, index, useHomeBg }: { data: CaseCardData; index: number; useHomeBg?: boolean }) {
  const bg = useHomeBg && data.homeBg ? data.homeBg : data.bg;
  return (
    <Link href={data.href} className="case-card">
      <div className="case-card-bg" style={{ background: `url('${bg}') center center / cover no-repeat` }}></div>
      <div className="case-card-overlay"></div>
      <div className="case-card-accent">{data.cat}</div>
      <div className="case-card-brand"><img src="/brand-wings.svg" alt="" /></div>
      <div className="case-card-index">{String(index + 1).padStart(2, '0')}</div>
      <div className="case-card-content">
        <div className="case-client">{data.client}</div>
        <div className="case-title">{data.title}</div>
        <div className="case-result">{data.result}</div>
        <div className="case-card-cta">
          View Case Study
          <span className="case-card-cta-arrow">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="3"><line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" /></svg>
          </span>
        </div>
      </div>
    </Link>
  );
}
