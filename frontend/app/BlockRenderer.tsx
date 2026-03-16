import type { Block } from '@/lib/blocks';
import { HeroBlock } from '@/components/blocks/HeroBlock';
import { ServicesBlock } from '@/components/blocks/ServicesBlock';
import { TestimonialsBlock } from '@/components/blocks/TestimonialsBlock';
import { WhyUsBlock } from '@/components/blocks/WhyUsBlock';
import { HowItWorksBlock } from '@/components/blocks/HowItWorksBlock';
import { TrustBarBlock } from '@/components/blocks/TrustBarBlock';
import { LeadCaptureBlock } from '@/components/blocks/LeadCaptureBlock';
import { FAQBlock } from '@/components/blocks/FAQBlock';
import { EmergencyBannerBlock } from '@/components/blocks/EmergencyBannerBlock';
import { ServiceAreaMapBlock } from '@/components/blocks/ServiceAreaMapBlock';
import { PageHeroBlock } from '@/components/blocks/PageHeroBlock';
import { AboutStoryBlock } from '@/components/blocks/AboutStoryBlock';
import { ValuesGridBlock } from '@/components/blocks/ValuesGridBlock';
import { TimelineBlock } from '@/components/blocks/TimelineBlock';
import { TeamGridBlock } from '@/components/blocks/TeamGridBlock';
import { PromiseCTABlock } from '@/components/blocks/PromiseCTABlock';
import { ServicesDetailBlock } from '@/components/blocks/ServicesDetailBlock';
import { CTABannerBlock } from '@/components/blocks/CTABannerBlock';
import { ServiceAreasGridBlock } from '@/components/blocks/ServiceAreasGridBlock';
import { CoverageMapBlock } from '@/components/blocks/CoverageMapBlock';
import { ContactInfoBarBlock } from '@/components/blocks/ContactInfoBarBlock';
import { ContactFormBlock } from '@/components/blocks/ContactFormBlock';
import type { ComponentType } from 'react';

type BlockProps = {
  attrs: Record<string, unknown>;
  innerBlocks: Block[];
};

const BLOCK_MAP: Record<string, ComponentType<BlockProps>> = {
  'septic-masters/hero': HeroBlock as ComponentType<BlockProps>,
  'septic-masters/services': ServicesBlock as ComponentType<BlockProps>,
  'septic-masters/testimonials': TestimonialsBlock as ComponentType<BlockProps>,
  'septic-masters/why-us': WhyUsBlock as ComponentType<BlockProps>,
  'septic-masters/how-it-works': HowItWorksBlock as ComponentType<BlockProps>,
  'septic-masters/trust-bar': TrustBarBlock as ComponentType<BlockProps>,
  'septic-masters/lead-capture': LeadCaptureBlock as ComponentType<BlockProps>,
  'septic-masters/faq': FAQBlock as ComponentType<BlockProps>,
  'septic-masters/emergency-banner': EmergencyBannerBlock as ComponentType<BlockProps>,
  'septic-masters/service-area-map': ServiceAreaMapBlock as ComponentType<BlockProps>,
  'septic-masters/page-hero': PageHeroBlock as ComponentType<BlockProps>,
  'septic-masters/about-story': AboutStoryBlock as ComponentType<BlockProps>,
  'septic-masters/values-grid': ValuesGridBlock as ComponentType<BlockProps>,
  'septic-masters/timeline': TimelineBlock as ComponentType<BlockProps>,
  'septic-masters/team-grid': TeamGridBlock as ComponentType<BlockProps>,
  'septic-masters/promise-cta': PromiseCTABlock as ComponentType<BlockProps>,
  'septic-masters/services-detail': ServicesDetailBlock as ComponentType<BlockProps>,
  'septic-masters/cta-banner': CTABannerBlock as ComponentType<BlockProps>,
  'septic-masters/service-areas-grid': ServiceAreasGridBlock as ComponentType<BlockProps>,
  'septic-masters/coverage-map': CoverageMapBlock as ComponentType<BlockProps>,
  'septic-masters/contact-info-bar': ContactInfoBarBlock as ComponentType<BlockProps>,
  'septic-masters/contact-form': ContactFormBlock as ComponentType<BlockProps>,
};

export function BlockRenderer({ blocks }: { blocks: Block[] }) {
  return (
    <>
      {blocks.map((block, index) => {
        const Component = BLOCK_MAP[block.blockName];
        if (!Component) return null;
        return (
          <Component
            key={`${block.blockName}-${index}`}
            attrs={block.attrs}
            innerBlocks={block.innerBlocks}
          />
        );
      })}
    </>
  );
}
