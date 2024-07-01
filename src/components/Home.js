// Home.js
import React from "react";
import ServicePage from "./ServicePage";
import AboutUsPage from "./About";
import Footer from "./Footer";
import { Carousel1 } from "./Carousel1";

const Home = () => {
  return (
    <div className="container">
      <Carousel1 />
      <ServicePage />
      <AboutUsPage />
      <Footer />
    </div>
  );
};

export default Home;
