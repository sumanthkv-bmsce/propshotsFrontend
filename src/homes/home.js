import React, { Component, useState, useEffect } from "react";
import dp from "../images/dp.jpg";
import Npmcard from "./Npmcard";
import HeaderAndSideBar from "../user/HeaderAndSideBar";
import { isAuthenticated } from "../auth/helper/index";
import thumbsup from "../images/thumbs-down.png";

import "../css/prop.css";
import "../css/home.css";
import { Link } from "react-router-dom";
import { getProducts, getUser } from "../property/helper/coreapicalls";
import ImageHelper from "../property/helper/ImageHelper";
import Filter from "../home/Filter";
const Home = () => {
  const [products, setProducts] = useState([]);
  const [filters, setFilters] = useState({
    myfilter: [],
  });
  const { myfilter } = filters;
  const [error, setError] = useState(false);
  const [direction, setDirection] = useState({
    dirr: "",
  });
  const { dirr } = direction;

  const [users, setUser] = useState({
    currentuser: {},
    ignore: {},
    ignorelen: Number,
  });
  const { currentuser, ignored, ignorelen } = users;
  // const {
  //   user: { name, email },
  // } = isAuthenticated();
  let count = 0;
  const user = isAuthenticated();
  // console.log("dirr", dirr);

  // console.log(name);
  // console.log("cart", products);
  const loadAllProduct = async () => {
    getProducts().then((data) => {
      if (data?.error) {
        // console.log("error", error);
        setError(data.error);
      } else {
        setProducts(data);
        // console.log("homedata", data);
      }
    });
  };

  const callbackFunction = (childData) => {
    setFilters({ myfilter: childData });
    // console.log("childdata", myfilter);
    // console.log("childdata");
  };
  useEffect(() => {
    getUser().then((data) => {
      if (data?.error) {
        // console.log("error", error);
        setError(data.error);
      } else {
        setUser({
          currentuser: data.shortlisted,
          ignored: data.ignore,
          ignorelen: data.ignore.length,
        });
        // console.log("my user", data);
      }
    });
    loadAllProduct();
    const s = () => {
      user.user.shortlisted.forEach((element) => {});
    };

    // loadProductByCategory();
  }, []);

  const onclickmeth = () => {
    console.log("ayyaaa");
    setDirection({ dirr: "right" });
  };

  return (
    <div>
      <HeaderAndSideBar parentCallback={callbackFunction} />
      <div className="row  offset-5 cardsdata">
        {/* <Filter parentCallback={callbackFunction} /> */}

        {myfilter.length !== 0
          ? myfilter.map((product, index) => {
              if (product.userid !== user.user._id) {
                var flag = 1;
                for (var i = 0; i < currentuser.length; i++) {
                  if (product.uniqueId === currentuser[i].uniqueId) {
                    flag = 0;
                    break;
                  }
                }
                for (i = 0; i < ignorelen; i++) {
                  if (product.uniqueId === ignored[i].uniqueId) {
                    flag = 0;
                    break;
                  }
                }
                if (flag === 1) {
                  return (
                    <div key={index} className="col-4 mb-4">
                      {/* <img
                        src={thumbsup}
                        alt=""
                        // width="60px"
                        style={{ margin: "", cursor: "pointer" }}
                        onClick={onclickmeth}
                      /> */}
                      {/* <ImageHelper product={product} /> */}
                      {/* product typ: {product.PropertyType}
                  product loca {product.location}  */}

                      <Npmcard product={product} />

                      {/* <button onClick={() => onclickmeth()} /> */}
                    </div>
                  );
                }
              }
            })
          : products.map((product, index) => {
              if (product.userid !== user.user._id) {
                var flag = 1;
                for (var i = 0; i < currentuser.length; i++) {
                  if (product.uniqueId === currentuser[i].uniqueId) {
                    flag = 0;
                    break;
                  }
                }
                for (i = 0; i < ignorelen; i++) {
                  if (product.uniqueId === ignored[i].uniqueId) {
                    flag = 0;
                    break;
                  }
                }
                if (flag === 1) {
                  return (
                    <div key={index} className="col-4 mb-4">
                      {/* <ImageHelper product={product} /> */}
                      {/* product typ: {product.PropertyType}
                  product loca {product.location}  */}
                      {/* <img
                        key={index}
                        src={thumbsup}
                        alt=""
                        width="60px"
                        style={{ margin: "", cursor: "pointer" }}
                        onClick={onclickmeth}
                      /> */}
                      <Npmcard product={product} />
                    </div>
                  );
                }
              }
            })}
        {/* <button onClick={() => onclickmeth()} /> */}
      </div>
    </div>
  );
};
export default Home;
