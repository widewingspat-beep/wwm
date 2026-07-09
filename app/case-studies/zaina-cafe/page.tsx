import type { Metadata } from 'next';
import '../case-study.css';
import CaseHero from '../CaseHero';
import CaseGallery, { type GalleryImage } from '../CaseGallery';
import { CaseIntro, CaseSplit, CaseChallenges, CaseProcess, CaseServices, CaseResults, CaseStats, CaseWebsitePreview } from '../CaseContent';
import CaseDonut from '../CaseDonut';

export const metadata: Metadata = {
  title: 'Zaina Cafe: Cafe Chain Launch Case Study',
  description: 'How Wide Wings Media delivered a full brand rollout for Zaina Cafe, driving 3x engagement growth in 60 days.',
};

const galleryImages: GalleryImage[] = [
  { src: '/zaina/Post-1.jpg', alt: 'Zaina Cafe social media post 1' },
  { src: '/zaina/Post-1 (1).jpg', alt: 'Zaina Cafe social media post 1 variant' },
  { src: '/zaina/Post-1 (2).jpg', alt: 'Zaina Cafe social media post 1 variant 2' },
  { src: '/zaina/Post-2.jpg', alt: 'Zaina Cafe social media post 2' },
  { src: '/zaina/Post-2 (1).jpg', alt: 'Zaina Cafe social media post 2 variant' },
  { src: '/zaina/Post-2(5).jpg', alt: 'Zaina Cafe social media post 2 variant 5' },
  { src: '/zaina/Post-3.jpg', alt: 'Zaina Cafe social media post 3' },
  { src: '/zaina/Post-4.jpg', alt: 'Zaina Cafe social media post 4' },
  { src: '/zaina/Post-5.jpg', alt: 'Zaina Cafe social media post 5' },
  { src: '/zaina/Post-6.jpg', alt: 'Zaina Cafe social media post 6' },
  { src: '/zaina/Post-6 (1).jpg', alt: 'Zaina Cafe social media post 6 variant' },
  { src: '/zaina/Post-6(1).jpg', alt: 'Zaina Cafe social media post 6 variant 1' },
  { src: '/zaina/Post-6(2).jpg', alt: 'Zaina Cafe social media post 6 variant 2' },
  { src: '/zaina/Post-6(3).jpg', alt: 'Zaina Cafe social media post 6 variant 3' },
  { src: '/zaina/Post-6(4).jpg', alt: 'Zaina Cafe social media post 6 variant 4' },
  { src: '/zaina/Post-7.jpg', alt: 'Zaina Cafe social media post 7' },
  { src: '/zaina/Post-8.jpg', alt: 'Zaina Cafe social media post 8' },
  { src: '/zaina/Post-9.jpg', alt: 'Zaina Cafe social media post 9' },
  { src: '/zaina/Post-11.jpg', alt: 'Zaina Cafe social media post 11' },
  { src: '/zaina/Post-12.jpg', alt: 'Zaina Cafe social media post 12' },
  { src: '/zaina/Post-12(1).jpg', alt: 'Zaina Cafe social media post 12 variant' },
  { src: '/zaina/Post-13.jpg', alt: 'Zaina Cafe social media post 13' },
  { src: '/zaina/Post-14.jpg', alt: 'Zaina Cafe social media post 14' },
  { src: '/zaina/Jeddah-Delivery Post.jpg', alt: 'Zaina Cafe Jeddah delivery post' },
  { src: '/zaina/Jeddah-offer post-2.jpg', alt: 'Zaina Cafe Jeddah offer post' },
  { src: '/zaina/Drink of month(june).jpg', alt: 'Zaina Cafe drink of the month, June' },
];

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

      <CaseIntro
        title="About Zaina Cafe"
        meta={[
          { label: 'Category', value: 'Food & Beverage' },
          { label: 'Location', value: 'UAE — Dubai, Ajman, Sharjah, and Umm Al Quwain' },
        ]}
        paragraphs={[
          'Zaina Cafe is where every cup tells a story, nestled conveniently within the heart of Dubai to provide an unparalleled experience filled with the rich aromas of the best coffee and the soothing flavors of our exquisite tea.',
          'Zaina Cafe has been our client since their opening, we worked together on everything from A to Z. Branding, social media management and website development were the main pillars, in addition to many others, we’ve worked on.',
        ]}
        visual={
          <CaseDonut
            title="Cumulative Ad Spend"
            segments={[
              { label: 'Instagram', value: 78.5, color: 'var(--magenta)' },
              { label: 'TikTok', value: 21.5, color: 'var(--gold)' },
            ]}
          />
        }
      />

      <section className="cs-section">
        <div className="cs-container">
          <CaseSplit
            image="/zaina/Post-1.jpg"
            images={[
              '/zaina/Post-1.jpg',
              '/zaina/Post-2.jpg',
              '/zaina/Post-6.jpg',
              '/zaina/Post-7.jpg',
              '/zaina/Post-8.jpg',
            ]}
            imageAlt="Zaina Cafe campaign creative"
          >
            <CaseChallenges
              intro="As a growing café chain entering and expanding across a competitive UAE F&B market, Zaina Café needed a strong launch presence, consistent brand communication, and content that could build familiarity across multiple locations."
              items={[
                'Establishing a recognizable digital presence from the grand opening stage.',
                'Creating consistent content that reflects the brand’s premium coffee experience, cultural identity, and welcoming atmosphere.',
                'Building awareness and engagement across multiple UAE locations while maintaining one cohesive brand voice.',
              ]}
            />
          </CaseSplit>
        </div>
      </section>

      <section className="cs-section cs-section-alt">
        <div className="cs-container">
          <CaseSplit
            image="/zaina/Post-2.jpg"
            collage={['/zaina/Post-2.jpg', '/zaina/Post-3.jpg']}
            imageAlt="Zaina Cafe creative campaign execution"
            reverse
          >
            <CaseProcess
              steps={[
                { title: 'Audit & Strategy', description: 'We analyzed the current digital standing, identified gaps, and built a custom roadmap tailored to their specific objectives.' },
                { title: 'Creation & Execution', description: 'Our specialists deployed the agreed-upon services—producing the necessary creatives, writing the copy, and launching the campaigns.' },
                { title: 'Optimize & Scale', description: 'Post-launch, we actively monitored performance, refined our assets, and adjusted targeting to ensure sustained quality and delivery.' },
              ]}
            />
          </CaseSplit>
        </div>
      </section>

      <CaseServices
        items={[
          'Branding & Creative',
          'Visual Guidelines & Typography',
          'Graphic Design & Art Direction',
          'Video Production & Animation',
          'UI/UX Design',
          'Social Media Management',
          'Social media solutions',
          'Performance Marketing & Ads',
          'Media Buying & Planning',
          'SEO & Content',
          'Website Development (WordPress, Shopify, Custom)',
        ]}
      />

      <CaseWebsitePreview
        url="https://zaina-cafe.com/"
        lead="Hover to scroll through the full site we designed and built for Zaina Cafe."
        image="/zaina/zaina-cafe-website-preview.webp"
        imageAlt="Zaina Cafe website homepage"
        imageWidth={1000}
        imageHeight={7084}
      />

      <CaseGallery title="Campaign Gallery" images={galleryImages} />

      <CaseResults
        groups={[
          {
            heading: 'Strategy and Branding',
            items: [
              'Improved advertising efficiency through continuous optimization.',
              'Helped brand growth by understanding both goals and objectives to deliver metrics on time.',
              'Successfully launched a refreshed brand identity.',
              'Built a consistent visual presence across all digital platforms.',
              'Increased brand awareness among the target audience by coming up with a brand strategy that both speaks to the right audience and meets brand goals.',
              'Strengthened brand positioning within a competitive market; UAE is very thriving in the hospitality and F&B market.',
            ],
          },
          {
            heading: 'Digital Experience',
            items: [
              'Delivered the Zaina website that’s published at the moment.',
              'Improved website speed and technical performance.',
              'Enhanced user journey and navigation and landing page conversion rate.',
            ],
          },
          {
            heading: 'Business Outcomes',
            items: [
              'Supported the successful launch of a new product or service.',
              'Expanded into new markets, Zaina Cafe has three branches now that we’re very proud to be part of this growth.',
              'Increased appointment bookings and generated higher-quality sales opportunities.',
            ],
          },
          {
            heading: 'Operational Improvements',
            items: [
              'Implemented advanced analytics and conversion tracking.',
              'Automated reporting and marketing workflows.',
              'Improved campaign decision-making through real-time insights.',
            ],
          },
        ]}
      />

      <CaseStats
        note="Cumulative performance across Instagram (March–June) and TikTok (May–June)."
        platformA="Instagram"
        platformB="TikTok"
        metrics={[
          { label: 'Reach', a: 1304832, b: 341312 },
          { label: 'Impressions', a: 2871289, b: 548637 },
          { label: 'Profile Visits', a: 48423, b: 676 },
          { label: 'New Followers', a: 1521, b: 1632 },
          { label: 'Ad Spend Share', a: 78.5, b: 21.5, format: (n) => `${n}%` },
        ]}
      />
    </>
  );
}
