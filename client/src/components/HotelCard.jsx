import React from 'react'
import { Link } from 'react-router-dom'
import "./styles/HotelCard.scss"
const HotelCard = ({hotel,index}) => {
    const baseURL=import.meta.env.VITE_APP_URL;
    return (
        <>
            <div
                className={`hotel ${index === 1 ? "middle_hotel" : ""}`}
                key={index}
            >
                <div className="hotel_image">
                    <Link to={`/explore/hotel/${hotel?._id}`}>
                        <img src={`${baseURL}${hotel.Photos[0]}`} alt="Hotel" />
                    </Link>
                </div>
                <div className="hotel_info">
                    <div className="upper">
                        <Link to={`/explore/hotel/${hotel?._id}`} style={{ textDecoration: "none" }}>
                            <div>
                                <p>{hotel.Hotel_name}</p>
                            </div>
                        </Link>
                        <div className="rating">
                            <i className="fas fa-star"></i>
                            <p>5</p>
                        </div>
                    </div>
                    <div className="lower">
                        <div>
                            <p>{hotel.Location}</p>
                        </div>
                        <div>
                            <Link to={`/explore/hotel/${hotel?._id}`}>
                                <button>
                                    Explore
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default HotelCard
