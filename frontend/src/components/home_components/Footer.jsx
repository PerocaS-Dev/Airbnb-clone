import React from "react";
import LanguageIcon from '@mui/icons-material/Language';
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer_columns">
        <div className="footer_column">
          <h5>Support</h5>
          <span>Help Center</span>
          <span>Safety information</span>
          <span>Cancellation options</span>
          <span>Our COVID-19 Response</span>
          <span>Supporting people with disabilities</span>
          <span>Report a neighborhood concern</span>
        </div>

        <div className="footer_column">
          <h5>Community</h5>
          <span>Airbnb.org: disaster relief housing</span>
          <span>Support: Afghan refugees</span>
          <span>Celebrating diversity & belonging</span>
          <span>Combating discriminatino</span>
        </div>

        <div className="footer_column">
          <h5>Hosting</h5>
          <span>Try hosting</span>
          <span>AirCover: protection for Hosts</span>
          <span>Explore hosting resources</span>
          <span>Visit our community forum</span>
          <span>How to host responsibly</span>
        </div>

        <div className="footer_column">
          <h5>About</h5>
          <span>Newsroom</span>
          <span>Learn about new features</span>
          <span>Letter from our founders</span>
          <span>Careers</span>
          <span>Investors</span>
          <span>Airbnb Luxe</span>
        </div>
      </div>

      <div className="trademark_footer">
        <div className="trademark_info">
          <span>©</span>
          <span>2022 Airbnb, Inc.</span>
          <span> • </span>
          <span>Privacy</span>
          <span> • </span>
          <span>Terms</span>
          <span> • </span>
          <span>Sitemap</span>
        </div>

        <div className="footer_links">
          <span> 
            <LanguageIcon sx={{ fontSize: 15 }}/>
          </span>
          <span> English(US) </span>
          <span> $ USD </span>
          <span> <FacebookRoundedIcon sx={{ fontSize: 15 }}/> </span>
          <span></span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
