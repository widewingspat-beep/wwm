import type { Metadata } from 'next';
import '../case-study.css';
import CaseHero from '../CaseHero';
import CaseGallery, { type GalleryImage } from '../CaseGallery';
import {
  CaseIntro,
  CaseSplit,
  CaseChallenges,
  CaseProcess,
  CaseServiceGroups,
  CaseTestimonial,
} from '../CaseContent';

const galleryImages: GalleryImage[] = [
  { src: '/batterjee/batterjee-post-1.jpg', alt: 'Batterjee Properties campaign post 1' },
  { src: '/batterjee/batterjee-post-2.jpg', alt: 'Batterjee Properties campaign post 2' },
  { src: '/batterjee/batterjee-post-3.jpg', alt: 'Batterjee Properties campaign post 3' },
];

export const metadata: Metadata = {
  title: 'Batterjee Properties: Real Estate Developer Case Study',
  description: 'How Wide Wings Media delivered targeted lead generation for Batterjee Properties, building a high-quality pipeline in the competitive UAE real estate market.',
};

export default function SbkPropertiesCaseStudy() {
  return (
    <>
      <CaseHero
        image="/sbk-dubai-realestate.webp"
        category="Real Estate"
        client="Batterjee Properties"
        title="Real Estate Developer"
        result={<>Targeted lead generation achieving a <strong>high-quality pipeline</strong> in a competitive UAE market.</>}
      />

      <CaseIntro
        title="About the Client"
        meta={[
          { label: 'Category', value: 'Real Estate' },
          { label: 'Location', value: 'UAE — Dubai · Saudi-rooted business group presence' },
        ]}
        paragraphs={[
          'Batterjee Properties is a Dubai-based real estate company focused on connecting buyers, sellers, and investors with the right property opportunities. Backed by the wider Batterjee business legacy, the brand enters the market with a modern vision for smarter real estate experiences and future-focused urban living.',
        ]}
      />

      <section className="cs-section">
        <div className="cs-container">
          <CaseSplit
            image="/batterjee/batterjee-post-1.jpg"
            images={[
              '/batterjee/batterjee-post-1.jpg',
              '/batterjee/batterjee-post-2.jpg',
              '/batterjee/batterjee-post-3.jpg',
            ]}
            imageAlt="Batterjee Properties campaign creative"
          >
            <CaseChallenges
              title="Main Challenges or Milestones"
              items={[
                'Introducing Batterjee Properties as a new real estate player while building trust in a highly competitive property market.',
                'Creating a clear and premium digital identity that reflects credibility, modern living, and investment confidence.',
                'Developing consistent communication that speaks to different real estate audiences, including homebuyers, sellers, and investors.',
              ]}
            />
          </CaseSplit>
        </div>
      </section>

      <section className="cs-section cs-section-alt">
        <div className="cs-container">
          <CaseProcess
            steps={[
              {
                title: 'Audit & Strategy',
                description: 'We analyzed the brand’s positioning, market audience, competitive landscape, and digital presence to define a clear communication roadmap for Batterjee Properties.',
              },
              {
                title: 'Creation & Execution',
                description: 'We developed the brand’s digital content direction, visual communication, copywriting, and creative assets to introduce the company with a strong, professional, and trustworthy market presence.',
              },
              {
                title: 'Ongoing Management',
                description: 'We continued refining the content and creative approach based on audience behavior, platform performance, and market relevance to maintain a consistent and credible real estate presence.',
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
            items: ['Brand Identity & Logo Design', 'Visual Guidelines & Typography', 'Graphic Design & Art Direction', 'Video Production & Animation', 'UI/UX Design'],
          },
          {
            heading: 'Social Media',
            items: ['Social Media Strategy', 'Content Creation & Calendar Management', 'Community Management', 'Influencer Marketing'],
          },
        ]}
      />

      <CaseGallery title="Campaign Gallery" images={galleryImages} />

      <CaseTestimonial
        quote="Wide Wings helped us shape Batterjee Properties’ presence with clarity, creativity, and confidence—bringing a modern real estate vision to life through strong storytelling and refined digital execution."
        attribution="— Batterjee Properties"
      />
    </>
  );
}
