import React from 'react';
import './styles/Destinations.css';
import defaultImage from '../../public/images/img1.jpeg';

const Destinations = () => {
  return (
    <>
      <div className="dest_d_container">
        <h1 className='dest_d_title'>Top Destinations</h1>
        <div className="dest_upper_cont">
          {Array(10).fill().map((_, index) => (
            <div className="dest_box" key={index}>
              <img src={defaultImage} alt={`Destination ${index}`} />
              <h1>Delhi</h1>
            </div>
          ))}
        </div>
        <div className="dest_low_cont">
          <div className="dest_texts">
            <h2 className='dest_left'>Explore best selling packages for</h2>
            <h3 className='dest_right'>International Stays</h3>
          </div>
          <div className="dest_items">
            {Array(15).fill().map((_, index) => (
              <div className="dest_item" key={index}>
                <img src={defaultImage} alt={`Destination ${index}`} />
                <h3>Dubai</h3>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Destinations;
