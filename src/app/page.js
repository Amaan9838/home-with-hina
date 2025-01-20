import Hero from '@/components/Hero';
import FeaturedProperties from '@/components/FeaturedProperties';
import VirtualStaging from '@/components/VirtualStaging';
import Testimonials from '@/components/Testimonials';
import CallToAction from '@/components/CallToAction';
import FeatureShowcase from "@/components/FeatureShowcase";
import Neighbourhood from '@/components/Neighbourhood';

export default function Home() {
  return (
    <div className="bg-cream">
      
      {/* Initial Impact Section */}
      <FeatureShowcase/>
      
      {/* <VirtualStaging /> */}
      <Neighbourhood/>
    
      {/* Trust Building Section */}
      <Testimonials />
      
      {/* Final Conversion Section */}
      <CallToAction />
    </div>
  );
}