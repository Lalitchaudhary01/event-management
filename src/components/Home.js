// Home.js
import React from "react";
import Slideshow from "./Slideshow";
import ServicePage from "./ServicePage";
import AboutUsPage from "./About";
import Footer from "./Footer";
import Concert from "../images/concert.jpg";
import CreateMemories from "../images/create-memoreis.jpg";
import VenueSelection from "../images/venue-slection.jpg";
import WeddingDesign from "../images/wedding-design.jpg";
import WeddingPlanning from "../images/wedding-Planning.jpg";

const images = [
  Concert,
  CreateMemories,
  VenueSelection,
  WeddingDesign,
  WeddingPlanning,
];

const Home = () => {
  return (
    <div className="container">
      <Slideshow images={images} />
      <ServicePage />
      <AboutUsPage />
      <Footer />
    </div>
  );
};

export default Home;
