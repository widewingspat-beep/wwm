import type { Metadata } from 'next';
import '../case-study.css';
import CaseHero from '../CaseHero';
import {
  CaseIntro,
  CaseChallenges,
  CaseProcess,
  CaseServices,
  CaseServiceGroups,
  CaseImpactList,
  CaseTestimonial,
} from '../CaseContent';

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

      <CaseIntro
        title="About SGH"
        meta={[
          { label: 'Category', value: 'Healthcare' },
          { label: 'Location', value: 'KSA, UAE, and Egypt' },
        ]}
        paragraphs={[
          'Saudi German Health is one of the region’s leading private healthcare groups, delivering multi-specialty hospital care, clinics, and advanced medical services across the MENA region. With a strong presence in Saudi Arabia, the UAE, and Egypt, SGH combines specialized care, international partnerships, and patient-focused healthcare experiences across its network.',
        ]}
      />

      <section className="cs-section">
        <div className="cs-container">
          <CaseChallenges
            title="Main Challenges or Milestones"
            items={[
              'Maintaining a unified digital identity across multiple countries, hospital branches, specialties, and audience needs.',
              'Creating consistent, medically accurate, and engaging content that makes complex healthcare topics accessible to patients and families.',
              'Supporting awareness, trust, and appointment-driven communication across a highly competitive healthcare market.',
              'Developing region-specific websites that reflect local market needs while maintaining a consistent brand experience across all digital platforms.',
            ]}
          />
        </div>
      </section>

      <CaseServices
        eyebrow="The Scope"
        title="Work Scope Across KSA, UAE, and Egypt"
        items={[
          'Social media management',
          'Healthcare content development',
          'Website development.',
          'Content strategy and monthly calendar planning',
          'Arabic and English copywriting',
          'Creative direction',
          'Specialty-focused campaigns',
          'Health-awareness content.',
        ]}
      />

      <section className="cs-section cs-section-alt">
        <div className="cs-container">
          <CaseProcess
            steps={[
              {
                title: 'Audit & Strategy',
                description: 'We assessed each market’s audience, branch priorities, medical specialties, seasonal health needs, and content performance to build a localized strategy under one unified SGH brand direction. For web development, we analyzed user journeys, service structures, and regional requirements to define clear website architectures for each market.',
              },
              {
                title: 'Creation & Execution',
                description: 'We developed clear, patient-friendly content across static posts, carousels, reels, awareness campaigns, doctor-led communication, and service-focused creatives—while ensuring each piece remained medically responsible and aligned with the brand. In parallel, we designed and developed two dedicated websites: one serving Egypt and Alexandria, and another tailored for KSA and UAE, ensuring optimized user experience, clear navigation, and localized content structures.',
              },
              {
                title: 'Ongoing Management',
                description: 'We continuously optimized content direction based on seasonal priorities, engagement patterns, medical campaigns, and branch-specific needs to maintain relevance, consistency, and sustained audience trust. We also supported ongoing website updates, content enhancements, and performance improvements to ensure both platforms remain aligned with evolving business needs.',
              },
            ]}
          />
        </div>
      </section>

      <CaseServiceGroups
        eyebrow="What We Offer"
        title="Services We Provide"
        groups={[
          {
            heading: 'Branding & Creative',
            items: ['Graphic Design & Art Direction', 'Video Production & Animation'],
          },
          {
            heading: 'Social Media',
            items: ['Social Media Strategy', 'Content Creation & Calendar Management', 'Community Management'],
          },
          {
            heading: 'Performance Marketing & Ads',
            items: ['Media Buying & Planning', 'Meta Ads (Facebook & Instagram)', 'Google Ads (Search, Display, YouTube)'],
          },
          {
            heading: 'SEO & Content',
            items: ['Website Copywriting', 'Blog & Article Creation'],
          },
          {
            heading: 'Web & Tech',
            items: ['Website Design & Development', 'Landing Page Creation', 'Google Analytics & Tracking Setup'],
          },
        ]}
      />

      <CaseImpactList
        items={[
          {
            heading: 'Brand Consistency Across Markets',
            description: 'Built a unified yet locally relevant social media presence across SGH branches in Saudi Arabia, the UAE, and Egypt, supported by region-specific websites that maintain a consistent brand experience.',
          },
          {
            heading: 'Healthcare Content at Scale',
            description: 'Delivered ongoing specialty-led, awareness-driven, and patient-friendly content covering multiple medical departments, health campaigns, and seasonal concerns.',
          },
          {
            heading: 'Stronger Patient Communication',
            description: 'Simplified complex medical information into accessible, engaging content designed to educate audiences, build trust, and encourage service consideration across both social platforms and websites.',
          },
          {
            heading: 'Localized Market Relevance',
            description: 'Adapted messaging, language, campaigns, healthcare priorities, and website structures to suit diverse audiences across KSA, UAE, and Egypt while protecting one consistent SGH brand voice.',
          },
          {
            heading: 'Scalable Digital Ecosystem',
            description: 'Established a structured content workflow and developed two scalable websites—one for Egypt and Alexandria, and another for KSA and UAE—supporting recurring campaigns, medical international days, branch priorities, doctor-focused communication, and service awareness throughout the year.',
          },
        ]}
      />

      <CaseTestimonial
        quote="Wide Wings demonstrated a clear understanding of healthcare communication—balancing accuracy, empathy, and engagement across every market and specialty."
        attribution="— Saudi German Hospitals"
      />
    </>
  );
}
