import type { Metadata } from 'next';
import '../case-study.css';
import CaseHero from '../CaseHero';

export const metadata: Metadata = {
  title: 'Saudi German Hospital Group: Healthcare Brand Growth Case Study',
  description: 'How Wide Wings Media grew Saudi German Hospital Group’s digital presence, achieving a 600% increase in traffic and 5x ROAS across MENA.',
};

export default function SaudiGermanHospitalCaseStudy() {
  return (
    <>
      <CaseHero
        image="/sgh-best-hospital-in-dubai.webp"
        category="Healthcare"
        client="Saudi German Hospital Group"
        title="Healthcare Brand Growth"
        result={<>Achieved <strong>600% increase in traffic</strong> and <strong>5&times; ROAS</strong> across MENA.</>}
      />

      {/* Full case study content coming soon */}
    </>
  );
}
