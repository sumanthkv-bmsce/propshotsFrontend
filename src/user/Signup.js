import React, { useState } from "react";
import { Link, Redirect } from "react-router-dom";
import { signup, FbSignup } from "../auth/helper.js";
import google from "../img/google icon.svg";
import fb from "../img/fb.svg";
import phoneimg from "../img/phone.svg";
import ios from "../img/ios.svg";
import playstoreimg from "../img/playstore.svg";
import mobileview from "../img/main_india.jpg";
import ioss from "../img/ios_app_store.png";
import android from "../img/android_app_store.png";
import logo from "../img/register.svg";
import { Modal, Button } from "react-bootstrap";
import { motion } from "framer-motion";
import "../css/modal.css";
import Base from "../home/Base.js";
import gplay from "../images/gplay.png";
import iosplay from "../images/iosappplay.png";
import GoogleLogin from "react-google-login";
import { render } from "@testing-library/react";
import GetMobile from "./GetMobile.js";
import { isAuthenticated } from "../auth/helper/index";

class GoogleSignUp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: true,
      email: "",
      name: "",
    };

    this.responseGoogle = this.responseGoogle.bind(this);
  }

  responseGoogle = (response) => {
    this.setState({
      email: response.profileObj.email,
      name: response.profileObj.name,
    });

    console.log(response.profileObj);
    // window.location.replace("/emailotp");
  };
  componentDidMount() {
    if (isAuthenticated()) {
      window.location.replace("/");
    }
  }

  handleClose = () => {
    this.setState({ show: false });
  };

  pageVariants = {
    initial: {
      opacity: 0,
    },
    in: {
      opacity: 1,
    },
    out: {
      opacity: 1,
    },
  };
  click = () => {
    FbSignup();
  };
  pagechange = () => {
    window.location.replace("/");
  };

  render() {
    if (this.state.email === "" || this.state.name === "") {
      return (
        <div title="Sign up Page" description="Register here">
          <motion.div
            initial="initial"
            animate="in"
            exit="out"
            transition={{ ease: "easeOut", duration: 1 }}
            variants={this.pageVariants}
          >
            <Modal
              show={this.state.show}
              title={null}
              animation={true}
              onHide={this.handleClose}
              backdrop="static"
              keyboard={false}
              aria-labelledby="contained-modal-title-vcenter"
              centered
            >
              <div className="modalheader">
                <Modal.Header
                  title={null}
                  onClick={this.pagechange}
                  closeButton
                >
                  {/* <h6 className="text-center">Sign Up</h6> */}
                </Modal.Header>
              </div>
              <Modal.Body className="get">
                <h2>Sign Up</h2>
                <p>
                  Its how you get the most out of Propshots. Oh and its free.
                </p>
                {/* <div onClick={this.click} className="cardbutton">
                  <h3>
                    <img src={google} />
                   
                    Google
                  </h3>
                </div> */}
                {/* <div onClick={this.click} className="cardbutton">
                  <h3>
                    <img src={fb} />
                    Facebook
                  </h3>
                </div> */}
                <div onClick={this.click} className="cardbutton">
                  <h3>
                    <img src={phoneimg} width="20px" />
                    <Link to="/mobilesignup" className="links">
                      Mobile Number
                    </Link>
                  </h3>
                </div>
                <div className="linediv"></div>
                <h2 className="getapp">GET THE APP</h2>
                <div className="row appimage">
                  <div className="col-md-6">
                    <img src={gplay} width="180px" />
                  </div>
                  <div className="col-md-6">
                    <img src={iosplay} width="180px" />
                  </div>
                </div>
              </Modal.Body>
            </Modal>
            <Base />
          </motion.div>
        </div>
      );
    } else {
      return (
        <GetMobile name={this.state.name} email={this.state.email}></GetMobile>
      );
    }
  }
}

export default GoogleSignUp;
