import React from "react";
import "./styles/Services.css";
import HomeIcon from '@mui/icons-material/Home';
import RestaurantIcon from '@mui/icons-material/Restaurant';
import WifiIcon from '@mui/icons-material/Wifi';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import EventIcon from '@mui/icons-material/Event';
import SportsSoccerIcon from '@mui/icons-material/SportsSoccer';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import LocalMallIcon from '@mui/icons-material/LocalMall';

const Services = () => {
  return (
    <div className="services_container">
      <div className="services_left">
        <div className="services_header_l">
          <hr className="left_hr" />
          <h1>𝐎υ𝗋</h1>
        </div>
        <div className="services_boxes1">
          <div className="services_box_u">
            <HomeIcon style={{ fontSize: 70 }} />
            <p>Accommodation</p>
          </div>
          <div className="services_box_u">
            <RestaurantIcon style={{ fontSize: 70 }} />
            <p>Dining</p>
          </div>
        </div>
        <div className="services_boxes2">
          <div className="services_box_u">
            <WifiIcon style={{ fontSize: 70 }} />
            <p>WiFi</p>
          </div>
          <div className="services_box_u">
            <FitnessCenterIcon style={{ fontSize: 70 }} />
            <p>Gym</p>
          </div>
        </div>
      </div>
      <div className="services_right">
        <div className="services_header_r">
          <h1>𝐒𝖾𝗋𝗏𝗂𝖼𝖾𝗌</h1>
          <hr className="right_hr" />
        </div>
        <div className="services_boxes3">
          <div className="services_box_d">
            <EventIcon style={{ fontSize: 70 }} />
            <p>Event Facilities</p>
          </div>
          <div className="services_box_d">
            <SportsSoccerIcon style={{ fontSize: 70 }} />
            <p>Recreational Activities</p>
          </div>
        </div>
        <div className="services_boxes4">
          <div className="services_box_d">
            <DirectionsCarIcon style={{ fontSize: 70 }} />
            <p>Parking</p>
          </div>
          <div className="services_box_d">
            <LocalMallIcon style={{ fontSize: 70 }} />
            <p>Gift Shops</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
