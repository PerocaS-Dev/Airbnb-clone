import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import './Admin_Buttons.css'

const Admin_Buttons = () => {

  return (
    <div className="admin_buttons">
      <Link to='/admin'>
      <button>View Listings</button>
      </Link>
      <Link to='/reserved'>
      <button>View Reservations</button>
      </Link>
      <Link to='/create-listing'>
      {/* setLastCreatedId(data._id); */}
      <button>Create Listings</button> 
      </Link>
    </div>
  );
};

export default Admin_Buttons;
