import type { Metadata } from 'next';
import '../case-study.css';
import CaseHero from '../CaseHero';

export const metadata: Metadata = {
  title: 'Zaina Cafe: Cafe Chain Launch Case Study',
  description: 'How Wide Wings Media delivered a full brand rollout for Zaina Cafe, driving 3x engagement growth in 60 days.',
};

export default function ZainaCafeCaseStudy() {
  return (
    <>
      <CaseHero
        image="/zaina-launch.webp"
        category="Hospitality"
        client="Zaina Cafe"
        title="Cafe Chain Launch"
        result={<>Full brand rollout delivering <strong>3&times; engagement growth</strong> in 60 days.</>}
      />

      {/* Full case study content coming soon */}
    </>
  );
}
