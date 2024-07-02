import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faCommentDots } from "@fortawesome/free-solid-svg-icons";
import "./styles/HotelDetails.scss";
import hotelImg1 from "../assets/images/hotel_img1.jpg";
import hotelImg2 from "../assets/images/hotel_img2.jpg";
import img1 from "../assets/images/hotel_smaller3.jpg";
import img2 from "../assets/images/aboutus_1.jpg";
import img3 from "../assets/images/aboutus_3.jpg";
import img4 from "../assets/images/hotel_smaller1.jpg";
import img5 from "../assets/images/aboutus_1.jpg";
import rowImg1 from "../assets/images/hotel_smaller1.jpg";
import rowImg2 from "../assets/images/aboutus_3.jpg";
import rowImg3 from "../assets/images/hotel_smaller3.jpg";
import rowImg4 from "../assets/images/aboutus_1.jpg";
import room3 from "../assets/images/room (3).jpg";
import room2 from "../assets/images/room (2).jpg";
import room1 from "../assets/images/room (1).jpg";
import { reviews } from "../data/reviews";
import { ImCross } from "react-icons/im";
const HotelDetails = () => {
  const [isbook, setisBook] = useState(false);
  const [guestDetails, setGuestDetails] = useState({
    roomType: 'deluxe',
    adults: '1',
    children: '0',
    checkin: '',
    checkout: ''
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setGuestDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value
    }));
  };
  const [visibleReviews, setVisibleReviews] = useState([]);
  const updatevisbleReviews = () => {
    const width = window.innerWidth;
    if (width >= 1093) {
      setVisibleReviews(reviews.slice(0, 6));
    } else if (width >= 768) {
      setVisibleReviews(reviews.slice(0, 4));
    } else {
      setVisibleReviews(reviews.slice(0, 2));
    }
  }
  useEffect(() => {
    updatevisbleReviews();
    window.addEventListener('resize', updatevisbleReviews);
    return () => {
      window.removeEventListener('resize', updatevisbleReviews);
    }
  }, []);
  useEffect(() => {
    if (isbook) {
      document.body.classList.add('no-scroll');
    } else {
      document.body.classList.remove('no-scroll');
    }
  }, [isbook]);
  return (
    <>
      {isbook &&
        <div className="booking_form">
          <div className="cross">
          <ImCross onClick={()=>setisBook(!isbook)}/>
          </div>
          <div className="header">
            <h2>Experience the Luxury </h2>
            <h4>Book your stay today!</h4>
          </div>
          <div className="inputForm">
            <form>
              <label>
                Room Type:
                <select name="roomType" value={guestDetails.roomType} onChange={handleChange}>
                  <option value="deluxe">Deluxe</option>
                  <option value="family">Family Suite</option>
                </select>
              </label>
              <label>
                Adults:
                <select name="adults" value={guestDetails.adults} onChange={handleChange}>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                </select>
              </label>
              <label>
                Children (below 8):
                <select name="children" value={guestDetails.children} onChange={handleChange}>
                  <option value="0">0</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                </select>
              </label>
              <label>
                Check-in Date:
                <input type="date" name="checkin" value={guestDetails.checkin} onChange={handleChange} />
              </label>
              <label>
                Check-out Date:
                <input type="date" name="checkout" value={guestDetails.checkout} onChange={handleChange} />
              </label>
            </form>
          </div>
          <div className="btn">
            <button type='submit'>Proceed</button>
          </div>
        </div>
      }


    <div className={isbook?'hotel_main blur':'hotel_main'}>
      <div className="hotel_Upper">
        <div className="left_1">
          <img src={hotelImg1} alt="Hotel Image 1" />
          <button className="book-button" onClick={()=>setisBook(!isbook)}>
            Book
          </button>
        </div>
        <div className="right_1">
          <img src={hotelImg2} alt="Hotel Image 2" />
        </div>
      </div>
      <div className="hotel_Lower">
        <div className="left_2">
          <img src={img1} alt="Image 1" />
          <img src={img2} alt="Image 2" />
          <img src={img3} alt="Image 3" />
          <img src={img4} alt="Image 4" />
        </div>
        <div className="right_2">
          <div className="top">
            <div className="hotel_details">
              <div className="left_half">
                <div className="texts">
                  <h1>Our Luxurious Rooms</h1>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quod, amet? Perspiciatis est magnam, molestiae libero
                    necessitatibus officia repellendus fuga sunt, ex nisi
                    similique asperiores nobis illo? Aspernatur sequi debitis
                    nesciunt cumque sapiente ducimus, veniam maiores numquam ab

                  </p>
                  <button className="left_half_book_button" onClick={()=>setisBook(!isbook)}>
                    Book
                  </button>
                </div>
              </div>
              <div className="right_half">
                {/* <div className="upper_part_right_half"></div> */}
                {/* <div className="header_right_half">
                  <h3>Deluxe Rooms Twin Bed</h3>
                </div> */}
                <div className="lower_part_right_half">
                  <img src={room1} alt="Room 1" />
                </div>
              </div>
            </div>
            <div className="hotel_images">
              <div className="upper_contain">
                <img src={room2} alt="Room 2" />
                {/* <p>Deluxe Room</p> */}
              </div>
              <div className="lower_contain">
                <img src={room3} alt="Room 3" />
                {/* <p>Family Suite</p> */}
              </div>
            </div>
          </div>
          <div className="bottom">
            {visibleReviews.map((review, index) => (
              <div key={index} className="review">
                <div className="msg-icons">
                  <FontAwesomeIcon
                    icon={faCommentDots}
                    className="feedback-icon"
                  />
                </div>
                <p>{review.message}</p>
                <strong>{review.name}</strong>
                <div className="star-icons">
                  {[...Array(review.rating)].map((_, i) => (
                    <FontAwesomeIcon key={i} icon={faStar} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="image-row">
        <img src={rowImg1} alt="Row Image 1" />
        <img src={rowImg2} alt="Row Image 2" />
        <img src={rowImg3} alt="Row Image 3" />
        <img src={rowImg4} alt="Row Image 4" />
      </div>
      <div className="addreview">
        <button>Add Your valuable Review</button>
      </div>
    </div>
    </>
  );
};

export default HotelDetails;
