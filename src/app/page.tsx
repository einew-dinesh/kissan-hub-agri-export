import Hero from '@/components/home/Hero';
import Features from '@/components/home/Features';
import FeaturedProducts from '@/components/home/FeaturedProducts';
import Testimonials from '@/components/home/Testimonials';
import ContactCTA from '@/components/home/ContactCTA';

export default function Home() {
  return (
    <>
      <Hero />
      <Features />
      <FeaturedProducts />
      <Testimonials />
      <ContactCTA />
    </>
  );
}
