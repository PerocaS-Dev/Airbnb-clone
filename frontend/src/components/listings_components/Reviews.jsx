import React from "react";
import StarIcon from '@mui/icons-material/Star';
import "./Reviews.css";

const ratings = [
  { label: "Cleanliness", value: 5.0 },
  { label: "Communication", value: 5.0 },
  { label: "Check-in", value: 5.0 },
  { label: "Accuracy", value: 5.0 },
  { label: "Location", value: 4.9 },
  { label: "Value", value: 4.7 },
];

const Reviews = () => {
  return (
    <div className="reviews">
      <span className="review_title">
        <StarIcon className="add_color" sx={{ fontSize: 15 }} /> 5.0 • 7
        reviews
      </span>

      <div className="rating_section">
        <div className="rating_column">
          {ratings.slice(0, 3).map((item, idx) => (
            <RatingItem key={idx} label={item.label} value={item.value} />
          ))}
        </div>
        <div className="rating_column">
          {ratings.slice(3).map((item, idx) => (
            <RatingItem key={idx} label={item.label} value={item.value} />
          ))}
        </div>
      </div>

      <div className="all_reviews">
        <div className="person_review">
          <div className="reviewer_profile">
            <img
              src="https://www.shutterstock.com/image-photo/head-shot-portrait-close-smiling-600nw-1714666150.jpg"
              alt=""
            />
            <div className="profile_info">
              <p className="reviewer_name">Jose</p>
              <p className="review_date">December 2021</p>
            </div>
          </div>
          <div className="reviewer_review">
            <p>Host was very attentive.</p>
          </div>
        </div>

        <div className="person_review">
          <div className="reviewer_profile">
            <img
              src="https://www.shutterstock.com/image-photo/head-shot-portrait-close-smiling-600nw-1714666150.jpg"
              alt=""
            />
            <div className="profile_info">
              <p className="reviewer_name">Luke</p>
              <p className="review_date">December 2021</p>
            </div>
          </div>
          <div className="reviewer_review">
            <p>Nice place to stay!</p>
          </div>
        </div>
        <div className="person_review">
          <div className="reviewer_profile">
            <img
              src="https://www.shutterstock.com/image-photo/head-shot-portrait-close-smiling-600nw-1714666150.jpg"
              alt=""
            />
            <div className="profile_info">
              <p className="reviewer_name">Shanya</p>
              <p className="review_date">December 2021</p>
            </div>
          </div>
          <div className="reviewer_review">
            <p>
              Wonderful neighborhood, easy access to restaurants and the subway,
              cozy studio apartment with a super comfortable bed. Great host,
              super helpful and responsive. Cool murphy bed...
            </p>
            <br />
            <p className="show_more">
              <strong>Show more</strong>
            </p>
          </div>
        </div>
        <div className="person_review">
          <div className="reviewer_profile">
            <img
              src="https://www.shutterstock.com/image-photo/head-shot-portrait-close-smiling-600nw-1714666150.jpg"
              alt=""
            />
            <div className="profile_info">
              <p className="reviewer_name">Josh</p>
              <p className="review_date">November 2021</p>
            </div>
          </div>
          <div className="reviewer_review">
            <p>
              Well designed and fun space, neighborhood has lots of energy and
              amenities.
            </p>
          </div>
        </div>
        <div className="person_review">
          <div className="reviewer_profile">
            <img
              src="https://www.shutterstock.com/image-photo/head-shot-portrait-close-smiling-600nw-1714666150.jpg"
              alt=""
            />
            <div className="profile_info">
              <p className="reviewer_name">Vladko</p>
              <p className="review_date">November 2020</p>
            </div>
          </div>
          <div className="reviewer_review">
            <p>
              This is an amazing place. It has everything one needs for a
              monthly business stay. Very clean and organized. Amazing
              hospitality and affordability.
            </p>
          </div>
        </div>
        <div className="person_review">
          <div className="reviewer_profile">
            <img
              src="https://www.shutterstock.com/image-photo/head-shot-portrait-close-smiling-600nw-1714666150.jpg"
              alt=""
            />
            <div className="profile_info">
              <p className="reviewer_name">Jennifer</p>
              <p className="review_date">January 2022</p>
            </div>
          </div>
          <div className="reviewer_review">
            <p>
              A centric place, near of a sub station and a supermarket with
              everything you need.
            </p>
            <p>...</p>
            <p className="show_more">
              <strong>Show more</strong>
            </p>
          </div>
        </div>

        <div className="more_reviews_button">
          <p>Show all  12 reviews</p>
        </div>
      </div>
    </div>
  );
};

const RatingItem = ({ label, value }) => {
  return (
    <div className="rating_item">
      <span className="rating_label">{label}</span>
      <div className="rating_bar_container">
        <div
          className="rating_bar_fill"
          style={{ width: `${(value / 5) * 100}%` }}
        />
      </div>
      <span className="rating_value">{value.toFixed(1)}</span>
    </div>
  );
};

export default Reviews;
