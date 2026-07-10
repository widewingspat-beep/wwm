import type { Metadata } from 'next';
import '../case-study.css';
import CaseHero from '../CaseHero';
import {
  CaseIntro,
  CaseChallenges,
  CaseProcess,
  CaseServiceGroups,
  CaseTestimonial,
} from '../CaseContent';

export const metadata: Metadata = {
  title: 'Make-A-Wish Saudi Arabia: Charity Awareness Case Study',
  description: 'Make-A-Wish Saudi Arabia is a non-profit organization dedicated to granting life-changing wishes for children with critical illnesses, bringing a global humanitarian mission into the local Saudi community.',
};

export default function MakeAWishSaudiArabiaCaseStudy() {
  return (
    <>
      <CaseHero
        image="/placeholder-case-study.webp"
        category="Non-Profit"
        client="Make-A-Wish Saudi Arabia"
        title="Charity Awareness Campaign"
        result="We developed content and creative assets that translate the impact of wish-granting into simple, emotional, and inspiring stories."
      />

      <CaseIntro
        title="About the Client"
        meta={[
          { label: 'Category', value: 'Charity / Non-Profit Organization' },
          { label: 'Location', value: 'KSA' },
        ]}
        paragraphs={[
          'Make-A-Wish Saudi Arabia is a non-profit organization dedicated to granting life-changing wishes for children with critical illnesses. As the Saudi affiliate of one of the world’s most recognized wish-granting organizations, it brings a global humanitarian mission into the local Saudi community with a focus on hope, emotional support, and meaningful impact.',
        ]}
      />

      <section className="cs-section">
        <div className="cs-container">
          <CaseChallenges
            title="Main Challenges or Milestones"
            items={[
              'Introducing the wish-granting concept into Saudi society in a way that feels clear, trusted, culturally relevant, and emotionally resonant.',
              'Building awareness for charity work in a sensitive space where giving is often associated with Zakat, Sadaqah, and direct financial aid.',
              'Explaining the role of NGOs and NPOs in supporting children and families emotionally, not only financially—showing how a wish can bring hope, strength, and joy during difficult medical journeys.',
            ]}
          />
        </div>
      </section>

      <section className="cs-section cs-section-alt">
        <div className="cs-container">
          <CaseProcess
            steps={[
              {
                title: 'Audit & Strategy',
                description: 'We analyzed Make-A-Wish Saudi Arabia’s mission, audience sensitivities, charitable positioning, and digital presence to create a communication direction rooted in empathy, trust, and cultural awareness.',
              },
              {
                title: 'Creation & Execution',
                description: 'We developed content and creative assets that translate the impact of wish-granting into simple, emotional, and inspiring stories. Our approach focused on helping audiences understand that support can be more than financial—it can be a moment of hope, a smile, and a memory that stays with a child and their family.',
              },
              {
                title: 'Ongoing Management',
                description: 'We continuously refined the brand’s communication based on audience response, campaign priorities, and community engagement. The goal was to keep the message human, respectful, and clear while growing awareness around the organization’s mission in Saudi Arabia.',
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
            items: ['Social Media Strategy', 'Content Creation & Calendar Management', 'Community Management', 'Influencer Marketing'],
          },
          {
            heading: 'Web & Tech',
            items: ['Website Development', 'Landing Page Creation'],
          },
        ]}
      />

      <CaseTestimonial
        quote="It is an honor to help draw a smile on a child’s face. With Wide Wings’ creative approach, we were able to communicate the power of a wish with warmth, clarity, and heart."
        attribution="— Make-A-Wish Saudi Arabia"
      />
    </>
  );
}
