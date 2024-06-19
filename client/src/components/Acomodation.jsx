import React from "react";
import img2 from "../assets/images/img2.jpeg";
import './styles/Acomodation.css'

const Acomodation = () => {
  return (
    <>
    <div className="acomodation_header">
        <h1>Accomodations</h1>
    </div>
    <div className="acomodation_container">

       <div className="acomodation_firstC">
              <div className="img1">
                <img src={img2} alt="" />
              </div>
              <div className="text1">
                 <p>Deluxe Rooms</p>
                 <p>2 Adults | 1 Child Below 8</p>
              </div>
       </div>
       <div className="acomodation_secondC">
       <div className="text2">
                 <p>Deluxe Rooms</p>
                 <p>2 Adults | 1 Child Below 8</p>
              </div>
              <div className="img2">
                <img src={img2} alt="" />
              </div>
              
       </div>
       <div className="acomodation_thirdC">
              <div className="img3">
                <img src={img2} alt="" />
              </div>
              <div className="text3">
                 <p>Deluxe Rooms</p>
                 <p>2 Adults | 1 Child Below 8</p>
              </div>
       </div>
    </div>
    </>
  );
};

export default Acomodation;

