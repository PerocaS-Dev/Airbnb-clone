import React from "react";
import StarOutlineIcon from "@mui/icons-material/StarOutline";
import SecurityOutlinedIcon from '@mui/icons-material/SecurityOutlined';
import VerifiedUserOutlinedIcon from "@mui/icons-material/VerifiedUserOutlined";
import WorkspacePremiumIcon from "@mui/icons-material/WorkspacePremium";
import { DEFAULT_HOST_AVATAR } from "../../utils/defaultAssets";
import "./Hosted_By.css";

const Hosted_By = ({listing}) => {
  return (
    <div className="host-info">
      <div className="host-header">
        <img
          src={listing.host?.avatar || DEFAULT_HOST_AVATAR}
          alt="host"
          className="host-avatar"
        />
        <div>
          <h3 className="host-name">Hosted by {listing.host?.name}</h3>
          <p className="host-join-date">Joined May 2021</p>
        </div>
      </div>

      <div className="host-badges">
        <span>
          <StarOutlineIcon className="add_color" sx={{ fontSize: 15 }} /> 12
          Reviews
        </span>
        <span>
          <VerifiedUserOutlinedIcon
            className="add_color"
            sx={{ fontSize: 15 }}
          />{" "}
          Identity verified
        </span>
        <span>
          <WorkspacePremiumIcon className="add_color" sx={{ fontSize: 15 }} />{" "}
          Superhost
        </span>
      </div>

      <div className="host-description">
        <p>
          <strong>{listing.host?.name} is a Superhost</strong>
        </p>
        <p>
          Superhosts are experienced, highly rated hosts who are committed to
          providing great stays for guests.
        </p>
        <p>Response rate: 100%</p>
        <p>Response time: within an hour</p>
      </div>

      <button className="contact-button">Contact Host</button>

      <div className="airbnb-warning">
        <SecurityOutlinedIcon />
        <p>
          To protect your payment, never transfer money or communicate outside
          of the Airbnb website or app.
        </p>
      </div>
    </div>
  );
};

export default Hosted_By;
