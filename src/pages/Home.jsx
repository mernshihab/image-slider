import React from "react";
import ImageSlider from "../components/ImageSlider";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="">
      <header>
        <nav>
          <Link className="active" to="/">Home</Link>
          <Link to="/contact">Contact</Link>
        </nav>
      </header>
      <ImageSlider />
    </div>
  );
};

export default Home;
