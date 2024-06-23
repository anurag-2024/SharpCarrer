import React, { useState } from "react";
import "./styles/HeroSection.css";

const HeroSection = () => {
  const [destination, setDestination] = useState("");
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");

  const handleBooking = () => {
    alert(
      `Booking Details:\nDestination: ${destination}\nCheck-In: ${checkIn}\nCheck-Out: ${checkOut}`
    );
  };

  return (
    <section className="hero-section">
      <div className="hero-text">
        <h3>𝖶𝖾𝗅𝖼𝗈𝗆𝖾 𝗍𝗈</h3>
        <h1 className="sharpskill">𝓣𝓱𝓮 𝓢𝓱𝓪𝓻𝓹𝓢𝓴𝓲𝓵𝓵</h1>
        <h2>𝑹𝒆𝒔𝒐𝒓𝒕 𝒂𝒏𝒅 𝑯𝒐𝒕𝒆𝒍 𝑪𝒉𝒂𝒊𝒏𝒔</h2>
      </div>
      <div className="search-bar">
        <div className="input-container_h">
          <i className="fas fa-map-marker-alt"> Destination</i>
          <input
            type="text"
            name="destination"
            placeholder="Destination"
            value={destination}
            onChange={(e) => setDestination(e.target.value)}
          />
        </div>
        <div className="input-container_h">
        <i className="fas fa-calendar-alt">  Check In</i>
          <input
            type="date"
            id="checkin"
            name="checkin"
            value={checkIn}
            required
            onChange={(e) => setCheckIn(e.target.value)}
          />
        </div>
        <div className="input-container_h">
        <i className="fas fa-calendar-alt">  Check Out</i>
          <input
            type="date"
            id="checkout"
            name="checkout"
            value={checkOut}
            required
            onChange={(e) => setCheckOut(e.target.value)}
          />
        </div>
        <button className="h_btn1" onClick={handleBooking}>Book Now</button>
      </div>
    </section>
  );
};

export default HeroSection;
