import React, { Component } from "react";
import dp from "../images/dp.jpg";
// import "../css/prop.css";
import "../css/sidebar.css";
import { Link, Redirect } from "react-router-dom";
import SideNav, { MenuIcon } from "react-simple-sidenav";
import { signout, isAuthenticated } from "../auth/helper/index";
import { loadCart } from "../property/helper/cartHelper";
// import { getalldata } from "../auth/helper";
import { getUser } from "../property/helper/coreapicalls";
import Filter from "../home/Filter";
import Pdf from "../pdf/Terms of use.pdf";
import privacypdf from "../pdf/Privacy Policy propshots.pdf";
class HeaderAndSideBar extends Component {
  state = {
    shrtlistedLength: "",
    myProperty: "",
    userss: "",
    shortlen: "",
    myfilter: [],
  };
  componentDidMount() {
    const {
      user: { name, email, shortlisted, myProperty },
    } = isAuthenticated();
    // console.log("shoertlisted", shortlisted.length);
    // this.setState({
    //   shrtlistedLength: shortlisted.length,
    //   myProperty: myProperty.length,
    // });

    getUser().then((data) => {
      if (data?.error) {
        this.setState({ error: data.error });
      } else {
        this.setState({ userss: data });
        // this.setState({ shortlen: data.length });

        // console.log("my all users", data.length);
      }
    });

    // getalldata(user.phone);
  }

  sidehover = () => {
    var dropdown = document.getElementsByClassName("dropdown-btn");
    var i;

    for (i = 0; i < dropdown.length; i++) {
      dropdown[i].addEventListener("click", function () {
        this.classList.toggle("active");
        var dropdownContent = this.nextElementSibling;
        if (dropdownContent.style.display === "block") {
          dropdownContent.style.display = "none";
        } else {
          dropdownContent.style.display = "block";
        }
      });
    }
  };
  state = {
    showNav: false,
  };

  openNav = () => {
    // console.log("cliked");
    document.getElementById("mySidenav").style.width = "250px";
  };
  openNav2 = () => {
    // console.log("cliked");
    document.getElementById("mySidenav2").style.width = "250px";
  };

  /* Set the width of the side navigation to 0 */
  closeNav = () => {
    document.getElementById("mySidenav").style.width = "0";
  };
  closeNav2 = () => {
    document.getElementById("mySidenav2").style.width = "0";
  };
  callbackFunction = (childData) => {
    this.setState({ myfilter: childData });
    this.props.parentCallback(childData);
  };

  render() {
    const user = isAuthenticated();
    const {
      user: { name, email, shortlisted },
    } = isAuthenticated();

    // console.log("woho", shortlisted);
    // console.log("mmmmm", this.state.userss);

    return (
      <div>
        <div class="sidenav" id="">
          <button onClick={this.openNav} class="dropdown-btn">
            <i class="fa fa-bars"></i>
            {name}
          </button>

          {/* <div class="dropdown-container">
            <Link to="/home/edit-profile">
              Edit Profile
              <i class="fa fa-user pl-3" aria-hidden="true"></i>
            </Link>

            <Link
              onClick={() => {
                signout(() => {
                  window.location.replace("/");
                });
              }}
            >
              Logout
              <i class="fa fa-sign-out pl-3" aria-hidden="true"></i>
            </Link>
          </div> */}

          <Link to="/home">
            Home
            {/* <i class="fas fa-home"></i> */}
          </Link>
          <Link to="/home/shortlisted">
            Shortlisted Property <i class="fas fa-arrow-right"></i>
            {this.state.shortlen}
          </Link>
          <Link to="/home/myproperty">
            My Property <i class="fas fa-arrow-right"></i>
            {this.state.myProperty}
          </Link>
          <Link onClick={this.openNav2}>
            Filters <i class="fas fa-arrow-right"></i>
            {this.state.myProperty}
          </Link>

          <div className="bottom-Links">
            <div className="postproperty " style={{ marginTop: "-70px" }}>
              <h2>
                <Link
                  style={{ color: "#3366ff !important" }}
                  className="text-dark"
                  to="/home/postproperty"
                >
                  Post Property
                </Link>
                <div className="last">
                  <Link to="/home/contactus">
                    <p
                      style={{
                        width: "92px",
                        margin: "5px 13px",
                        borderBottom: "1px solid #fff",
                      }}
                      className="text-white"
                    >
                      Contact Us
                    </p>
                  </Link>
                  <div className="row">
                    <Link to="/home/contactus">
                      <p
                        style={{
                          width: "39px",
                          margin: "0px 56px",
                          borderBottom: "1px solid #fff",
                        }}
                        className="text-white"
                      >
                        Blog
                      </p>
                    </Link>
                  </div>
                  <div className="row">
                    <div className="col-md-6">
                      <Link
                        style={{
                          position: "absolute",
                          fontSize: "15px",
                          color: "#fff",
                          padding: "0px",

                          left: " -20px",
                        }}
                        to={Pdf}
                        target="_blank"
                      >
                        <div className="text-white">Term of Use</div>
                      </Link>
                    </div>
                    <div className="col-md-6">
                      <Link
                        style={{
                          fontSize: "14px",
                          fontWeight: "bold",
                          position: "absolute",
                          left: "1.5rem",
                          color: "#fff",
                          padding: "0px",
                        }}
                        to={privacypdf}
                        target="_blank"
                      >
                        <div className="text-white"> Privacy Policy</div>
                      </Link>
                    </div>
                  </div>
                </div>
              </h2>
            </div>
          </div>
        </div>
        <div
          id="mySidenav"
          // style={{ display: "block !mportant" }}
          className="sidenavv"
        >
          <Link className="p-3">
            <span
              // href="javascript:void(0)"
              className="closebtn  ml-4"
              onClick={this.closeNav}
            >
              &times;
            </span>
          </Link>
          <Link to="/home/edit-profile">
            Edit Profile
            <i class="fa fa-user pl-3" aria-hidden="true"></i>
          </Link>

          <Link
            onClick={() => {
              signout(() => {
                window.location.replace("/");
              });
            }}
          >
            Logout
            <i class="fa fa-sign-out pl-3" aria-hidden="true"></i>
          </Link>
        </div>
        <div
          id="mySidenav2"
          // style={{ display: "block !mportant" }}
          className="sidenavv"
          style={{ background: "#495a5a !important" }}
        >
          <Link className="p-3">
            <span
              // href="javascript:void(0)"
              className="closebtn  ml-4"
              onClick={this.closeNav2}
            >
              &times;
            </span>
          </Link>
          <Link to="/home/edit-profile">Filters</Link>
          <Filter parentCallback={this.callbackFunction} />
        </div>
      </div>
    );
  }
}
export default HeaderAndSideBar;
