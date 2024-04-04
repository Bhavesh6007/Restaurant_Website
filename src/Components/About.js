import React from "react";
import AboutBackground from "../Assets/about-background.png";
import AboutBackgroundImage from "../Assets/about-background-image.png"
import { BsFillPlayCircleFill } from "react-icons/bs";

const About = () => {
  return (
  <div className="about-section-container">
    <div className="about-background-image-container">
      <img src={AboutBackground} alt=""></img>
    </div>
    <div className="about-section-image-container">
      <img src={AboutBackgroundImage} alt="Background Image"></img>
    </div>
    <div className="about-section-text-container">
      <p className="primary-subheading">About</p>
      <h1 className="primary-heading">
        Food is An Important part of a Balanced Life.
      </h1>
      <p className="primary-text">
      Beyond fulfilling our basic nutritional needs, food plays a significant role in our overall well-being, influencing our physical health, mental state, and social connections.
      </p>
      <p className="primary-text">
      Culturally and socially, food plays a central role in celebrations, traditions, and rituals across diverse communities worldwide.
      </p>
      <div className="about-buttons-container">
        <button className="secondary-button">Learn More</button>
        <button className="watch-video-button"><BsFillPlayCircleFill/>Watch Video</button>
      </div>
    </div>
  </div>
  );
};
export default About;