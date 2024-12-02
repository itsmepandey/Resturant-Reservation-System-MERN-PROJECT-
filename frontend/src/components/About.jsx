import React from "react";
import { Link } from "react-router-dom";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";

const About = () => {
  return (
    
      <section className="about" id="about">
        <div className="container">
          <div className="banner">
            <div className="top">
              <h1 className="heading">ABOUT US</h1>
              <p>The only thing we're serious about is food.</p>
            </div>
            <p className="mid">
            Our Restaurant Reservation System is a modern, responsive MERN stack website designed to enhance your dining experience. Easily book a table at your favorite restaurant and explore the talented team members behind the scenes. The platform offers a seamless reservation process, ensuring that your table is ready when you arrive. The user-friendly design adapts to any device, making it accessible for everyone. Discover our culinary team's expertise and make your next dining experience truly special.
            </p>
            <Link to={"/"}>
              Explore Menu{" "}
              <span>
                <HiOutlineArrowNarrowRight />
              </span>
            </Link>
          </div>
          <div className="banner">
            <img src="/about.png" alt="about" />
          </div>
        </div>
      </section>
    
  );
};

export default About;