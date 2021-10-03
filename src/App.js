import React, { useEffect } from "react";
import ImageLogo from "assets/images/logo.png";
import ImageHero from "assets/images/banner.png";

import { Nav, Navbar } from "react-bootstrap";
import Aos from "aos";
import "aos/dist/aos.css";

import iconGoogle from "assets/images/icon_google.png";
import iconApple from "assets/images/icon_apple.png";
import iconSlack from "assets/images/icon_slack.png";
import iconAdobe from "assets/images/icon_adobe.png";
import iconSpotify from "assets/images/icon_spotify.png";

import iconCecklist1 from "assets/images/ic_check_gray.svg";
import iconCecklist2 from "assets/images/ic_check_purple.svg";

import "assets/scss/style.scss";
import { Link } from "react-router-dom";

function App() {
 
  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <div className="App">
      <Navbar
        bg="white"
        variant="white"
        sticky="top"
        expand="sm"
        collapseOnSelect
      >
        <Navbar.Brand>
          <img src={ImageLogo} width="40px" height="40px" /> telepatia
        </Navbar.Brand>

        <Navbar.Toggle className="custom-toggler" />
        <Navbar.Collapse>
          <Nav className="ml-auto">
            <Nav.Link
              href="#blog"
              style={{ marginRight: "50px", color: "#563AD6", fontWeight:"500" }}
            >
              Features
            </Nav.Link>
            <Nav.Link
              href="#about-us"
              style={{ marginRight: "50px", color: "#02044a" }}
            >
              Pricing
            </Nav.Link>
            <Nav.Link
              href="#contact-us"
              style={{ marginRight: "50px", color: "#02044a" }}
            >
              Stories
            </Nav.Link>
            <Nav.Link
              href="#blog"
              style={{ marginRight: "50px", color: "#02044a" }}
            >
              Premium
            </Nav.Link>
            <Nav.Link
              href="#about-us"
              style={{ marginRight: "50px", color: "#02044a" }}
            >
              Contact
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>

      <div className="page-content">
        <div className="container">
          <div className="row pt-5 justify-content-center">
            <div className="col-lg-5" data-aos="zoom-in" data-aos-delay="200">
              <a className="image-hero" href="/">
                <img
                  width="584"
                  height="505"
                  src={ImageHero}
                  alt=""
                  className="img-fluid text-center"
                />
              </a>
            </div>
            <div
              className="col-lg-6 ml-4 "
              data-aos="fade-left"
              data-aos-delay="200"
            >
              <h1 className="content-text-hero">
                Always Connected.
                <br />
                No Lagging.
              </h1>
              <h1 className="context-text-des">
                There are many variations of passages of
                <br />
                Lorem Ipsum available, but the majority have
                <br />
                suffered alteration in some form
              </h1>
              <div className="row ml-1">
                <div className="btn button-purple mt-4 mr-2">See Pricing</div>
                <div className="btn button-gray mt-4">Testimonials</div>
              </div>
            </div>
          </div>
        </div>

        <div className="corporate">
          <div className="container">
            <div className="row pt-5 justify-content-center text-center content-logo">
              <div className=" col-4 col-lg-2 col-md-2 ">
                <img
                  src={iconGoogle}
                  height="60%"
                  alt=""
                  className="img-fluid"
                />
              </div>
              <div className=" col-4 col-lg-2 col-md-2 ">
                <img src={iconApple} height="10" alt="" className="img-fluid" />
              </div>
              <div className=" col-4 col-lg-2 col-md-2 ">
                <img src={iconSlack} height="10" alt="" className="img-fluid" />
              </div>
              <div className=" col-4 col-lg-2 col-md-2 ">
                <img src={iconAdobe} height="10" alt="" className="img-fluid" />
              </div>
              <div className=" col-4 col-lg-2 col-md-4 ">
                <img
                  src={iconSpotify}
                  height="10"
                  alt=""
                  className="img-fluid"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="page-content-price">
        <div className="container">
          <div className="row text-center justify-content-center">
            <h1 className="text-title">Easy Budget.</h1>
          </div>
          <div className="row text-center justify-content-center">
            <div className="col-lg-5">
              <h1 className="text-title-description">
                There are many variations of passages of Lorem Ipsum available,
                but the majo.
              </h1>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-7 col-12">
              <div className="row ">
                <div className="col-lg-6 col-12">
                  <div
                    className="master-card card-white "
                    data-aos="fade-down"
                    data-aos-delay="200"
                  >
                    <h1 className="card-title">Basic</h1>
                    <h1 className="card-price">$50,000</h1>
                    <h1 className="card-description">
                      Disarankan untuk baru yang memulai bisnis tahun ini
                    </h1>

                    <div className="item-benefits">
                      <p>
                        <img src={iconCecklist1} alt="" />
                        Live Support
                      </p>
                    </div>
                    <div className="item-benefits">
                      <p>
                        <img src={iconCecklist1} alt="" />
                        10GB Storage
                      </p>
                    </div>
                    <div className="item-benefits">
                      <p>
                        <img src={iconCecklist1} alt="" />
                        Basic Themes
                      </p>
                    </div>
                    <a href="" className="btn btn-click-purple d-flex">
                      Start With This
                    </a>
                  </div>
                </div>

                <div
                  className="col-lg-6 col-12"
                  data-aos="fade-down"
                  data-aos-delay="300"
                >
                  <div className="master-card card-purple ">
                    <h1 className="card-title">Most Popular</h1>
                    <h1 className="card-price">$50,000</h1>
                    <h1 className="card-description">
                      Cocok sekali untuk anda yang sedang membangun bisnis
                    </h1>

                    <div className="item-benefits">
                      <p>
                        <img src={iconCecklist2} alt="" />
                        Live Support
                      </p>
                    </div>
                    <div className="item-benefits">
                      <p>
                        <img src={iconCecklist2} alt="" />
                        Unlimited Storage
                      </p>
                    </div>
                    <div className="item-benefits">
                      <p>
                        <img src={iconCecklist2} alt="" />
                        Unlock 1K Themes
                      </p>
                    </div>
                    <div className="item-benefits">
                      <p>
                        <img src={iconCecklist2} alt="" />
                        Server Optimized
                      </p>
                    </div>
                    <div className="item-benefits">
                      <p>
                        <img src={iconCecklist2} alt="" />
                        All Basic Features
                      </p>
                    </div>
                    <a href="" className="btn btn-click-green d-flex">
                      Choose This Plan
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
