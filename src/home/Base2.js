import React from "react";
import "../css/Base2.css";
import { Link } from "react-router-dom";
import Signin from "../user/Signin";
import logo from "../images/propshots logo.jpeg";
import phone from "../images/inshortphone.png";
const Base = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg  ">
        <div className="collapse navbar-collapse" id="navbarText">
          <ul className="navbar-nav mr-auto">
            <li>
              <img src={logo} alt="" />
            </li>
          </ul>
          <span className="nav-item navbar-text">Blogs</span>
          <span className="nav-item navbar-text">Follow us on</span>
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
        </div>
      </nav>

      <section className="mainBody">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <img src={phone} />
            </div>
            <div className="col-md-6">
              <h2>Welcome to Propshorts</h2>
              <h3>WILLING TO OFFER A DISCOUNT ON YOUR PROPERTY?</h3>
              <h3>LET US TELL THE WORLD ABOUT IT.</h3>
              <h6>
                It takes less tham 160 words to post a property, bew the first
                one and let top buyers know.
              </h6>
              <div className="row">
                <div className="col-md-6">
                  <div className="actionbuttons">
                    <Link to="/Signup">
                      <h4>Signup </h4>
                    </Link>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="actionbuttons">
                    <Link to="/Signup">
                      <h4>Signin </h4>
                    </Link>
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
