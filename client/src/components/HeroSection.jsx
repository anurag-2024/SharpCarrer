import React from 'react';

const HeroSection = () => {
  const handleBooking = () => {
    const destination = document.querySelector('input[name="destination"]').value;
    const checkIn = document.querySelector('input[name="checkin"]').value;
    const checkOut = document.querySelector('input[name="checkout"]').value;
    alert(`Booking Details:\nDestination: ${destination}\nCheck-In: ${checkIn}\nCheck-Out: ${checkOut}`);
  };

  return (
    <section className="hero-section">
      <video autoPlay muted loop id="background-video">
        <source src="../../assets/backgroundVideo/landingpage_video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="hero-content">
        <h1>Welcome to <br /> The SharpSkill Resort and Hotel Chains</h1>
        <div className="search-bar">
          <div className="input-container">
            <i className="fas fa-map-marker-alt"></i>
            <input type="text" name="destination" placeholder="Destination" />
          </div>
          <div className="input-container">
            <label htmlFor="checkin" className="input-label">Check-In</label>
            <input type="date" id="checkin" name="checkin" />
          </div>
          <div className="input-container">
            <label htmlFor="checkout" className="input-label">Check-Out</label>
            <input type="date" id="checkout" name="checkout" />
          </div>
          <button onClick={handleBooking}>Book Now</button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
