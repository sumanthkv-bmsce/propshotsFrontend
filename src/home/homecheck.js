import React from "react";
import "../css/Base2.css";
import { Link } from "react-router-dom";
import logo from "../images/propshots logo.jpeg";
import phone from "../images/inshortphone.png";
import ios from "../img/ios.svg";
import playstoreimg from "../img/playstore.svg";
const Base = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg  ">
        <div className="collapse navbar-collapse" id="navbarText">
          <ul className="navbar-nav mr-auto">
            <li>
              <h2>PropShots</h2>
            </li>
          </ul>

          <div className="social_media">
            <a href="#">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="#">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#">
              <i className="fab fa-instagram"></i>
            </a>
          </div>
          <span className="nav-item navbar-text">Blogs</span>
          <div className="actionbuttons">
            <Link to="/signin">
              <h4>Login </h4>
            </Link>
          </div>
        </div>
      </nav>

      <section className="mainBody">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <img src={phone} />
              <div className="tourbutton">
                <h5 className="">Take a Tour</h5>
              </div>
            </div>
            <div className="col-md-6">
              <h2></h2>
              <h3>WILLING TO OFFER A DISCOUNT ON YOUR PROPERTY?</h3>
              <h3>LET US TELL THE WORLD ABOUT IT.</h3>
              <h6>
                It will only take 100 words to post your property and letting
                thousands of buyurs know.
              </h6>

              <div className="row">
                <div className="col-md-6">
                  {" "}
                  <div className="cardlastbutton">
                    <h3>
                      <img src={playstoreimg} width="20px" />
                    </h3>
                  </div>
                </div>
                <div className="col-md-6">
                  {" "}
                  <div className="cardlastbutton">
                    <h3>
                      <img src={ios} width="20px" />
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Base;
