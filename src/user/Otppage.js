import React, { useState } from "react";
import { Link, Redirect } from "react-router-dom";

import { signin } from "../auth/helper";
import log from "../img/log.svg";
import { motion } from "framer-motion";
import logo from "../img/log.svg";
// import { style } from "../css/style.css";
import { signup } from "../auth/helper.js";
import { Dropdown, DropdownButton, Item } from "react";
import google from "../img/google icon.svg";
import fb from "../img/fb.svg";
import phoneimg from "../img/phone.svg";
import ios from "../img/ios.svg";
import playstoreimg from "../img/playstore.svg";
// import homes from "../css/home.css";
import mobileview from "../img/main_india.jpg";
import ioss from "../img/ios_app_store.png";
import android from "../img/android_app_store.png";
import Resen from './resendComp'

import { Modal, Button } from "react-bootstrap";
// import { modal } from "../css/modal.css";
import Base from "../home/Base.js";
import "../css/base.css";
const Signin = () => {
  const [values, setValues] = useState({
    name: "",
    email: "",
    phone: "",
    error: "",
    loading: false,
    didRedirect: false,
  });
  const [show, setShow] = useState(true);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const { name, phone, email, error, loading, didRedirect } = values;

  const handleChange = (name) => (event) => {
    setValues({ ...values, error: false, [name]: event.target.value });
  };

  const pageVariants = {
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
  const pagechange = () => {
    window.location.replace("/home");
  };

  const signinForm = () => {
    return (
      <motion.div
        initial="initial"
        animate="in"
        exit="out"
        transition={{ ease: "easeOut", duration: 1 }}
        variants={pageVariants}
      >
        <Modal
          show={show}
          title={null}
          animation={true}
          onHide={handleClose}
          backdrop="static"
          keyboard={false}
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          <div className="modalheader">
            <Modal.Header title={null} onClick={pagechange} closeButton>
              <h6 className="text-center">Sign In</h6>
            </Modal.Header>
          </div>
          <Modal.Body className="get">
            <div className="modalbody">
              <div className="form-group">
                <label className="text-dark">Enter OTP</label>
                <input
                  className="form-control"
                  onChange={handleChange("phone")}
                  value={phone}
                  type="text"
                />
              </div>
              <button onClick={pagechange} className="btn btn-primary ">
                Submit
              </button>
            </div>
            <Resen otp={this.props.otp}></Resen>
          </Modal.Body>
        </Modal>
        <Base />
      </motion.div>
    );
  };

  return (
    <div title="Sign in Page" description="Login here">
      {signinForm()}
    </div>
  );
};

export default Signin;
