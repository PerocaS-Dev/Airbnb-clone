import React from "react";
import { useRef, useState } from "react";
import "./Create_Listing.css";

const Create_Listing = () => {
  const [amenityInput, setAmenityInput] = useState("");
  const [amenities, setAmenities] = useState([]);
  const [previewImage, setPreviewImage] = useState(null);
  const fileInputRef = useRef(null);

  const addAmenityHandler = () => {
    const trimmed = amenityInput.trim();
    if (trimmed !== "") {
      setAmenities((prev) => [...prev, trimmed]);
      setAmenityInput("");
    }
  };

  const handleButtonClick = () => {
    fileInputRef.current.click(); //this opens file explorer
  };

  const uploadImageHandler = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageURL = URL.createObjectURL(file);
      setPreviewImage(imageURL);
    }
  };

  return (
    <div className="create_listing">
      <div className="view_listings_button">
        <p>View my listings</p>
      </div>
      <div className="new_listing_form_container">
        <div className="form_title">
          <p>Create Listing</p>
        </div>

        <div className="form_grid">
          <div className="grid_section">
            <div className="listing_info">
              <p>Listing Ttle</p>
              <input type="text" />
              <div className="listing_info">
                <p>Location</p>
                <select name="locations" id="locations">
                  <option value="Select a location" id="default-value">
                    Select a location
                  </option>
                  <option value="Cape Town"> Cape Town</option>
                  <option value="Paris"> Paris</option>
                  <option value="London"> London</option>
                  <option value="New York"> New York</option>
                  <option value="Tokyo"> Tokyo</option>
                  <option value="Thailand">Thailand</option>
                  <option value="Johannesburg">Johannesburg</option>
                  <option value="Durban"> Durban</option>
                  <option value="Mexico">Mexico</option>
                  <option value="Dallas">Dallas</option>
                  <option value="San Antonio"> San Antonio</option>
                  <option value="San Diego">San Diego</option>
                </select>
              </div>
            </div>

            <div className="listing_info listing_description">
              <p>Description</p>
              <textarea name="description" id="description"></textarea>
            </div>

            <div className="checkboxes">
              <div>
                <input type="checkbox" name="Advanced Cleaning" id="option1" />
                <label htmlFor="option1">Advanced Cleaning</label>
              </div>
              <div>
                <input type="checkbox" name="Self check-in" id="option2" />
                <label htmlFor="option2">Self Check-In</label>
              </div>
            </div>
          </div>

          <div className="grid_section">
            <div className="two_split">
              <div className="listing_info price_type">
                <p>Price</p>
                <input type="number" placeholder="0" />
              </div>
              <div className="listing_info price_type">
                <p>Type</p>
                <select name="listing_type" id="listing_type">
                  <option value="Select a location" id="default-value">
                    Select a location
                  </option>
                  <option value="entire unit">Entire Unit</option>
                  <option value="Room">Room</option>
                  <option value="loft">loft</option>
                  <option value="villa">Whole Villa</option>
                  <option value="cottage">Cottage</option>
                </select>
              </div>
            </div>

            <div className="three_split">
              <div className="listing_info listing_rooms">
                <p>Guests</p>
                <input type="number" placeholder="0" />
              </div>
              <div className="listing_info listing_rooms">
                <p>Bedrooms</p>
                <input type="number" placeholder="0" />
              </div>
              <div className="listing_info listing_rooms">
                <p>Bathrooms</p>
                <input type="number" placeholder="0" />
              </div>
            </div>

            <div className="listing_info">
              <p>Amenities</p>
              <div className="adding_amenities">
                <input
                  className="listing_name"
                  type="text"
                  value={amenityInput}
                  onChange={(e) => setAmenityInput(e.target.value)}
                />
                <div className="add_button" onClick={addAmenityHandler}>
                  <p>Add</p>
                </div>
              </div>

              <ul className="amenities_list">
                {amenities.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="uploading_image">
          <div className="listing_info images_input">
            <div className="adding_images">
              <p>Images</p>

              {/* Hidden input triggered by the visible button */}
              <input
                type="file"
                accept="image/*"
                onChange={uploadImageHandler}
                ref={fileInputRef}
                style={{ display: "none" }}
              />

              {/* Styled trigger button */}
              <div
                className="add_button image_button"
                onClick={handleButtonClick}
              >
                <p>Upload Images</p>
              </div>
            </div>

            {/* Image preview box */}

            <div className={`preview-box ${previewImage ? "centered" : ""}`}>
              {previewImage ? (
                <img
                  src={previewImage}
                  alt="Uploaded preview"
                  className="preview-image"
                />
              ) : (
                <p style={{ color: "gray"}}>No images uploaded</p>
              )}
            </div>
          </div>
        </div>

        <div className="add_or_cancel">
          <div className="add_button add_or_cancel_button">
            <p>Create</p>
          </div>

          <div className="add_button add_or_cancel_button cancel_button">
            <p>Cancel</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Create_Listing;
