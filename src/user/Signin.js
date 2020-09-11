import React, { useState } from "react";
import { Link, Redirect } from "react-router-dom";

import { signin } from "../auth/helper";
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

import { isAuthenticated, authenticate } from "../auth/helper/index";

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
  const { user } = isAuthenticated();

  const handleChange = (name) => (event) => {
    setValues({ ...values, error: false, [name]: event.target.value });
  };

  const onsubmit = (event) => {
    event.preventDefault();
    setValues({ ...values, error: false, loading: true });
    signin({ email, name, phone })
      .then((data) => {
        if (data.error) {
          setValues({ ...values, error: data.error, loading: false });
        } else {
          console.log(data.token);
          //calbakc because of nect in authenticate
          authenticate(data, () => {
            console.log("data", data);
            setValues({
              ...values,
              didRedirect: true,
            });
          });
          setValues({
            ...values,
            name: "",
            phone: "",
            email: "",

            loading: false,
            didRedirect: true,
          });
        }
      })
      .catch((error) => console.log("Signed in error" + error));
  };

  const performRedirect = () => {
    if (didRedirect) {
      // return <Redirect to="/home" />;
    } else if (isAuthenticated()) {
      return <Redirect to="/" />;
    }
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
        <div className="col-md-10"></div>
        <div className="col-md-2 text-left">
          <div
            className="alert alert-danger"
            style={{ display: error ? "" : "none" }}
          >
            {error}
          </div>
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
              {/* <h6 className="text-center">Sign In</h6> */}
            </Modal.Header>
          </div>
          <Modal.Body className="get">
            <h2>Login</h2>
            <p>Its how you get the most out of Propshots. Oh and its free.</p>
            {/* <div className="cardbutton">
              <h3>
                <img src={google} />
                Google
              </h3>
            </div>
            <div className="cardbutton">
              <h3>
                <img src={fb} />
                Facebook
              </h3>
            </div> */}
            <div className="cardbutton">
              <h3>
                <img src={phoneimg} width="20px" />
                <Link to="/mobilelogin2" className="links">
                  Mobile Number
                </Link>
              </h3>
            </div>
            <div className="linediv"></div>
            <h2>GET THE APP</h2>
            <div className="row appimage">
              <div className="col-md-6">
                <img src={gplay} width="180px" />
              </div>
              <div className="col-md-6">
                <img src={iosplay} width="180px" />
              </div>
            </div>
          </Modal.Body>
          <Modal.Footer>{errorMessage()}</Modal.Footer>
        </Modal>
        <Base />
      </motion.div>
    );
  };

  return (
    <div title="Sign in Page" description="Login here">
      {loadingMessage()}
      {errorMessage()}
      {signinForm()}
      {performRedirect()}
    </div>
  );
};

export default Signin;
