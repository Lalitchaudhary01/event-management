import React from "react";
import Slideshow from "./Slideshow";

const images = [
  "/images/concert.jpg",
  "/images/create-memories.jpg",
  "/images/venue-selection.jpg",
  "/images/wedding-design.jpg",
  "/images/wedding-planning.jpg",
];

const Home = () => {
  return (
    <div className="home">
      <h1>Welcome to the Event Management Website</h1>
      <Slideshow images={images} />
    </div>
  );
};

export default Home;
