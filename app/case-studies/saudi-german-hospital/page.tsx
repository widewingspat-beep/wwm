import type { Metadata } from 'next';
import '../case-study.css';
import CaseHero from '../CaseHero';
import CaseGallery, { type GalleryImage } from '../CaseGallery';
import {
  CaseIntro,
  CaseChallenges,
  CaseProcess,
  CaseServices,
  CaseServiceGroups,
  CaseImpactList,
  CaseTestimonial,
} from '../CaseContent';

const galleryImages: GalleryImage[] = [
  { src: '/sgh/sgh-post-01.jpg', alt: 'Saudi German Hospital campaign post 1' },
  { src: '/sgh/sgh-post-02.jpg', alt: 'Saudi German Hospital campaign post 2' },
  { src: '/sgh/sgh-post-03.jpg', alt: 'Saudi German Hospital campaign post 3' },
  { src: '/sgh/sgh-post-04.jpg', alt: 'Saudi German Hospital campaign post 4' },
  { src: '/sgh/sgh-post-05.jpg', alt: 'Saudi German Hospital campaign post 5' },
  { src: '/sgh/sgh-post-06.jpg', alt: 'Saudi German Hospital campaign post 6' },
  { src: '/sgh/sgh-post-07.jpg', alt: 'Saudi German Hospital campaign post 7' },
  { src: '/sgh/sgh-post-08.jpg', alt: 'Saudi German Hospital campaign post 8' },
  { src: '/sgh/sgh-post-09.jpg', alt: 'Saudi German Hospital campaign post 9' },
  { src: '/sgh/sgh-post-10.jpg', alt: 'Saudi German Hospital campaign post 10' },
  { src: '/sgh/sgh-post-11.jpg', alt: 'Saudi German Hospital campaign post 11' },
  { src: '/sgh/sgh-post-12.jpg', alt: 'Saudi German Hospital campaign post 12' },
  { src: '/sgh/sgh-post-13.jpg', alt: 'Saudi German Hospital campaign post 13' },
  { src: '/sgh/sgh-post-14.jpg', alt: 'Saudi German Hospital campaign post 14' },
  { src: '/sgh/sgh-post-15.jpg', alt: 'Saudi German Hospital campaign post 15' },
  { src: '/sgh/sgh-post-16.jpg', alt: 'Saudi German Hospital campaign post 16' },
  { src: '/sgh/sgh-post-17.jpg', alt: 'Saudi German Hospital campaign post 17' },
  { src: '/sgh/sgh-post-18.jpg', alt: 'Saudi German Hospital campaign post 18' },
  { src: '/sgh/sgh-post-19.jpg', alt: 'Saudi German Hospital campaign post 19' },
  { src: '/sgh/sgh-post-20.jpg', alt: 'Saudi German Hospital campaign post 20' },
  { src: '/sgh/sgh-post-21.jpg', alt: 'Saudi German Hospital campaign post 21' },
  { src: '/sgh/sgh-post-22.jpg', alt: 'Saudi German Hospital campaign post 22' },
  { src: '/sgh/sgh-post-23.jpg', alt: 'Saudi German Hospital campaign post 23' },
  { src: '/sgh/sgh-post-24.jpg', alt: 'Saudi German Hospital campaign post 24' },
  { src: '/sgh/sgh-post-25.jpg', alt: 'Saudi German Hospital campaign post 25' },
  { src: '/sgh/sgh-post-26.jpg', alt: 'Saudi German Hospital campaign post 26' },
  { src: '/sgh/sgh-post-27.jpg', alt: 'Saudi German Hospital campaign post 27' },
  { src: '/sgh/sgh-post-28.jpg', alt: 'Saudi German Hospital campaign post 28' },
  { src: '/sgh/sgh-post-29.jpg', alt: 'Saudi German Hospital campaign post 29' },
  { src: '/sgh/sgh-post-30.jpg', alt: 'Saudi German Hospital campaign post 30' },
  { src: '/sgh/sgh-post-31.jpg', alt: 'Saudi German Hospital campaign post 31' },
  { src: '/sgh/sgh-post-32.jpg', alt: 'Saudi German Hospital campaign post 32' },
  { src: '/sgh/sgh-post-33.jpg', alt: 'Saudi German Hospital campaign post 33' },
  { src: '/sgh/sgh-post-34.jpg', alt: 'Saudi German Hospital campaign post 34' },
  { src: '/sgh/sgh-post-35.jpg', alt: 'Saudi German Hospital campaign post 35' },
  { src: '/sgh/sgh-post-36.jpg', alt: 'Saudi German Hospital campaign post 36' },
  { src: '/sgh/sgh-post-37.jpg', alt: 'Saudi German Hospital campaign post 37' },
  { src: '/sgh/sgh-post-38.jpg', alt: 'Saudi German Hospital campaign post 38' },
  { src: '/sgh/sgh-post-39.jpg', alt: 'Saudi German Hospital campaign post 39' },
  { src: '/sgh/sgh-post-40.jpg', alt: 'Saudi German Hospital campaign post 40' },
  { src: '/sgh/sgh-post-41.jpg', alt: 'Saudi German Hospital campaign post 41' },
  { src: '/sgh/sgh-post-42.jpg', alt: 'Saudi German Hospital campaign post 42' },
  { src: '/sgh/sgh-post-43.jpg', alt: 'Saudi German Hospital campaign post 43' },
  { src: '/sgh/sgh-post-44.jpg', alt: 'Saudi German Hospital campaign post 44' },
  { src: '/sgh/sgh-post-45.jpg', alt: 'Saudi German Hospital campaign post 45' },
  { src: '/sgh/sgh-post-46.jpg', alt: 'Saudi German Hospital campaign post 46' },
  { src: '/sgh/sgh-post-47.jpg', alt: 'Saudi German Hospital campaign post 47' },
  { src: '/sgh/sgh-post-48.jpg', alt: 'Saudi German Hospital campaign post 48' },
  { src: '/sgh/sgh-post-49.jpg', alt: 'Saudi German Hospital campaign post 49' },
  { src: '/sgh/sgh-post-50.jpg', alt: 'Saudi German Hospital campaign post 50' },
  { src: '/sgh/sgh-post-51.jpg', alt: 'Saudi German Hospital campaign post 51' },
  { src: '/sgh/sgh-post-52.jpg', alt: 'Saudi German Hospital campaign post 52' },
  { src: '/sgh/sgh-post-53.jpg', alt: 'Saudi German Hospital campaign post 53' },
  { src: '/sgh/sgh-post-54.jpg', alt: 'Saudi German Hospital campaign post 54' },
  { src: '/sgh/sgh-post-55.jpg', alt: 'Saudi German Hospital campaign post 55' },
  { src: '/sgh/sgh-post-56.jpg', alt: 'Saudi German Hospital campaign post 56' },
  { src: '/sgh/sgh-post-57.jpg', alt: 'Saudi German Hospital campaign post 57' },
  { src: '/sgh/sgh-post-58.jpg', alt: 'Saudi German Hospital campaign post 58' },
  { src: '/sgh/sgh-post-59.jpg', alt: 'Saudi German Hospital campaign post 59' },
  { src: '/sgh/sgh-post-60.jpg', alt: 'Saudi German Hospital campaign post 60' },
  { src: '/sgh/sgh-post-61.jpg', alt: 'Saudi German Hospital campaign post 61' },
  { src: '/sgh/sgh-post-62.jpg', alt: 'Saudi German Hospital campaign post 62' },
  { src: '/sgh/sgh-post-63.jpg', alt: 'Saudi German Hospital campaign post 63' },
  { src: '/sgh/sgh-post-64.jpg', alt: 'Saudi German Hospital campaign post 64' },
  { src: '/sgh/sgh-post-65.jpg', alt: 'Saudi German Hospital campaign post 65' },
  { src: '/sgh/sgh-post-66.jpg', alt: 'Saudi German Hospital campaign post 66' },
  { src: '/sgh/sgh-post-67.jpg', alt: 'Saudi German Hospital campaign post 67' },
  { src: '/sgh/sgh-post-68.jpg', alt: 'Saudi German Hospital campaign post 68' },
  { src: '/sgh/sgh-post-69.jpg', alt: 'Saudi German Hospital campaign post 69' },
  { src: '/sgh/sgh-post-70.jpg', alt: 'Saudi German Hospital campaign post 70' },
  { src: '/sgh/sgh-post-71.jpg', alt: 'Saudi German Hospital campaign post 71' },
  { src: '/sgh/sgh-post-72.jpg', alt: 'Saudi German Hospital campaign post 72' },
  { src: '/sgh/sgh-post-73.jpg', alt: 'Saudi German Hospital campaign post 73' },
  { src: '/sgh/sgh-post-74.jpg', alt: 'Saudi German Hospital campaign post 74' },
  { src: '/sgh/sgh-post-75.jpg', alt: 'Saudi German Hospital campaign post 75' },
  { src: '/sgh/sgh-post-76.jpg', alt: 'Saudi German Hospital campaign post 76' },
  { src: '/sgh/sgh-post-77.jpg', alt: 'Saudi German Hospital campaign post 77' },
  { src: '/sgh/sgh-post-78.jpg', alt: 'Saudi German Hospital campaign post 78' },
  { src: '/sgh/sgh-post-79.jpg', alt: 'Saudi German Hospital campaign post 79' },
  { src: '/sgh/sgh-post-80.jpg', alt: 'Saudi German Hospital campaign post 80' },
  { src: '/sgh/sgh-post-81.jpg', alt: 'Saudi German Hospital campaign post 81' },
  { src: '/sgh/sgh-post-82.jpg', alt: 'Saudi German Hospital campaign post 82' },
  { src: '/sgh/sgh-post-83.jpg', alt: 'Saudi German Hospital campaign post 83' },
  { src: '/sgh/sgh-post-84.jpg', alt: 'Saudi German Hospital campaign post 84' },
  { src: '/sgh/sgh-post-85.jpg', alt: 'Saudi German Hospital campaign post 85' },
  { src: '/sgh/sgh-post-86.jpg', alt: 'Saudi German Hospital campaign post 86' },
  { src: '/sgh/sgh-post-87.jpg', alt: 'Saudi German Hospital campaign post 87' },
  { src: '/sgh/sgh-post-88.jpg', alt: 'Saudi German Hospital campaign post 88' },
  { src: '/sgh/sgh-post-89.jpg', alt: 'Saudi German Hospital campaign post 89' },
  { src: '/sgh/sgh-post-90.jpg', alt: 'Saudi German Hospital campaign post 90' },
  { src: '/sgh/sgh-post-91.jpg', alt: 'Saudi German Hospital campaign post 91' },
  { src: '/sgh/sgh-post-92.jpg', alt: 'Saudi German Hospital campaign post 92' },
  { src: '/sgh/sgh-post-93.jpg', alt: 'Saudi German Hospital campaign post 93' },
];

export const metadata: Metadata = {
  title: 'Saudi German Hospital Group: Healthcare Brand Growth Case Study',
  description: 'Saudi German Health is one of the region’s leading private healthcare groups, delivering multi-specialty hospital care, clinics, and advanced medical services across the MENA region.',
};

export default function SaudiGermanHospitalCaseStudy() {
  return (
    <>
      <CaseHero
        image="/sgh-best-hospital-in-dubai.webp"
        category="Healthcare"
        client="Saudi German Hospital Group"
        title="Healthcare Brand Growth"
        result="Built a unified yet locally relevant social media presence across SGH branches in Saudi Arabia, the UAE, and Egypt, supported by region-specific websites that maintain a consistent brand experience."
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

      <CaseGallery title="Campaign Gallery" images={galleryImages} />

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
