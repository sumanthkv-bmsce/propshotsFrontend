import React, { useEffect } from "react";
import "../css/base.css";
import { Link } from "react-router-dom";
import logo from "../images/propshots logo.jpeg";
import logo1 from "../images/output-onlinejpgtools (4).png";
import phone from "../images/inshortphone.png";
import ios from "../img/ios.svg";
import playstoreimg from "../img/playstore.svg";
import gplay from "../images/gplay.png";
import iosplay from "../images/iosappplay.png";
import phoneimg from "../picimg/Artboard 1ins.png";

const Base = () => {
  useEffect(() => {
    // closeNav();
  }, []);
  /* Set the width of the side navigation to 250px */
  const openNav = () => {
    document.getElementById("mySidenav").style.width = "250px";
  };

  /* Set the width of the side navigation to 0 */
  const closeNav = () => {
    document.getElementById("mySidenav").style.width = "0";
  };

  return (
    <div>
      <div className="bs-example">
        <nav className="navbar navbar-expand-md navbar-light bg-light">
          <span className="navbar-toggler-icon" onClick={openNav}></span>
          <Link to="/home" className="navbar-brand">
            PropShots
          </Link>
          <div id="mySidenav" className="sidenav">
            <Link to="/" className="p-3">
              <span
                // href="javascript:void(0)"
                className="closebtn  ml-4"
                onClick={closeNav}
              >
                &times;
              </span>
            </Link>
            <Link to="/signin">Login</Link>
            <Link to="/signup">Signup</Link>

            <Link to="/signup">Post Property</Link>
            <Link to="/">Blogs</Link>
            <Link to="/">
              <img src={playstoreimg} width="10px" className=" mr-2 " />
              Android app
            </Link>
            <Link to="/">
              <img src={ios} width="10px" className=" mr-2 " />
              ios app
            </Link>
          </div>

          <div className="collapse navbar-collapse" id="navbarCollapse">
            <div className="navbar-nav mynav  ml-auto">
              <Link to="/Signup" className="nav-item nav-link">
                Post Property
              </Link>

              <Link to="/blogs" className="nav-item nav-link">
                Blog
              </Link>
            </div>
          </div>
        </nav>
      </div>

      <section className="mainBody">
        <div className="container">
          <div className="row">
            <div className="col-md-6 leftbox col-xs-0">
              <img src={phoneimg} />
            </div>
            <div className="col-md-6 col-xs-6 rightbox">
              <h2></h2>
              <h3>WILLING TO OFFER A DISCOUNT ON YOUR PROPERTY?</h3>
              <h3>LET US TELL THE WORLD ABOUT IT.</h3>
              <h6>
                It only takes 20 words to post your property & let thousands of
                buyers know.
              </h6>

              <div className="row">
                <div className="col-md-6 col-xs-0">
                  <div className="col-md-6 leftbox2 col-xs-0">
                    <img src={phoneimg} />
                  </div>
                  <div className="actionbuttons action1 fourth">
                    <Link to="/Signup">
                      <h4>Signup </h4>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-6">
                  <div className="actionbuttons fourth">
                    <Link to="/signin">
                      <h4>Login </h4>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-2 col-xs-0"></div>
                <div className="col-md-4 col-xs-6">
                  <div className="icons">
                    <img src={gplay} width="20px" />
                  </div>
                  <h6
                    style={{
                      margin: "-4px -13px",
                      fontSize: "12px",
                      fontWeight: "200",
                    }}
                  >
                    Coming Soon..
                  </h6>
                </div>
                <div className="col-md-3 col-xs-6">
                  <div className="icons">
                    <img src={iosplay} width="20px" />
                  </div>
                  <h6
                    style={{
                      margin: "-4px -4px",
                      fontSize: "12px",
                      fontWeight: "200",
                    }}
                  >
                    Coming Soon..
                  </h6>
                </div>
                <div className="col-md-3 col-xs-0"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Base;
