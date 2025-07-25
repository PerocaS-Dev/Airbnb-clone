import React from "react";
import Search_Menu from "../components/home_components/Search_Menu";
import Content from "../components/home_components/Content";
import Discover from "../components/home_components/Discover";
import Footer from "../components/shared_components/Footer";
import "./Home.css";


const Home = () => {
  return (
    <>
      <div className="home">
        <div className="landing_screen">
          <div className="search_menu_container">
            <Search_Menu />
          </div>
          <div className="landing_background">
            <img className="background_image" src='https://images.pexels.com/photos/13620069/pexels-photo-13620069.jpeg'alt="" />
            <div className="image_writing">
              <h2 className="image_title">Not sure where to go? Perfect.</h2>
              <div className="flexible_button">
                <p>I'm flexible</p>
              </div>
            </div>
          </div>
        </div>
          <Content/>
          <Discover/>
          <div className="footer_container">
            <Footer/>
          </div>
      </div>
    </>
  );
};

export default Home;
