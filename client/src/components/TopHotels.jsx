import React from 'react'
import hotels from '../data/hotels.js';
import './styles/TopHotels.scss'
import HotelCard from './HotelCard';
const TopHotels = () => {
    const tophotels=hotels.filter(hotel=>hotel.top_hotel==="True");
    return (
        <>
            <div className='tophotels'>
                <div className='tophotels-heading'>
                    <h1>Our Top Hotels</h1>
                </div>
                <div className='explore_hotels'>
                    {tophotels.map((hotel, index) => {
                        return (
                           <HotelCard hotel={hotel} index={index}/>
                        )
                    })}
                </div>
            </div>
        </>
    )
}

export default TopHotels
