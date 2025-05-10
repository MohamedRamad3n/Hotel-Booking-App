import Hero from '../components/Hero'
import FeaturedDestination from '../components/FeaturedDestination'
import ExclusiveOffers from '../components/ExclusiveOffers';
import TestimonialSection from '../components/TestimonialSection';
import Newsletter from '../components/Newsletter';
const Home = () => {
  return (
    <div>
      <Hero />
      <FeaturedDestination />
      <ExclusiveOffers />
      <TestimonialSection />
      <Newsletter />
    </div>
  );
}

export default Home