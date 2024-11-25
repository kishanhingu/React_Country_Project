import { FaArrowRightLong } from "react-icons/fa6";
import { NavLink } from "react-router-dom";

export const HeroSection = () => {
  return (
    <main className="hero-section main">
      <div className="container">
        <div className="grid grid-two-column">
          <div className="hero-content">
            <h1 className="heading-xl">
              Explore the world, One Country at a Time.
            </h1>
            <p className="hero-para">
              Discover the history, culture, and beauty of every nation. Sort,
              search, and filter through countries to find the details you need.
            </p>
            <NavLink to="/country">
              <button className="btn btn-darken btn-inline bg-white-box">
                Start Exploring <FaArrowRightLong />
              </button>
            </NavLink>
          </div>
          <div className="hero-image">
            <img
              src="../../../public/images/world.webp"
              alt="World image"
              className="banner-image"
            />
          </div>
        </div>
      </div>
    </main>
  );
};
