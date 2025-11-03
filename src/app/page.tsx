import { LayoutProvider } from '@/components/Layout';
import { HeroSection } from '@/components/sections/HeroSection';
import { ServicesSection } from '@/components/sections/ServicesSection';
import { BookingSection } from '@/components/sections/BookingSection';
import { TrustSection } from '@/components/sections/TrustSection';
import { FooterSection } from '@/components/sections/FooterSection';
import { FloatingWhatsApp } from '@/components/FloatingWhatsApp';

export default function Home() {
  return (
    <LayoutProvider>
      <main className="min-h-screen">
        <HeroSection />
        <ServicesSection />
        <BookingSection />
        <TrustSection />
        <FooterSection />
        <FloatingWhatsApp />
      </main>
    </LayoutProvider>
  );
}
