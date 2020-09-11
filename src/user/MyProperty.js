import React, { Component } from "react";
import dp from "../images/dp.jpg";
// import Npmcard from "../homes/Npmcard";
import HeaderAndSideBar from "../user/HeaderAndSideBar";
import "../css/style.css";
// import building from "../images/pexels-juhasz-imre-409842.jpg";
// import { Link } from "react-router-dom";
// import { getmyproduct } from "../property/helper/coreapicalls";
import { isAuthenticated } from "../auth/helper/index";
import ImageHelper from "../property/helper/ImageHelper";
import { Link } from 'react-router-dom'
import { getProducts } from "../property/helper/coreapicalls";
import axios from "axios";

class Home extends Component {
  state = {
    products: [],
    error: "",
    count: [],
  };
  user = isAuthenticated();

  componentDidMount() {
    const products = this.user.user.myProperty;
    this.setState({
      products: products,
    });
    getProducts().then((data) => {
      if (data?.error) {
        this.setState({ error: data.error });
      } else {
        this.setState({ products: data });
        // console.log("homedata", data);
      }
    });

    
    axios({
      method: "GET",
      url: `http://localhost:8000/api/user/${this.user.user._id}/myproperty`,
      headers: {
        ContentType: "application/json",
      },
    }).then((res) => {
      this.setState({ count: res.data });
      // console.log("res.data", res.data);
      // console.log("res.data", this.state.count.length);
    });
  }

  render() {
    var c = 0;
    // console.log("my property hiney", JSON.parse(this.state.count));
    if (this.state.count.length > 0) {
      return (
        <div>
          <HeaderAndSideBar />
          <div className=" mb-2 offset-5 ml-10">
            <div className=" headings  ">
              <h2>My Properties</h2>
            </div>
          </div>
          <div className=" ">
            {this.state.products.map((product, index) => {
              var date = new Date(product.createdAt).toDateString();
              if (product.userid === this.user.user._id) {
                return (
                  <div className="prop">
                    <div
                      className="propimage"
                      style={{ marginLeft: "4rem", height: "165px" }}
                    >
                      <ImageHelper
                        product={product}
                        style={{ width: "100px" }}
                      />
                    </div>
                    <div className="proptext">
                      <h2>{date}</h2>
                      
                      <h2>{product.location}</h2>

                      <Link to={{
                        pathname:"/home/myproperty/view",
                        val: {
                          product
                        }
                      }}>
                      <p className="mb-3 offset-5 ml-10" style={{"position":"relative","left":"-86px","fontSize":"22px"}}>{product.uniqueId}</p>
                    </Link>

                      <h2 key={index}>
                        Shortlisted by {this.state.count[c++].count} people
                      </h2>

                      
                      
                    </div>
                  </div>
                );
              }
            })}
          </div>
        </div>
      );
    } else {
      return (
        <div>
          <HeaderAndSideBar />
          <div className=" headings  " style={{ margin: "2rem 40rem" }}>
            <h2>My Properties</h2>
          </div>
          <div className=" headings " style={{ margin: "9rem 35rem" }}>
            <h3>Post your first property today!</h3>
          </div>
        </div>
      );
    }
  }
}
export default Home;
