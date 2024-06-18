import React, { useState } from "react";
import "./styles/Memorable.css";
import memorable from '../../public/images/memorable.jpg';
import img1 from '../../public/images/img1.jpeg';

const Memorable = () => {
  const [reviews, setReviews] = useState([
    {
      image: "https://via.placeholder.com/100",
      rating: 4,
      text: " This is the first memorable insight. The text should wrap correctly within the review box without overflowing This is the second memorable insight."
    },
    {
      image: "https://via.placeholder.com/100",
      rating: 5,
           text: " This is the first memorable insight. The text should wrap correctly within the review box without overflowing This is the second memorable insight."
    },
    {
      image: "https://via.placeholder.com/100",
      rating: 3,
          text: " This is the first memorable insight. The text should wrap correctly within the review box without overflowing This is the second memorable insight."
    },
    {
        image: "https://via.placeholder.com/100",
        rating: 4,
             text: " This is the first memorable insight. The text should wrap correctly within the review box without overflowing This is the second memorable insight."
      },
      {
        image: "https://via.placeholder.com/100",
        rating: 5,
            text: " This is the first memorable insight. The text should wrap correctly within the review box without overflowing This is the second memorable insight."
      },
      {
        image: "https://via.placeholder.com/100",
        rating: 3,
             text: " This is the first memorable insight. The text should wrap correctly within the review box without overflowing This is the second memorable insight."
      }
  ]);

  const renderStars = (rating) => {
    return (
      <div className="stars">
        {[...Array(5)].map((star, index) => (
          <span key={index} className={index < rating ? "star filled" : "star"}>★</span>
        ))}
      </div>
    );
  };

  return (
    <>
      <div className="memorable_header">
        <h2>Memorable insights</h2>
      </div>
      <div className="memorable_container">
        <div className="memorable_left">
          <p>&lt;</p>
          <div className="memorable_reviews">
            {reviews.map((review, index) => (
              <div key={index} className="review">
                <img src={img1} alt="" className="review-image" />
                {renderStars(review.rating)}
                <p>{review.text}</p>
              </div>
            ))}
          </div>
          <p>&gt;</p>
        </div>
        <div className="memorable_right">
          <img src={memorable} alt="Memorable" />
        </div>
      </div>
    </>
  );
};

export default Memorable;
