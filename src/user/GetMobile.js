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
import { isAuthenticated, authenticate } from "../auth/helper/index";

class GetMobile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: true,
      phone: "",
      error: "",
      success: false,
      email: "",
      name: "",
    };
    const name = this.props.name;
    this.setState({
      name: name,
      email: this.props.email,
    });

    console.log("adas", this.state.name);
    this.responseGoogle = this.responseGoogle.bind(this);
  }

  handleChange = (name) => (event) => {
    console.log(event.target.value);
    this.setState({
      error: false,
      phone: event.target.value,
    });
  };

  responseGoogle = (response) => {
    console.log(response.profileObj);
  };

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
  onSubmit = (event) => {
    console.log("adas", this.props.name);
    event.preventDefault();

    this.setState({ error: false });
    console.log(this.state.phone);
    console.log(this.props.email);
    console.log(this.props.name);

    signup(this.state.phone, this.props.email, this.props.name) //this signup is from auth/helper
      .then((data) => {
        if (data.error) {
          this.setState({
            error: data.error,
            success: false,
          });
          console.log(this.state.error);
        } else {
          authenticate(data, () => {
            console.log("data", data);
          });
          this.setState({
            phone: "",
            error: "",
            success: true,
          });
        }
      })

      .catch(console.log("error in signup"));
  };

  render() {
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
              <Modal.Header title={null} onClick={this.pagechange} closeButton>
                {/* <h6 className="text-center">Sign Up</h6> */}
              </Modal.Header>
            </div>
            <Modal.Body className="get">
              <div className="modalbody">
                <div className="form-group">
                  <label className="text-dark">Phone</label>
                  <input
                    className="form-control"
                    onChange={this.handleChange("phone")}
                    value={this.state.phone}
                    type="text"
                  />
                </div>
                <button onClick={this.onSubmit} className="btn  btn-primary">
                  Submit
                </button>
              </div>
            </Modal.Body>
          </Modal>
          <Base />
        </motion.div>
      </div>
    );
  }
}

export default GetMobile;
