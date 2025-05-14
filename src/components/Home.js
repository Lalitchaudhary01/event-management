import React from "react";
import HeroSlider from "../components/HeroSlider";
import TaglineSection from "../components/TaglineSection";
import FeaturedServices from "../components/FeaturedServices";
import Testimonials from "../components/Testimonials";
import CallToAction from "../components/CallToAction";

const Home = () => {
  return (
    <div className="pt-24 bg-gradient-to-br from-purple-50 to-pink-50">
      {/* Hero Slider Component */}
      <HeroSlider />

      {/* Tagline Section Component */}
      <TaglineSection />

      {/* Featured Services Component */}
      <FeaturedServices />

      {/* Testimonials Component */}
      <Testimonials />

      {/* Call to Action Component */}
      <CallToAction />
    </div>
  );
};

export default Home;
