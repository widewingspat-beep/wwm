import Image from 'next/image';
import type { ReactNode } from 'react';

type SectionProps = {
  eyebrow?: string;
  title?: string;
  className?: string;
  children: ReactNode;
};

export function CaseSection({ eyebrow, title, className = '', children }: SectionProps) {
  return (
    <section className={`cs-section ${className}`}>
      <div className="cs-container">
        {eyebrow && <p className="cs-eyebrow">{eyebrow}</p>}
        {title && <h2 className="cs-section-title">{title}</h2>}
        {children}
      </div>
    </section>
  );
}

type CaseSplitProps = {
  image: string;
  imageAlt: string;
  reverse?: boolean;
  children: ReactNode;
};

export function CaseSplit({ image, imageAlt, reverse, children }: CaseSplitProps) {
  return (
    <div className={`cs-split${reverse ? ' cs-split-reverse' : ''}`}>
      <div className="cs-split-media">
        <Image src={image} alt={imageAlt} fill sizes="(max-width: 900px) 90vw, 45vw" style={{ objectFit: 'cover' }} />
      </div>
      <div className="cs-split-content">{children}</div>
    </div>
  );
}

type MetaItem = { label: string; value: string };

export function CaseIntro({ meta, paragraphs, visual }: { meta: MetaItem[]; paragraphs: string[]; visual?: ReactNode }) {
  return (
    <CaseSection eyebrow="Overview" title="About Zaina Cafe">
      <div className={visual ? 'cs-intro-grid' : undefined}>
        <div>
          <div className="cs-meta-row">
            {meta.map((m) => (
              <div className="cs-meta-item" key={m.label}>
                <p className="cs-meta-label">{m.label}</p>
                <p className="cs-meta-value">{m.value}</p>
              </div>
            ))}
          </div>
          {paragraphs.map((p) => (
            <p className="cs-lead" key={p}>{p}</p>
          ))}
        </div>
        {visual && <div className="cs-intro-visual">{visual}</div>}
      </div>
    </CaseSection>
  );
}

export function CaseChallenges({ intro, items }: { intro: string; items: string[] }) {
  return (
    <>
      <p className="cs-eyebrow">The Brief</p>
      <h2 className="cs-section-title">Challenges</h2>
      <p className="cs-lead">{intro}</p>
      <div className="cs-challenge-list">
        {items.map((item, i) => (
          <div className="cs-challenge-item" key={item}>
            <span className="cs-challenge-num">{String(i + 1).padStart(2, '0')}</span>
            <p className="cs-challenge-text">{item}</p>
          </div>
        ))}
      </div>
    </>
  );
}

type ProcessStep = { title: string; description: string };

export function CaseProcess({ steps }: { steps: ProcessStep[] }) {
  return (
    <>
      <p className="cs-eyebrow">Our Approach</p>
      <h2 className="cs-section-title">Our Work Process</h2>
      <div className="cs-process-list">
        {steps.map((step) => (
          <div className="cs-process-step" key={step.title}>
            <p className="cs-process-step-title">{step.title}</p>
            <p className="cs-process-step-desc">{step.description}</p>
          </div>
        ))}
      </div>
    </>
  );
}

export function CaseServices({ items }: { items: string[] }) {
  return (
    <CaseSection eyebrow="Scope of Work" title="Services We Provided">
      <div className="cs-services-grid">
        {items.map((item) => (
          <div className="cs-service-item" key={item}>
            <span className="cs-service-check">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="3"><polyline points="20 6 9 17 4 12" /></svg>
            </span>
            {item}
          </div>
        ))}
      </div>
    </CaseSection>
  );
}

type ResultGroup = { heading: string; items: string[] };

export function CaseResults({ groups }: { groups: ResultGroup[] }) {
  return (
    <CaseSection eyebrow="The Outcome" title="Results & Business Impact">
      <div className="cs-results-groups">
        {groups.map((group) => (
          <div key={group.heading}>
            <p className="cs-result-group-title">{group.heading}</p>
            <div className="cs-result-list">
              {group.items.map((item) => (
                <div className="cs-result-item" key={item}>
                  <span className="cs-result-bullet" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </CaseSection>
  );
}

type PlatformMetric = { label: string; a: number; b: number; format?: (n: number) => string };

export function CaseStats({
  note,
  platformA,
  platformB,
  metrics,
}: {
  note?: string;
  platformA: string;
  platformB: string;
  metrics: PlatformMetric[];
}) {
  return (
    <CaseSection eyebrow="Performance" title="Performance at a Glance" className="cs-section-alt">
      {note && <p className="cs-stats-note">{note}</p>}
      <div className="cs-stats-grid">
        {metrics.map((metric) => {
          const max = Math.max(metric.a, metric.b) || 1;
          const format = metric.format ?? ((n: number) => n.toLocaleString('en-US'));
          return (
            <div className="cs-stat-card" key={metric.label}>
              <p className="cs-stat-label">{metric.label}</p>

              <div className="cs-stat-row">
                <span className="cs-stat-platform">{platformA}</span>
                <span className="cs-stat-value">{format(metric.a)}</span>
              </div>
              <div className="cs-stat-bar-track">
                <div className="cs-stat-bar-fill ig" style={{ width: `${(metric.a / max) * 100}%` }} />
              </div>

              <div className="cs-stat-row">
                <span className="cs-stat-platform">{platformB}</span>
                <span className="cs-stat-value">{format(metric.b)}</span>
              </div>
              <div className="cs-stat-bar-track">
                <div className="cs-stat-bar-fill tiktok" style={{ width: `${(metric.b / max) * 100}%` }} />
              </div>
            </div>
          );
        })}
      </div>
    </CaseSection>
  );
}
