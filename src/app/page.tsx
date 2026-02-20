import { FeaturesSectionWithHoverEffects } from '@/components/ui/feature-section-with-hover-effects';
import { LandingAccordionItem } from '@/components/ui/interactive-image-accordion';
import { ScrollTablet } from '@/components/ui/scroll-animation';
import SectionWithMockup from '@/components/ui/section-with-mockup';

export default function HomePage() {
    return (
        <>
            <section className="w-full">
                <LandingAccordionItem />
                <div className="relative z-20 -mt-8 md:-mt-12">
                    <ScrollTablet />
                </div>
                <div className="relative z-10 -mt-14 md:mt-0">
                    <FeaturesSectionWithHoverEffects />
                </div>
                <div className="relative z-10 -mt-14 md:mt-0">
                    <SectionWithMockup />
                </div>
            </section>
        </>
    );
}
