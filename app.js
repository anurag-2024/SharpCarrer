const Header = () => {
    return (
      <header className="header">
        <a href="#" className="logo">
          <img src="logo.png" alt="SharpSkill Logo" />
        </a>
        <nav>
          <a href="#">Home</a>
          <a href="#">About Us</a>
          <a href="#">Accommodations</a>
          <a href="#">Services</a>
          <a href="#">Contact Us</a>
        </nav>
        <div className="auth-buttons">
          <button className="sign-in">Sign In</button>
          <button className="sign-up">Sign Up</button>
        </div>
      </header>
    );
  };
  
  const HeroSection = () => {
    const handleBooking = () => {
      const destination = document.querySelector('input[name="destination"]').value;
      const checkIn = document.querySelector('input[name="checkin"]').value;
      const checkOut = document.querySelector('input[name="checkout"]').value;
      alert(`Booking Details:\nDestination: ${destination}\nCheck-In: ${checkIn}\nCheck-Out: ${checkOut}`);
    };
  
    return (
      <section className="hero-section">
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
      </section>
    );
  };
  
  const App = () => {
    return (
      <div>
        <Header />
        <HeroSection />
      </div>
    );
  };
  
  ReactDOM.render(<App />, document.getElementById('root'));