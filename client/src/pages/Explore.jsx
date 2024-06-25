import React, { useState } from "react";
import "./styles/Explore.css";
import img1 from "../assets/images/mumbai_e.jpg";
import img2 from "../assets/images/delhi_e.jpg";
import img3 from "../assets/images/bangalore_e.jpg";

const Explore = () => {
  const [hotels, setHotels] = useState([
    {
      name: "Evara Greens",
      rating: 4.2,
      location: "Mumbai",
      image: img1,
    },
    {
      name: "The Caravell",
      rating: 4.7,
      location: "Mumbai",
      image: img2,
    },
    {
      name: "The Paradise",
      rating: 4.5,
      location: "Mumbai",
      image: img3,
    },
  ]);

  return (
    <div className="explore_container">
      <div className="explore_header">
        <div className="img1">
          <img src={img1} alt="Mumbai" />
        </div>
        <div className="img2">
          <img src={img2} alt="Delhi" />
        </div>
        <div className="img3">
          <img src={img3} alt="Bangalore" />
        </div>
      </div>
      <div className="explore_hotels">
        <div className="arrow">
          <p>&lt;</p>
        </div>
        {hotels.map((hotel, index) => (
          <div
            className={`hotel ${index === 1 ? "middle_hotel" : ""}`}
            key={index}
          >
            <div className="hotel_image">
              <img src={hotel.image} alt="Hotel" />
            </div>
            <div className="hotel_info">
              <div className="upper">
                <div>
                  <p>{hotel.name}</p>
                </div>
                <div className="rating">
                  <i className="fas fa-star"></i>
                  <p>{hotel.rating}</p>
                </div>
              </div>
              <div className="lower">
                <div>
                  <p>{hotel.location}</p>
                </div>
                <div>
                  <button onClick={() => (window.location.href = "/booking")}>
                    Explore
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
        <div className="arrow">
          <p>&gt;</p>
        </div>
      </div>
    </div>
  );
};

export default Explore;
