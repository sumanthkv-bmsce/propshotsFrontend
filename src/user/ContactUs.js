import React, { Component } from "react";
import dp from "../images/dp.jpg";
import HeaderAndSideBar from "../user/HeaderAndSideBar";
import contactimg from "../images/contact-us.jpg";
import "../css/prop.css";
import "../css/contact.css";
import "../css/home.css";
import { Link } from "react-router-dom";
import axios from "axios";
import phoneimg from "../picimg/Artboard 1ins.png";

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      name: "",
      mobile: "",
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();

    axios({
      method: "POST",
      url: `http://localhost:8000/api/contact/sendsms`,
      headers: {
        contentType: "application/json",
      },
      data: this.state,
    })
      .then((res) => {
        window.location = "/home";
      })
      .catch((er) => {
        console.log(er);
      });
  }
  handleChange(evt, field) {
    if (field === "name") {
      this.setState({
        name: evt.target.value,
      });
    }

    if (field === "email") {
      this.setState({
        email: evt.target.value,
      });
    }

    if (field === "mobile") {
      this.setState({
        mobile: evt.target.value,
      });
    }
  }

  render() {
    return (
      <div>
        <HeaderAndSideBar />
        <div className="container">
          <div className="row">
            <div className="col-md-8 ">
              <div className="sometext">
                <h3>Write to us or call us to know more</h3>
                <h3>9811715707</h3>
                <img src={phoneimg} width="400px" />
                {/* <h3>
                  abcd xyz jksiu hstdg bckshj asdfg mloiuyhs njaysteh ABC
                  504/Xyz Road India
                </h3> */}
              </div>
            </div>
            <div className="col-md-4">
              <div className="contactform">
                <h1>Want us to call you back</h1>
                <form onSubmit={this.handleSubmit}>
                  <div class="form-group">
                    <label for="exampleInputEmail1">Name</label>
                    <input
                      onChange={(evt) => this.handleChange(evt, "name")}
                      type="text"
                      class="form-control"
                      id="exampleInputEmail1"
                      aria-describedby="emailHelp"
                      placeholder="Enter name"
                    />
                    <small id="emailHelp" class="form-text text-muted">
                      We'll never share your name with anyone else.
                    </small>
                  </div>
                  <div class="form-group">
                    <label for="exampleInputEmail1">Email address</label>
                    <input
                      onChange={(evt) => this.handleChange(evt, "email")}
                      type="email"
                      class="form-control"
                      id="exampleInputEmail1"
                      aria-describedby="emailHelp"
                      placeholder="Enter email"
                    />
                    <small id="emailHelp" class="form-text text-muted">
                      We'll never share your email with anyone else.
                    </small>
                  </div>
                  <div class="form-group">
                    <label for="exampleInputEmail1">Mobile Number</label>
                    <input
                      onChange={(evt) => this.handleChange(evt, "mobile")}
                      type="text"
                      class="form-control"
                      id="exampleInputEmail1"
                      aria-describedby="emailHelp"
                      placeholder="Enter Mobile"
                    />
                    <small id="emailHelp" class="form-text text-muted">
                      We'll never share your Mobile with anyone else.
                    </small>
                  </div>

                  <button type="submit" name="send" class="btn btn-primary">
                    Submit
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Home;
