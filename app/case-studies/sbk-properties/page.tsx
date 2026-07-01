import type { Metadata } from 'next';
import '../case-study.css';
import CaseHero from '../CaseHero';

export const metadata: Metadata = {
  title: 'SBK Properties: Real Estate Developer Case Study',
  description: 'How Wide Wings Media delivered targeted lead generation for SBK Properties, building a high-quality pipeline in the competitive UAE real estate market.',
};

export default function SbkPropertiesCaseStudy() {
  return (
    <>
      <CaseHero
        image="/sbk-dubai-realestate.webp"
        category="Real Estate"
        client="SBK Properties"
        title="Real Estate Developer"
        result={<>Targeted lead generation achieving a <strong>high-quality pipeline</strong> in a competitive UAE market.</>}
      />

      {/* Full case study content coming soon */}
    </>
  );
}
