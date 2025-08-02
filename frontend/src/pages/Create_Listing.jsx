import { useRef, useState, useEffect } from "react";
import { useAuthContext } from "../context/AuthContext";
import { useListingContext } from "../context/ListingContext";
import { useParams, useNavigate } from "react-router-dom";
import {
  DEFAULT_ADDITIONAL_IMAGES,
  DEFAULT_HOST_AVATAR,
} from "../utils/defaultAssets";
import Admin_Buttons from "../components/shared_components/Admin_Buttons";
import "./Create_Listing.css";

const Create_Listing = () => {
  const [title, setTitle] = useState("");
  const [city, setCity] = useState("");
  const [description, setDescription] = useState("");
  const [pricePerNight, setPricePerNight] = useState(0);
  const [apartmentType, setApartmentType] = useState("");
  const [guests, setGuests] = useState(0);
  const [bedroomCount, setBedroomCount] = useState(0);
  const [bathroomCount, setBathroomCount] = useState(0);
  const [amenityInput, setAmenityInput] = useState("");
  const [amenities, setAmenities] = useState([]);
  const [previewImage, setPreviewImage] = useState(null);
  const navigate = useNavigate();
  const { id: listingId } = useParams();
  const isEditMode = !!listingId;

  const fileInputRef = useRef(null);
  const { user } = useAuthContext();
  const { dispatch } = useListingContext();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!user || !user.token) {
      alert("Please make sure you are logged in before creating a listing.");
      return;
    }

    const newListing = {
      title,
      city,
      apartmentType,
      guests,
      bedroomCount,
      bathroomCount,
      pricePerNight,
      description,
      amenities,
      mainImage: previewImage,
      additionalImages: DEFAULT_ADDITIONAL_IMAGES,
      host: {
        name: user.name || user.email || "Anonymous Host",
        avatar: user.avatar || DEFAULT_HOST_AVATAR,
        userId: user._id,
      },
    };

    console.log("Submitting listing:", newListing); 

    if (listingId) {
      // UPDATE
      await fetch(`${process.env.API_BASE_URL}/api/listings/${listingId}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${user.token}`,
        },
        body: JSON.stringify(newListing),
      });
    } else {
      // CREATE
      try {
        const res = await fetch(`${process.env.API_BASE_URL}/api/listings`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(newListing),
        });

        const data = await res.json();
        console.log("Server response:", data); 

        if (res.ok) {
          dispatch({ type: "Create_LISTING", payload: data });
          alert("Listing created!");
          navigate(`/create-listing/${data._id}`);
        } else {
          alert(`Error: ${data.error || "Unknown error"}`);
          console.error("Create failed:", data);
        }
      } catch (err) {
        console.error("Error submitting listing:", err);
        alert("Network or server error.");
      }
    }
  };

  const addAmenityHandler = () => {
    const trimmed = amenityInput.trim();
    if (trimmed !== "") {
      setAmenities((prev) => [...prev, trimmed]);
      setAmenityInput("");
    }
  };

  const handleButtonClick = () => {
    fileInputRef.current.click();
  };

  const uploadImageHandler = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageURL = URL.createObjectURL(file);
      setPreviewImage(imageURL);
    }
  };

  useEffect(() => {
    const fetchListing = async () => {
      if (!listingId) return;

      try {
        const res = await fetch(`${process.env.API_BASE_URL}/api/listings/${listingId}`);
        const data = await res.json();

        if (res.ok) {
          setTitle(data.title);
          setCity(data.city);
          setDescription(data.description);
          setPricePerNight(data.pricePerNight);
          setApartmentType(data.apartmentType);
          setGuests(data.guests);
          setBedroomCount(data.bedroomCount);
          setBathroomCount(data.bathroomCount);
          setAmenities(data.amenities || []);
          setPreviewImage(data.mainImage);
        } else {
          console.error("Error loading listing:", data.error);
        }
      } catch (err) {
        console.error("Failed to fetch listing:", err);
      }
    };

    fetchListing();
  }, [listingId]);

  return (
    <div className="create_listing">
      <Admin_Buttons />
      <div className="new_listing_form_container">
        <div className="form_title">
          <p>Create Listing</p>
        </div>

        <div className="form_grid">
          <div className="grid_section">
            <div className="info_for_listing">
              <p>Listing Title</p>
              <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />

              <div className="info_for_listing">
                <p>Location</p>
                <select value={city} onChange={(e) => setCity(e.target.value)}>
                  <option value="">Select a location</option>
                  <option value="Cape Town">Cape Town</option>
                  <option value="Paris">Paris</option>
                  <option value="London">London</option>
                  <option value="New York">New York</option>
                  <option value="Tokyo">Tokyo</option>
                  <option value="Thailand">Thailand</option>
                  <option value="Johannesburg">Johannesburg</option>
                  <option value="Durban">Durban</option>
                  <option value="Mexico">Mexico</option>
                  <option value="Dallas">Dallas</option>
                  <option value="San Antonio">San Antonio</option>
                  <option value="San Diego">San Diego</option>
                </select>
              </div>
            </div>

            <div className="info_for_listing listing_description">
              <p>Description</p>
              <textarea
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </div>
          </div>

          <div className="grid_section">
            <div className="two_split">
              <div className="info_for_listing price_type">
                <p>Price</p>
                <input
                  type="number"
                  placeholder="0"
                  value={pricePerNight}
                  onChange={(e) => setPricePerNight(Number(e.target.value))}
                />
              </div>
              <div className="info_for_listing price_type">
                <p>Type</p>
                <select
                  value={apartmentType}
                  onChange={(e) => setApartmentType(e.target.value)}
                >
                  <option value="">Select type</option>
                  <option value="entire unit">Entire Unit</option>
                  <option value="Room">Room</option>
                  <option value="loft">Loft</option>
                  <option value="villa">Whole Villa</option>
                  <option value="cottage">Cottage</option>
                </select>
              </div>
            </div>

            <div className="three_split">
              <div className="info_for_listing listing_rooms">
                <p>Guests</p>
                <input
                  type="number"
                  value={guests}
                  onChange={(e) => setGuests(Number(e.target.value))}
                />
              </div>
              <div className="info_for_listing listing_rooms">
                <p>Bedrooms</p>
                <input
                  type="number"
                  value={bedroomCount}
                  onChange={(e) => setBedroomCount(Number(e.target.value))}
                />
              </div>
              <div className="info_for_listing listing_rooms">
                <p>Bathrooms</p>
                <input
                  type="number"
                  value={bathroomCount}
                  onChange={(e) => setBathroomCount(Number(e.target.value))}
                />
              </div>
            </div>

            <div className="info_for_listing">
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
          <div className="info_for_listing images_input">
            <div className="adding_images">
              <p>Images</p>
              <input
                type="file"
                accept="image/*"
                onChange={uploadImageHandler}
                ref={fileInputRef}
                style={{ display: "none" }}
              />
              <div
                className="add_button image_button"
                onClick={handleButtonClick}
              >
                <p>Upload Image</p>
              </div>
            </div>

            <div className={`preview-box ${previewImage ? "centered" : ""}`}>
              {previewImage ? (
                <img
                  src={previewImage}
                  alt="Uploaded preview"
                  className="preview-image"
                />
              ) : (
                <p style={{ color: "gray" }}>No image uploaded</p>
              )}
            </div>
          </div>
        </div>

        <div className="add_or_cancel">
          <div
            className="add_button add_or_cancel_button"
            onClick={handleSubmit}
          >
            <p>Create</p>
          </div>
          <div
            className="add_button add_or_cancel_button cancel_button"
            onClick={() => navigate("/admin")}
          >
            <p>Cancel</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Create_Listing;
