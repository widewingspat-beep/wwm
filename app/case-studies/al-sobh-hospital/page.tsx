import type { Metadata } from 'next';
import '../case-study.css';
import CaseHero from '../CaseHero';
import CaseGallery, { type GalleryImage } from '../CaseGallery';
import {
  CaseIntro,
  CaseSplit,
  CaseChallenges,
  CaseServices,
  CaseProcess,
  CaseServiceGroups,
  CaseWebsitePreview,
  CaseTestimonial,
} from '../CaseContent';

const galleryImages: GalleryImage[] = [
  { src: '/alsaboh/al-sobh-post-01.jpg', alt: 'Al Sobh Hospital campaign post 1' },
  { src: '/alsaboh/al-sobh-post-02.jpg', alt: 'Al Sobh Hospital campaign post 2' },
  { src: '/alsaboh/al-sobh-post-03.jpg', alt: 'Al Sobh Hospital campaign post 3' },
  { src: '/alsaboh/al-sobh-post-04.jpg', alt: 'Al Sobh Hospital campaign post 4' },
  { src: '/alsaboh/al-sobh-post-05.jpg', alt: 'Al Sobh Hospital campaign post 5' },
  { src: '/alsaboh/al-sobh-post-06.jpg', alt: 'Al Sobh Hospital campaign post 6' },
  { src: '/alsaboh/al-sobh-post-07.jpg', alt: 'Al Sobh Hospital campaign post 7' },
  { src: '/alsaboh/al-sobh-post-08.jpg', alt: 'Al Sobh Hospital campaign post 8' },
  { src: '/alsaboh/al-sobh-post-09.jpg', alt: 'Al Sobh Hospital campaign post 9' },
  { src: '/alsaboh/al-sobh-post-10.jpg', alt: 'Al Sobh Hospital campaign post 10' },
  { src: '/alsaboh/al-sobh-post-11.jpg', alt: 'Al Sobh Hospital campaign post 11' },
  { src: '/alsaboh/al-sobh-post-12.jpg', alt: 'Al Sobh Hospital campaign post 12' },
  { src: '/alsaboh/al-sobh-post-13.jpg', alt: 'Al Sobh Hospital campaign post 13' },
  { src: '/alsaboh/al-sobh-post-14.jpg', alt: 'Al Sobh Hospital campaign post 14' },
  { src: '/alsaboh/al-sobh-post-15.jpg', alt: 'Al Sobh Hospital campaign post 15' },
  { src: '/alsaboh/al-sobh-post-16.jpg', alt: 'Al Sobh Hospital campaign post 16' },
  { src: '/alsaboh/al-sobh-post-17.jpg', alt: 'Al Sobh Hospital campaign post 17' },
  { src: '/alsaboh/al-sobh-post-18.jpg', alt: 'Al Sobh Hospital campaign post 18' },
  { src: '/alsaboh/al-sobh-post-19.jpg', alt: 'Al Sobh Hospital campaign post 19' },
  { src: '/alsaboh/al-sobh-post-20.jpg', alt: 'Al Sobh Hospital campaign post 20' },
  { src: '/alsaboh/al-sobh-post-21.jpg', alt: 'Al Sobh Hospital campaign post 21' },
  { src: '/alsaboh/al-sobh-post-22.jpg', alt: 'Al Sobh Hospital campaign post 22' },
  { src: '/alsaboh/al-sobh-post-23.jpg', alt: 'Al Sobh Hospital campaign post 23' },
  { src: '/alsaboh/al-sobh-post-24.jpg', alt: 'Al Sobh Hospital campaign post 24' },
  { src: '/alsaboh/al-sobh-post-25.jpg', alt: 'Al Sobh Hospital campaign post 25' },
  { src: '/alsaboh/al-sobh-post-26.jpg', alt: 'Al Sobh Hospital campaign post 26' },
  { src: '/alsaboh/al-sobh-post-27.jpg', alt: 'Al Sobh Hospital campaign post 27' },
  { src: '/alsaboh/al-sobh-post-28.jpg', alt: 'Al Sobh Hospital campaign post 28' },
  { src: '/alsaboh/al-sobh-post-29.jpg', alt: 'Al Sobh Hospital campaign post 29' },
  { src: '/alsaboh/al-sobh-post-30.jpg', alt: 'Al Sobh Hospital campaign post 30' },
  { src: '/alsaboh/al-sobh-post-31.jpg', alt: 'Al Sobh Hospital campaign post 31' },
  { src: '/alsaboh/al-sobh-post-32.jpg', alt: 'Al Sobh Hospital campaign post 32' },
  { src: '/alsaboh/al-sobh-post-33.jpg', alt: 'Al Sobh Hospital campaign post 33' },
  { src: '/alsaboh/al-sobh-post-34.jpg', alt: 'Al Sobh Hospital campaign post 34' },
  { src: '/alsaboh/al-sobh-post-35.jpg', alt: 'Al Sobh Hospital campaign post 35' },
  { src: '/alsaboh/al-sobh-post-36.jpg', alt: 'Al Sobh Hospital campaign post 36' },
];

export const metadata: Metadata = {
  title: 'Al Sobh Hospital: Healthcare Communication Case Study',
  description: 'Al Sobh Hospital is a specialized healthcare destination in Jeddah, operating under Saudi German Health, combining general medical care with psychiatric care, addiction treatment, rehabilitation, and long-term therapeutic support.',
};

export default function AlSobhHospitalCaseStudy() {
  return (
    <>
      <CaseHero
        image="/al-sobh-hospital.webp"
        category="Healthcare"
        client="Al Sobh Hospital"
        title="Healthcare Communication & Awareness"
        result="The work translated sensitive healthcare topics into clear, reassuring, and patient-friendly communication."
      />

      <CaseIntro
        title="About the Client"
        meta={[
          { label: 'Category', value: 'Healthcare' },
          { label: 'Location', value: 'KSA — Jeddah' },
        ]}
        paragraphs={[
          'Al Sobh Hospital is a specialized healthcare destination in Jeddah, operating under Saudi German Health. Built around a “two hospitals in one” model, it combines general medical care with psychiatric care, addiction treatment, rehabilitation, and long-term therapeutic support for patients across different age groups.',
        ]}
      />

      <section className="cs-section">
        <div className="cs-container">
          <CaseSplit
            image="/alsaboh/al-sobh-post-03.jpg"
            images={[
              '/alsaboh/al-sobh-post-03.jpg',
              '/alsaboh/al-sobh-post-08.jpg',
              '/alsaboh/al-sobh-post-13.jpg',
              '/alsaboh/al-sobh-post-18.jpg',
              '/alsaboh/al-sobh-post-23.jpg',
            ]}
            imageAlt="Al Sobh Hospital campaign creative"
          >
            <CaseChallenges
              title="Main Challenges or Milestones"
              items={[
                'Communicating sensitive mental health, addiction, and rehabilitation topics in a responsible, culturally aware, and stigma-conscious way.',
                'Encouraging Saudi audiences to view hospital visits for mental health as a proactive step toward wellbeing, not only a last resort.',
                'Giving equal visibility to Al Sobh’s general clinics and medical services to position the hospital as a comprehensive healthcare institution, not solely a mental health provider.',
              ]}
            />
          </CaseSplit>
        </div>
      </section>

      <CaseServices
        eyebrow="The Scope"
        title="Work Scope"
        items={[
          'Content calendars and creative design.',
          'Social media management.',
          'Website edits, landing pages, and additional functional website pages.',
          'Printed materials across different formats.',
        ]}
      />

      <section className="cs-section cs-section-alt">
        <div className="cs-container">
          <CaseSplit
            image="/alsaboh/al-sobh-post-28.jpg"
            collage={['/alsaboh/al-sobh-post-28.jpg', '/alsaboh/al-sobh-post-30.jpg', '/alsaboh/al-sobh-post-32.jpg', '/alsaboh/al-sobh-post-34.jpg']}
            imageAlt="Al Sobh Hospital creative campaign execution"
            reverse
          >
            <CaseProcess
              steps={[
                {
                  title: 'Audit & Strategy',
                  description: 'We reviewed Al Sobh Hospital’s service structure, audience needs, healthcare communication priorities, and digital touchpoints to develop a content and website roadmap that supports both mental health awareness and general medical service visibility.',
                },
                {
                  title: 'Creation & Execution',
                  description: 'We created bilingual and culturally relevant content calendars, social media designs, awareness campaigns, website updates, landing pages, and printed collateral. The work translated sensitive healthcare topics into clear, reassuring, and patient-friendly communication.',
                },
                {
                  title: 'Ongoing Management',
                  description: 'We continuously refined content based on seasonal health priorities, department needs, audience engagement, and campaign performance. Website pages and digital assets were also updated to ensure the patient journey remains clear, functional, and aligned with the hospital’s evolving services.',
                },
              ]}
            />
          </CaseSplit>
        </div>
      </section>

      <CaseServiceGroups
        eyebrow="What We Offer"
        title="Services We Provide"
        groups={[
          {
            heading: 'Branding & Creative',
            items: ['Visual Guidelines & Typography', 'Graphic Design & Art Direction', 'Video Production & Animation', 'UI/UX Design'],
          },
          {
            heading: 'Social Media',
            items: ['Social Media Strategy', 'Content Creation & Calendar Management', 'Community Management'],
          },
          {
            heading: 'SEO & Content',
            items: ['Technical SEO Audit', 'On-Page & Off-Page SEO', 'Website Copywriting', 'Blog & Article Creation'],
          },
          {
            heading: 'Web & Tech',
            items: ['Landing Page Creation', 'Website Edits & Functional Page Development'],
          },
        ]}
      />

      <CaseWebsitePreview
        label="Al Sobh Hospital"
        lead="Hover to scroll through the site we designed and built for Al Sobh Hospital."
        image="/alsaboh/al-sobh-website-preview.webp"
        imageAlt="Al Sobh Hospital website homepage"
        imageWidth={1000}
        imageHeight={3572}
      />

      <CaseGallery title="Campaign Gallery" images={galleryImages} />

      <CaseTestimonial
        quote="Wide Wings helped us communicate healthcare with greater clarity, empathy, and consistency by making sensitive topics more approachable while strengthening awareness of our wider medical services."
        attribution="— Al Sobh Hospital"
      />
    </>
  );
}
