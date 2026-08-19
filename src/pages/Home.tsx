import Hero from '@/components/sections/Hero';
import Stats from '@/components/sections/Stats';
import Features from '@/components/sections/Features';
import Showcase from '@/components/sections/Showcase';
import HowItWorks from '@/components/sections/HowItWorks';
import CTA from '@/components/sections/CTA';

export default function Home() {
  return (
    <>
      <Hero />
      <Stats />
      <Features />
      <Showcase />
      <HowItWorks />
      <CTA />
    </>
  );
}
