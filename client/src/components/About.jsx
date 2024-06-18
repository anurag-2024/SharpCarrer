import React from "react";
import "./styles/About.css";
import img1 from "../../public/images/img1.jpeg";
import img2 from "../../public/images/img2.jpeg";
import img3 from "../../public/images/img3.jpeg";
import img4 from "../../public/images/img4.jpeg";
import staff from "../../public/images/staff.png";
import client from "../../public/images/client.png";
import room from "../../public/images/room.png";

const About = () => {
  return (
    <div className="about_about_container">
      <div className="about_upper_container">
        <div className="about_img_box">
          <div className="about_img1_box">
            <div className="about_img1_line"></div>
            <div className="about_img1">
              <img src={img1} alt="Image 1" />
            </div>
          </div>
          <div className="about_img2_box">
            <div className="about_img2_line"></div>
            <div className="about_img2">
              <img src={img2} alt="Image 2" />
            </div>
          </div>
          <div className="about_img3_box">
            <div className="about_img3">
              <img src={img3} alt="Image 3" />
            </div>
            <div className="about_img3_line"></div>
          </div>
          <div className="about_img4_box">
            <div className="about_img4">
              <img src={img4} alt="Image 4" />
            </div>
            <div className="about_img4_line"></div>
          </div>
        </div>
        <div className="about_text_box">
          <div className="about_about_heading">
            <hr className="about_separator" />
            <h2>About Us</h2>
            <hr className="about_separator" />
          </div>
          <h1>Welcome To SharpSkill</h1>
          <h3>Your Gateway To Exceptional Stays</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum
            officiis, est vero reprehenderit provident laborum similique, iusto
            repellat quis ipsam fugit ullam! Repudiandae, qui accusamus sunt
            praesentium voluptas natus earum nemo odit veritatis enim. Expedita,
            id aperiam porro molestiae assumenda minima ullam dolore rerum ipsum
            recusandae exercitationem, adipisci hic doloremque! Magni blanditiis
            repellendus omnis natus hic earum consequuntur asperiores deleniti.
          </p>
        </div>
      </div>
      <div className="about_lower_container">
        <div className="about_box_lower1">
          <div className="about_img">
            <img src={staff} alt="Staff" />
          </div>
          <div className="about_texts">
            <h1>Staff</h1>
            <h1>2345</h1>
          </div>
        </div>
        <div className="about_box_lower2">
          <div className="about_img">
            <img src={client} alt="Client" />
          </div>
          <div className="about_texts">
            <h1>Client</h1>
            <h1>2345</h1>
          </div>
        </div>
        <div className="about_box_lower3">
          <div className="about_img">
            <img src={room} alt="Room" />
          </div>
          <div className="about_texts">
            <h1>Room</h1>
            <h1>2345</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

