import React from "react";
import "./styles/Services.css";

const Services = () => {
  return (
    <div className="services_container">
      <div className="services_left">
        <div className="services_header_l">
          <hr className="left_hr" />
          <h1>Our</h1>
        </div>
        <div className="services_boxes1">
          <div className="services_box_u"></div>
          <div className="services_box_u"></div>
        </div>
        <div className="services_boxes2">
          <div className="services_box_u"></div>
          <div className="services_box_u"></div>
        </div>
      </div>
      <div className="services_right">
        <div className="services_header_r">
          <h1>Services</h1>
          <hr className="right_hr" />
        </div>
        <div className="services_boxes3">
          <div className="services_box_d"></div>
          <div className="services_box_d"></div>
        </div>
        <div className="services_boxes4">
          <div className="services_box_d"></div>
          <div className="services_box_d"></div>
        </div>
      </div>
    </div>
  );
};

export default Services;
