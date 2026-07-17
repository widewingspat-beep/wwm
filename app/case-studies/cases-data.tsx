import type { ReactNode } from 'react';

export type CaseCardData = {
  bg: string;
  /** Optional override used only on the homepage success-story slider. */
  homeBg?: string;
  cat: string;
  client: string;
  title: string;
  result: ReactNode;
  href: string;
};

export const CASE_STUDIES: CaseCardData[] = [
  { bg: '/zaina-launch.webp', homeBg: '/home-card-zaina.webp', cat: 'Hospitality', client: 'Zaina Cafe', title: 'Cafe Chain Launch', result: <>Full brand rollout delivering <strong>3× engagement growth</strong> in 60 days.</>, href: '/case-studies/zaina-cafe' },
  { bg: '/sgh-best-hospital-in-dubai.webp', homeBg: '/home-card-sgh.webp', cat: 'Healthcare', client: 'Saudi German Hospital Group', title: 'Healthcare Brand Growth', result: <>Achieved <strong>600% increase in traffic</strong> and <strong>5× ROAS</strong> across MENA.</>, href: '/case-studies/saudi-german-hospital' },
  { bg: '/al-sobh-hospital-card.webp', homeBg: '/home-card-al-sobh.webp', cat: 'Healthcare', client: 'Al Sobh Hospital', title: 'Healthcare Communication & Awareness', result: <>Translated sensitive healthcare topics into <strong>clear, reassuring, patient-friendly communication</strong>.</>, href: '/case-studies/al-sobh-hospital' },
  { bg: '/placeholder-case-study.webp', homeBg: '/home-card-make-a-wish.webp', cat: 'Non-Profit', client: 'Make-A-Wish Saudi Arabia', title: 'Charity Awareness Campaign', result: <>Translated the impact of wish-granting into <strong>simple, emotional, inspiring stories</strong>.</>, href: '/case-studies/make-a-wish-saudi-arabia' },
  { bg: '/sbk-dubai-realestate.webp', homeBg: '/home-card-sbk.webp', cat: 'Real Estate', client: 'Batterjee Properties', title: 'Real Estate Developer', result: <>Targeted lead generation achieving <strong>high-quality pipeline</strong> in competitive UAE market.</>, href: '/case-studies/batterjee-properties' },
];
