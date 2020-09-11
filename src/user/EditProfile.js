import React from "react";
import atob from "atob";
import axios from "axios";
import HeaderAndSideBar from "./HeaderAndSideBar";
import { isAuthenticated } from "../auth/helper/index";
import "../css/editProfile.css";
class Update extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      email: "",
      uid: "",
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(evt, field) {
    this.setState({ [field]: evt.target.value });
  }

  componentDidMount() {
    const user = isAuthenticated();
    const uidd = user.user._id;
    this.setState({ uid: uidd });
    // const token = user.user.token;
    // const uid = user.user._id;
  }
  handleSubmit(e) {
    e.preventDefault();

    axios({
      method: "POST",
      url: `/api/userupdate/${this.state.uid}`,
      data: this.state,
      headers: {
        contentType: "application/json",
      },
    })
      .then((resp) => {
        console.log(resp);
      })
      .catch((er) => {
        console.log(er);
      });
  }
  render() {
    return (
      <div>
        <HeaderAndSideBar />
        <div className="container">
          <div className="row">
            <div className="col-md-6 offset-4 ">
              <div className="edit-form">
                <h1 className="text-dark">Edit your profile here!</h1>
                <form onSubmit={this.handleSubmit}>
                  <div className="form-group">
                    <label for="exampleInputEmail1" className="text-dark">
                      Name
                    </label>
                    <input
                      type="text"
                      value={this.state.name}
                      onChange={(event) => this.handleChange(event, "name")}
                      className="form-control"
                      id="exampleInputEmail1"
                      aria-describedby="emailHelp"
                      placeholder="Enter name"
                    />
                  </div>
                  <div className="form-group">
                    <label for="exampleInputEmail1" className="text-dark">
                      Email address
                    </label>
                    <input
                      value={this.state.email}
                      onChange={(event) => this.handleChange(event, "email")}
                      type="email"
                      className="form-control"
                      id="exampleInputEmail1"
                      aria-describedby="emailHelp"
                      placeholder="Enter email"
                    />
                  </div>
                  {/* <div className="form-group">
                    <label for="exampleInputEmail1">Mobile Number</label>
                    <input
                      type="text"
                      className="form-control"
                      id="exampleInputEmail1"
                      aria-describedby="emailHelp"
                      placeholder="Enter Mobile"
                    />
                  </div> */}
                  <button type="submit" value="update">
                    Update
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
export default Update;
