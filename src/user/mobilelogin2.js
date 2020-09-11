import React, { useState } from "react";
import { Link, Redirect } from "react-router-dom";

import { signin } from "../auth/helper";
import log from "../img/log.svg";
import { motion } from "framer-motion";
import logo from "../img/log.svg";
// import { style } from "../css/style.css";
import { signup, signincheck } from "../auth/helper.js";
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
import { isAuthenticated, authenticate } from "../auth/helper/index";

import { Modal, Button } from "react-bootstrap";
// import { modal } from "../css/modal.css";
import Base from "../home/Base.js";
import axios from "axios";
import Otp from "./otpcomponent";
const Signin = () => {
  const [values, setValues] = useState({
    name: "",
    email: "",
    phone: "",
    error: "",
    sign: "sign",
    loading: false,
    didRedirect: false,
  });
  const [show, setShow] = useState(true);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [myotp, setMyotp] = useState({
    otp: "",
  });
  const { otp } = myotp;

  const { name, phone, email, sign, error, loading, didRedirect } = values;

  const handleChange = (name) => (event) => {
    setValues({ ...values, error: false, [name]: event.target.value });
  };

  const { user } = isAuthenticated();
  const triggerotp = () => {

    axios({
      method: "GET",
      url: `http://localhost:8000/api/user1/totp-generate`,
      headers: {
        ContentType: "application/json",
      },
    })
      .then((res) => {
        
        console.log("OTP data", res.data);
        setMyotp({
          otp: res.data.token,
        });
        const otpp = res.data.token;
        const username = name;
        const phonee = phone;
        const body = { otpp, username, phonee };
        axios.post("http://localhost:8000/api/user/checkforvalidate", body).then((res) => {
          console.log("Successfully sent to user");
        });  
      })
      .catch((er) => {
        console.log(er);
      });
  };

  const onsubmit = (event) => {
    event.preventDefault();

    setValues({ ...values, error: false, loading: true });

    triggerotp()
    
    // signin({ phone })
    //   .then((data) => {
    //     console.log("mydata", data);
    //     if (data.error) {
    //       setValues({
    //         ...values,
    //         error: data.error,
    //         success: false,
    //       });
    //     } else {
    //       authenticate(data, () => {
    //         console.log("data", data);

    //         window.location.replace("/home");
    //       });
    //     }
    //   })
    //   .catch((error) => console.log("Signed in error" + error));
  };

  const loadingMessage = () => {
    //instead of success message
    return (
      loading && (
        <div className="alert alert-info">
          <h2>Loading...</h2>
        </div>
      )
    );
  };
  const errorMessage = () => {
    return (
      <div className="row">
        <div className="" style={{ display: error ? "" : "none" }}>
          {error}
        </div>
      </div>
    );
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
    window.location.replace("/");
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
                <label className="text-dark">Phone</label>
                <input
                  className="form-control"
                  onChange={handleChange("phone")}
                  value={phone}
                  type="text"
                />
              </div>
              <button onClick={onsubmit} className="btn btn-primary ">
                Submit
              </button>
            </div>
          </Modal.Body>
          <Modal.Footer>
            {errorMessage()}
            {loadingMessage()}
          </Modal.Footer>
        </Modal>
        <Base />
      </motion.div>
    );
  };

  return (
    
    <div title="Sign in Page" description="Login here">
      {otp ? <Otp otp={otp} phone={phone} sign={sign}></Otp> : signinForm()}
    </div>
  );
};

export default Signin;
