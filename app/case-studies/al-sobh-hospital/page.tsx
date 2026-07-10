import type { Metadata } from 'next';
import '../case-study.css';
import CaseHero from '../CaseHero';
import {
  CaseIntro,
  CaseChallenges,
  CaseServices,
  CaseProcess,
  CaseServiceGroups,
  CaseTestimonial,
} from '../CaseContent';

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
          <CaseChallenges
            title="Main Challenges or Milestones"
            items={[
              'Communicating sensitive mental health, addiction, and rehabilitation topics in a responsible, culturally aware, and stigma-conscious way.',
              'Encouraging Saudi audiences to view hospital visits for mental health as a proactive step toward wellbeing, not only a last resort.',
              'Giving equal visibility to Al Sobh’s general clinics and medical services to position the hospital as a comprehensive healthcare institution, not solely a mental health provider.',
            ]}
          />
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

      <CaseTestimonial
        quote="Wide Wings helped us communicate healthcare with greater clarity, empathy, and consistency by making sensitive topics more approachable while strengthening awareness of our wider medical services."
        attribution="— Al Sobh Hospital"
      />
    </>
  );
}
