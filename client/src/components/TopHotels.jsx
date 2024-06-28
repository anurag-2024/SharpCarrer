import React from 'react'
import hotels from '../data/tophotels.js';
import './styles/TopHotels.scss'
import { Link } from 'react-router-dom';
import HotelCard from './HotelCard';
const TopHotels = () => {
    return (
        <>
            <div className='tophotels'>
                <div className='tophotels-heading'>
                    <h1>Our Top Hotels</h1>
                </div>
                <div className='explore_hotels'>
                    {hotels.map((hotel, index) => {
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
