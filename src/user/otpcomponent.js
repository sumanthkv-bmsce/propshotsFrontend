import React from "react";
import { Modal, Button } from "react-bootstrap";
import { motion } from "framer-motion";
import Base from "../home/Base.js";
import "../css/base.css";
import { signup } from "../auth/helper.js";
import { authenticate } from "../auth/helper/index";
import { signin } from "../auth/helper";
import axios from 'axios'

var ch;
class Otp extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      otp1: "",
      potp: '',
      min: "",
      sec: "",
      show: true,
      error: "",
      didRedirect: false,
      success: false,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleTimer = this.handleTimer.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleTimer() {}

  handleClick() {

    clearInterval(ch)


    axios({
      method: "GET",
      url: `http://localhost:8000/api/user1/totp-generate`,
      headers: {
        ContentType: "application/json",
      },
    })
      .then((res) => {
        
        this.setState({
          potp: res.data.token,
        })

        console.log("Resended OTP data", res.data);
        const otpp = res.data.token;
        const phonee = this.props.phone;
        const body = { otpp, phonee };
        axios.post("http://localhost:8000/api/user/checkforvalidate", body).then((res) => {
          console.log("Successfully resent otp to user");
          // window.location.replace("/checkotp");
        });
      }).catch((er)=> {
        console.log(er)
      })


    var timer =5*60,
      minutes,
      seconds,

    ch = setInterval(() => {
      minutes = parseInt(timer / 60, 10);
      seconds = parseInt(timer % 60, 10);

      if (minutes === 0 && seconds === 0) {
       
        clearInterval(ch);
      }

      this.setState({
        min: minutes,
      });

      this.setState({
        sec: seconds,
      });

      minutes = minutes < 10 ? "0" + minutes : minutes;
      seconds = seconds < 10 ? "0" + seconds : seconds;

      --timer;
    }, 1000);

    

  }

  componentDidMount() {

    this.setState({
      potp: this.props.otp
    })

    var timer =5*60,
      minutes,
      seconds,
      final = 10;
      ch = setInterval(() => {
      minutes = parseInt(timer / 60, 10);
      seconds = parseInt(timer % 60, 10);

      if (minutes === 0 && seconds === 0) {
        final = 0;
        clearInterval(ch);
      }

      this.setState({
        min: minutes,
      });

      this.setState({
        sec: seconds,
      });

      minutes = minutes < 10 ? "0" + minutes : minutes;
      seconds = seconds < 10 ? "0" + seconds : seconds;

      --timer;
    }, 1000);

    

    // if (final === 0) {
    //   alert("Time exceeded");
    //   window.location = "/";
    // }
  }

  
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

  handleChange(e) {
    this.setState({
      otp1: e.target.value,
    });
  }
  handleClose = () => {
    this.setState({ show: false });
  };
  handleSubmit(e) {
    e.preventDefault();
    if (this.props.name !== undefined) {
      if (this.state.otp1 === this.state.potp) {
        alert("Successfully authethicated");
        var name = this.props.name;
        var email = this.props.email;
        var phone = this.props.phone;
        var lat = this.props.lat;
        var lon = this.props.lon;
        signup({ name, lat, lon, email, phone }) //this signup is from auth/helper
          .then((data) => {
            if (data.error) {
              this.setState({ error: data.error, success: false });
            } else {
              authenticate(data, () => {
                this.setState({
                  didRedirect: true,
                });
                window.location.replace("/home");
              });
            }
          })

          .catch(console.log("error in signup"));
      } else {
        alert("Incorrect otp");
      }
    }

    if (this.state.otp1 === this.state.potp) {
      var phone = this.props.phone;
      alert("Successfully authethicated");


      signin({ phone })
        .then((data) => {
          console.log("mydata", data);
          if (data.error) {
            this.setState({ error: data.error, success: false });
            console.log("state error", this.state.error);
          } else {
            authenticate(data, () => {
              console.log("data", data);

              window.location.replace("/home");
            });
          }
        })
        .catch((error) => console.log("Signed in error" + error));
    } else {
      alert("Incorrect otp");
    }
  }

  pagechange = () => {
    window.location.replace("/home");
  };

  render() {
    return (
      <div>
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
                <h6 className="text-center">Verify Your OTP</h6>
              </Modal.Header>
            </div>
            <Modal.Body className="get">
              <div className="modalbody">
                <form
                  className="otpform"
                  style={{ marginLeft: " 6rem" }}
                  onSubmit={this.handleSubmit}
                >
                  <label style={{ fontWeight: "bold" }} htmlFor="">
                    Enter 4 digit number you got:{" "}
                  </label>
                  <br />
                  <input
                    type="text"
                    name="otp"
                    placeholder="enter otp"
                    onChange={this.handleChange}
                  ></input>
                  <input
                    className="myinput ml-4"
                    type="submit"
                    style={{
                      padding: "0px 20px",
                      borderRadius: "5px",
                      backgroundColor: "#3366ff",
                      color: "#fff",
                    }}
                    value="Submit"
                  ></input>
                  <br></br>
                  
                  {this.state.min + " : " + this.state.sec}
                </form>
                
                <button style={{
                      padding: "0px 20px",
                      borderRadius: "5px",
                      backgroundColor: "#3366ff",
                      color: "#fff",
                    }} onClick={this.handleClick}>Resend OTP</button>
              </div>
            </Modal.Body>
          </Modal>
          <Base />
        </motion.div>
      </div>
    );
  }
}
export default Otp;
