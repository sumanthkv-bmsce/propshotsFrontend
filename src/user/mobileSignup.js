import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { signup } from "../auth/helper.js";
import style from "../css/style.css";
import logo from "../img/register.svg";
import Base from "../home/Base.js";
import { Modal, Button } from "react-bootstrap";
import { motion } from "framer-motion";
import { isAuthenticated, authenticate } from "../auth/helper/index";
import axios from "axios";
import Otp from "./otpcomponent";

const Signup = () => {
  const [values, setValues] = useState({
    name: "",
    email: "",
    phone: "",
    lat: "",
    lon: "",
    error: "",

    success: false,
  });
  const [show, setShow] = useState(true);
  const [myotp, setMyotp] = useState({
    otp: "",
  });
  const { otp } = myotp;

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const { name, lon, lat, phone, email, error, success } = values; //destructure

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

  const triggerotp = () => {
    console.log("asda");

    axios({
      method: "GET",
      url: `http://localhost:8000/api/user1/totp-generate`,
      headers: {
        ContentType: "application/json",
      },
    })
      .then((res) => {
        console.log(res.data);
        console.log("responde data", res.data);
        setMyotp({
          otp: res.data.token,
        });
        const otpp = res.data.token;
        const username = name;
        const phonee = phone;
        const body = { otpp, username, phonee };

        axios.post("http://localhost:8000/api/user/checkforvalidate", body).then((res) => {
          console.log("Success", res);
          // window.location.replace("/checkotp");
        });

        // const body = `<SmsQueue>
        //                         <Account>
        //                         <APIKey>xEfgXwy6qUuvS0xXGuXofg</APIKey>
        //                         <SenderId>SANKSH</SenderId>
        //                         <Channel>2</Channel>
        //                         <DCS>0</DCS>
        //                         <FlashSms>0</FlashSms>
        //                         <Route>1</Route>
        //                         </Account>
        //                         <Messages><Message>
        //                         <Number>${parseInt(phone)}</Number>
        //                         <Text>Hello ${name}. This is the One time password(OTP) for the authentication -----> ${
        //   res.data.token
        // }</Text>
        //                         <Text></Text>
        //                         </Message></Messages>
        //                     </SmsQueue>`;

        // var config = {
        //   headers: {
        //     "Content-Type": "text/xml",
        //     "Access-Control-Allow-Origin": "*",
        //     // " Access-Control-Allow-Methods": "GET,PUT,POST,DELETE",
        //     "Access-Control-Allow-Credentials": true,
        //     "Access-Control-Allow-Headers": "Content-Type",
        //     // "Access-Control-Allow-Headers": "Content-Type",
        //     "Access-Control-Max-Age": "1728000",
        //   },
        // };

        // axios
        //   .post("https://www.smsgatewayhub.com/api/mt/SendSms", body, config)
        //   .then((res) => {
        //     console.log("Success", res.data.token);
        //     // window.location.replace("/checkotp");
        //   });
      })
      .catch((er) => {
        console.log(er);
      });
  };

  const onSubmit = (event) => {
    event.preventDefault();
    setValues({ ...values, error: false });

    // signup({ name, lat, lon, email, phone }) //this signup is from auth/helper
    //   .then((data) => {
    //     if (data.error) {
    //       setValues({
    //         ...values,
    //         error: data.error,
    //         success: false,
    //       });
    //     } else {
    //       authenticate(data, () => {
    //         setValues({
    //           ...values,
    //           didRedirect: true,
    //         });

    //         window.location.replace("/home");
    //       });
    //     }
    //   })

    //   .catch(console.log("error in signup"));

    triggerotp();

    // signup({ name, lat, lon, email, phone }) //this signup is from auth/helper
    //   .then((data) => {
    //     if (data.error) {
    //       console.log(error);
    //       setValues({ ...values, error: data.error, success: false });
    //     } else {
    //       authenticate(data, () => {
    //         console.log("data", data);
    //         setValues({
    //           ...values,
    //           didRedirect: true,
    //         });
    //       });
    //       setValues({
    //         ...values,
    //         name: "",
    //         email: "",
    //         phone: "",
    //         error: "",
    //         success: true,
    //       });

    //     }
    //   })

    //   .catch(console.log("error in signup"));
  };

  if ("geolocation" in navigator) {
    // console.log(" geolocation is available ");
    navigator.geolocation.getCurrentPosition((position) => {
      let lat = position.coords.latitude;
      let lon = position.coords.longitude;
      setValues({
        lat: lat,
        lon: lon,
      });
      // document.getElementById("loc").textContent = lat;
      // document.getElementById("loc2").textContent = lon;
      // console.log(position);
      // console.log(position.coords.longitude);
    });
  } else {
    // console.log(" geolocation is not available ");
  }

  window.onkeydown = function (e) {
    var x = e.which;
    if (x === 27) {
      pagechange();
      // console.log("x39");
    }

    // console.log("yser", user);
    // console.log("mmmm", x);
  };
  const pagechange = () => {
    window.location.replace("/");
  };
  const signupForm = () => {
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
              <h6 className="headertext">Sign Up</h6>
            </Modal.Header>
          </div>
          <Modal.Body className="get">
            <div className="modalbody">
              <div className="form-group">
                <label className="text-dark">Name</label>
                <input
                  className="form-control"
                  onChange={handleChange("name")}
                  value={name}
                  type="text"
                />
              </div>
              <div className="form-group">
                <label className="text-dark">Email</label>
                <input
                  className="form-control"
                  onChange={handleChange("email")}
                  value={email}
                  type="email"
                />
              </div>
              <div className="form-group">
                <label className="text-dark">Phone</label>
                <input
                  className="form-control"
                  onChange={handleChange("phone")}
                  value={phone}
                  type="text"
                />
              </div>
              <button onClick={onSubmit} className="btn  btn-primary">
                Submit
              </button>
            </div>
          </Modal.Body>
          <Modal.Footer>{errorMessage()}</Modal.Footer>
        </Modal>
        <Base />
      </motion.div>
    );
  };

  const successMessage = () => {
    return (
      <div className="row">
        <div
          className="alert alert-success"
          style={{ display: success ? "" : "none" }}
        >
          New Account is created succesfully. Please{" "}
          <Link to="/signin">Login here</Link>
        </div>
      </div>
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

  return (
    <div title="Sign up Page" description="Register here">
      {otp ? (
        <Otp
          otp={otp}
          name={name}
          email={email}
          phone={phone}
          lat={lat}
          lon={lon}
        ></Otp>
      ) : (
        signupForm()
      )}
    </div>
  );
};

export default Signup;
