import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import atob from "atob";
import Otp from "./otpcomponent";
import { isAuthenticated } from "../auth/helper/index";
import "../css/base.css";
class BtnOtp extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {
      otp: "",
    };
  }
  componentDidMount() {
    this.handleSubmit();
  }

  handleSubmit() {
    console.log("asda");

    axios({
      method: "GET",
      url: `http://localhost:8000/api/user/totp-generate`,
      headers: {
        ContentType: "application/json",
      },
    })
      .then((res) => {
        console.log(res.data);
        console.log("responde data", res.data);
        this.setState({
          otp: res.data.token,
        });

        const body = `<SmsQueue>
                                <Account>
                                <APIKey>xEfgXwy6qUuvS0xXGuXofg</APIKey>
                                <SenderId>SANKSH</SenderId>
                                <Channel>2</Channel>
                                <DCS>0</DCS>
                                <FlashSms>0</FlashSms>
                                <Route>1</Route>
                                </Account>
                                <Messages><Message>
                                <Number>${parseInt(res.data.phone)}</Number>
                                <Text>Hello ${
                                  res.data.name
                                }. This is the One time password(OTP) for the authentication -----> ${
          res.data.token
        }</Text>
                                <Text></Text>
                                </Message></Messages>
                            </SmsQueue>`;

        var config = {
          headers: {
            "Content-Type": "text/xml",
            "Access-Control-Allow-Origin": "*",
            // " Access-Control-Allow-Methods": "GET,PUT,POST,DELETE",
            "Access-Control-Allow-Credentials": true,
            "Access-Control-Allow-Headers": "Content-Type",
            // "Access-Control-Allow-Headers": "Content-Type",
            "Access-Control-Max-Age": "1728000",
          },
        };

        axios
          .post("https://www.smsgatewayhub.com/api/mt/SendSms", body, config)
          .then((res) => {
            console.log("Success");
          });
      })
      .catch((er) => {
        console.log(er);
      });
  }

  render() {
    const otp = this.state.otp;
    if (otp === "") {
      return (
        <div>
          <button onClick={this.handleSubmit}>Click to generate OTP</button>
        </div>
      );
    } else {
      return (
        <div>
          <Otp otp={this.state.otp}></Otp>
        </div>
      );
    }
  }
}

export default BtnOtp;
