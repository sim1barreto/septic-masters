import { Hero } from "../components/home/Hero";
import { TrustBar } from "../components/home/TrustBar";
import { ServicesSection } from "../components/home/Services";
import { HowItWorks } from "../components/home/HowItWorks";
import { WhyUs } from "../components/home/WhyUs";
import { Testimonials } from "../components/home/Testimonials";
import { EmergencyBanner } from "../components/home/EmergencyBanner";
import { FAQ } from "../components/home/FAQ";
import { LeadCapture } from "../components/home/LeadCapture";
import { ServiceAreaMap } from "../components/home/ServiceAreaMap";

export default function Home() {
  return (
    <>
      <Hero />
      <TrustBar />
      <ServicesSection />
      <HowItWorks />
      <WhyUs />
      <Testimonials />
      <ServiceAreaMap />
      <EmergencyBanner />
      <FAQ />
      <LeadCapture />
    </>
  );
}
