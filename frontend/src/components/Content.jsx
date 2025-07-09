import React from "react";
import "./Content.css";

const Content = () => {
  return (
    <div className="content">
      <div className="inspiration">
        <h4 className="inspo_title">Inspiration for your next trip</h4>

        <div className="inspo_locations">
          <div className="location_info ">
            <div className="hotel_pic">
              <img
                className="inspo_pic"
                src="https://drsprnoe9nnhf.cloudfront.net/southernsun-04222022/cms/cache/v2/5d2f0a754de8f.jpg/700x700/fit;c:0,0,2600,1733/80/f219b94d8b616e95850b955f5514a174.jpg"
                alt=""
              />
            </div>
            <div className="sandton_location inspo_info">
              <h2 className="location_title">Sandton City Hotel</h2>
              <p className="distance"> 53 km away</p>
            </div>
          </div>

          <div className="location_info ">
            <div className="hotel_pic">
              <img
                className="inspo_pic"
                src="https://www.south-african-hotels.com/media/TheCapitalOnThePark.jpg"
                alt=""
              />
            </div>
            <div className="joburg_location inspo_info">
              <h2 className="location_title">Joburg City Hotel</h2>
              <p className="distance"> 168 km away</p>
            </div>
          </div>

          <div className="location_info ">
            <div className="hotel_pic">
              <img
                className="inspo_pic"
                src="https://images.trvl-media.com/lodging/3000000/2180000/2172900/2172829/0cc39466.jpg?impolicy=resizecrop&rw=575&rh=575&ra=fill"
                alt=""
              />
            </div>
            <div className="woodmead_location inspo_info">
              <h2 className="location_title">Woodmead Hotel</h2>
              <p className="distance"> 30 km away</p>
            </div>
          </div>

          <div className="location_info ">
            <div className="hotel_pic">
              <img
                className="inspo_pic"
                src="https://content.skyscnr.com/available/1679106398/1679106398_WxH.jpg"
                alt=""
              />
            </div>
            <div className="hyde_location inspo_info">
              <h2 className="location_title"> Hyde Park Hotel</h2>
              <p className="distance"> 34 km away</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Content;
