import React from "react";
import "./styles/About.scss";
import img1 from "../assets/images/img1.jpeg";
import img2 from "../assets/images/img2.jpeg";
import img3 from "../assets/images/img3.jpeg";
import img4 from "../assets/images/img4.jpeg";
import staff from "../assets/images/staff.png";
import client from "../assets/images/client.png";
import room from "../assets/images/room.png";
import { Row, Col, Container } from 'react-bootstrap';

const About = () => {
  return (
    <>
      <div className="mt-5 py-5">
        <Container className="py-5">
          <Row className="align-items-stretch">
            <Col lg={4}>
              <Row className="align-items-stretch h-100">
                <Col md={6} className="d-flex flex-column justify-content-between">
                  <div className="ps-3 border-start border-2 border-secondary mb-3" style={{ height: '40%' }}>
                    <img src={img1} alt="Image 1" className="img-fluid h-100 object-fits-cover" />
                  </div>
                  <div className="pb-3 border-bottom border-2 border-secondary me-3" style={{ height: '80%'}}>
                    <img src={img4} alt="Image 4" className="img-fluid h-100" />
                  </div>
                </Col>
                <Col md={6} className="d-flex flex-column justify-content-between">
                  <div className="pt-3 border-top border-2 border-secondary ms-3 mb-3" style={{ height: '40%' }}>
                    <img src={img3} alt="Image 3" className="img-fluid h-100 object-fits-cover" />
                  </div>
                  <div className="pe-3 border-end border-2 border-secondary" style={{ height: '80%' }}>
                    <img src={img2} alt="Image 2" className="img-fluid h-100 object-fits-cover" />
                  </div>
                </Col>
              </Row>
            </Col>
            <Col lg={8}>
              <div>
                <div className="d-flex align-items-center justify-content-around">
                  <div className="w-25 bg-secondary" style={{ height: 2 }}></div>
                  <h2>About Us</h2>
                  <div className="w-25 bg-secondary" style={{ height: 2 }}></div>
                </div>
                <h3 className="h1">Welcome To SharpSkill</h3>
                <div className="h3 mb-4">Your Gateway To Exceptional Stays</div>
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
            </Col>
          </Row>
        </Container>
      </div>
      {/*<div className="about_about_container mt-5 py-3">
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
              <h1 className="data">Staff</h1>
              <h1 className="data">2345</h1>
            </div>
          </div>
          <div className="about_box_lower2">
            <div className="about_img">
              <img src={client} alt="Client" />
            </div>
            <div className="about_texts">
              <h1 className="data">Client</h1>
              <h1 className="data">2345</h1>
            </div>
          </div>
          <div className="about_box_lower3">
            <div className="about_img">
              <img src={room} alt="Room" />
            </div>
            <div className="about_texts">
              <h1 className="data">Room</h1>
              <h1 className="data">2345</h1>
            </div>
          </div>
        </div>
      </div>*/}
    </>
  );
};

export default About;
