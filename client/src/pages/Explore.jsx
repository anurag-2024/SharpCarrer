import React, { useState } from "react";
import "./styles/Explore.css";
import img1 from "../assets/images/mumbai_e.jpg";
import img2 from "../assets/images/delhi_e.jpg";
import img3 from "../assets/images/bangalore_e.jpg";
import img4 from "../assets/images/hotel_1.jpg";
import img5 from "../assets/images/hotel_2.jpg";
import img6 from "../assets/images/hotel_3.jpg";

const Explore = () => {
  const [hotels, setHotels] = useState([
    {
      name: "Evara Greens",
      rating: 4.2,
      location: "Mumbai",
      image: img5,
    },
    {
      name: "The Caravell",
      rating: 4.7,
      location: "Mumbai",
      image: img6,
    },
    {
      name: "The Paradise",
      rating: 4.5,
      location: "Mumbai",
      image: img4,
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
