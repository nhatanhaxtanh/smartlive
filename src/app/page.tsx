import { LandingAccordionItem } from '@/components/ui/interactive-image-accordion';
import { ScrollTablet } from '@/components/ui/scroll-animation';

export default function HomePage() {
    return (
        <>
            <section className="w-full">
                <LandingAccordionItem />
                <ScrollTablet />
            </section>
        </>
    );
}
