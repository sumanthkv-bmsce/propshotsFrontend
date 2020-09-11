import React, { useState } from "react";
import { Component, useEffect } from "react";

import rupee from "../picimg/rupee.png";
import location from "../picimg/location.png";
import land from "../picimg/land.png";
import TinderCard from "react-tinder-card";
import distanceicon from "../images/distanceicon.png";
import thumbsup from "../images/thumbs-up.png";
import thumbdown from "../images/thumbsdown.png";
import desc from "../images/desc.png";
import image1 from "../picimg/richard.jpg";
import image2 from "../picimg/erlich.jpg";
import image3 from "../picimg/monica.jpg";
import image4 from "../picimg/dinesh.jpg";
import image5 from "../picimg/jared.jpg";
import share from "../images/pngwing.com.png";
import ImageHelper from "../property/helper/ImageHelper";
import { getProducts } from "../property/helper/coreapicalls";
import { isAuthenticated } from "../auth/helper/index";
import "../css/Card.css";
import { addItemToCart, addItemToignore } from "../property/helper/cartHelper";
import axios from "axios";
import HaversineGeolocation from "haversine-geolocation";

const db = [
  {
    name: "Richard Hendricks",
    url: image1,
  },
  {
    name: "Erlich Bachman",
    url: image2,
  },
  {
    name: "Monica Hall",
    url: image3,
  },
  {
    name: "Jared Dunn",
    url: image4,
  },
  {
    name: "Dinesh Chugtai",
    url: image5,
  },
];

const Npmcard = ({ product }) => {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(false);
  const [redirect, setRedirect] = useState(false);
  const [shortlisted, setshortlisted] = useState([]);
  const [count, setCount] = useState({
    countval: 0,
  });
  let countt = -1;
  // const {
  //   user: { name, email },
  // } = isAuthenticated();
  const user = isAuthenticated();
  const { countval } = count;
  // console.log("npmard ", dirr);

  const loadAllProduct = () => {
    // console.log("sssss");

    getProducts().then((data) => {
      if (data?.error) {
        console.log("error", error);
        setError(data.error);
      } else {
        setProducts(data);
        // console.log("homedata", data);
      }
    });
  };

  let lat1 = product.lat;
  let long1 = product.lng;
  let lat2 = user.user.lat;
  let long2 = user.user.lon;

  const points = [
    {
      latitude: lat1,
      longitude: long1,
    },
    {
      latitude: lat2,
      longitude: long2,
    },
  ];
  const finaldis = HaversineGeolocation.getDistanceBetween(
    points[0],
    points[1]
  );
  const distance = Math.round(finaldis);
  // const dist = rounded - finaldis;
  // console.log("final ", finaldis);
  // console.log("dist ", dist);

  useEffect(() => {
    loadAllProduct();
    // console.log("mulat", user.user.lat);
    // getDistance();
    // console.log("...... ", user.user.shortlisted);
  }, []);

  const settingcount = () => {
    // setCount(count + 1);
    countt = countt + 1;
  };
  const characters = db;
  // console.log("npmpr", product);

  const [lastDirection, setLastDirection] = useState();

  window.onkeydown = function (e) {
    var x = e.which;
    if (x === 39) {
      swiped();
      // console.log("x39");
    }

    // console.log("yser", user);
    // console.log("mmmm", x);
  };

  const swiped = (direction, nameToDelete) => {
    const user = isAuthenticated();
    // console.log("kkkkkkkkkkkkk", user);

    console.log("removing: " + nameToDelete);
    setLastDirection(direction);

    if (direction === "right") {
      const user = isAuthenticated();
      const {
        user: { _id },
      } = isAuthenticated();

      addItemToCart(product._id, _id, user, product, () =>
        setRedirect(false)
      ).then((data) => {
        // console.log("syapa1", data);

        setshortlisted(data);
        isAuthenticated();
        // console.log("syaapa", shortlisted);
      });
      axios({
        method: "GET",
        url: `http://localhost:8000/api/user/${_id}/myproperty`,
        headers: {
          ContentType: "application/json",
        },
      }).then((res) => {
        // console.log("res.data", res.data);
      });

      // window.alert("Property shortlisted");
      window.location.reload();
    }

    if (direction === "left") {
      const user = isAuthenticated();
      const {
        user: { _id },
      } = isAuthenticated();

      addItemToignore(product._id, _id, user, product, () =>
        setRedirect(false)
      ).then((data) => {
        console.log("syapa1", data);

        setshortlisted(data);
        isAuthenticated();
        console.log("syaapa", shortlisted);
      });

      // window.alert("Property Ignored");
      window.location.reload();
    }
  };
  // if (dirr === "right") {
  //   swiped(dirr, product._id);
  //   dirr = "";
  // }
  // console.log("swiped to", lastDirection);

  const outOfFrame = (name) => {
    console.log(name + " left the screen!");
  };
  const handleClick = () => {
    var clck =
      // " Hey!! Here you can find the property . Check this out.. " +
      // https://www.propshots.in/
      `https://www.propshots.in/api/${product._id}/viewcard`;
    navigator.clipboard.writeText(clck);
    // window.Clipboard.
    alert("Property Link copied to clipboard");
  };

  return (
    <div>
      <link
        href="https://fonts.googleapis.com/css?family=Damion&display=swap"
        rel="stylesheet"
      />
      <link
        href="https://fonts.googleapis.com/css?family=Alatsi&display=swap"
        rel="stylesheet"
      />
      {/* <h1>React Tinder Card</h1> */}
      <div className="cardsdata">
        <TinderCard
          className="swipe"
          onSwipe={(dir) => swiped(dir, product._id)}
          onCardLeftScreen={() => outOfFrame(product._id)}
          preventSwipe="top"
        >
          <div
            // style={{ backgroundImage: <ImageHelper product={product} /> }}
            className="cards"
          >
            <ImageHelper className="prodimage" product={product} />
            <h3>
              {product.PropertyType} {product.exactType} for
              {product.PropertyFor}
            </h3>
            {user.user.lat ? (
              <h2>
                {/* <img alt="" className="" width="20px" src={distanceicon} /> */}
                {distance} kms away
              </h2>
            ) : (
              ""
            )}

            <h2>
              {/* <img alt="" className="" width="20px" src={rupee} /> */}
              Property Value ₹{" "}
              {product.marketValue.replace(/(\d)(?=(\d\d)+\d$)/g, "$1,")}
            </h2>
            <h2>
              {/* <img alt="" className="ml-1" width="10px" src={location} />{" "} */}
              Discount Offered{" "}
              <span style={{ color: "#ff3399", fontSize: "16px" }}>
                {product.discountPer}%
              </span>
            </h2>
            <h2>
              {/* <img alt="" className="ml-1 mr-2" width="10px" src={land} /> */}
              Property Area{" "}
              {product.plotArea
                .toString()
                .replace(/(\d)(?=(\d\d)+\d$)/g, "$1,")}{" "}
              {product.plotUnit}
            </h2>

            <h2>
              <img alt="" className="ml-1" width="15px" src={location} />{" "}
              {product.address}
            </h2>

            {/* <h2>{product.uniqueId}</h2> */}
            <h2>
              {/* <img alt="" className="ml-1" width="10px" src={desc} />{" "} */}
              {product.description}
            </h2>
            {/* <button onClick={swiped("right", product.id)} /> */}

            <div
              className="row "
              style={{ position: "absolute", bottom: "0px" }}
            >
              <div className="col-md-4">
                <img
                  style={{ margin: "0px 26px ", cursor: "pointer" }}
                  width="40px"
                  onClick={(dir) => swiped("left", product._id)}
                  src={thumbdown}
                />
                <h6
                  className="ml-4"
                  style={{ color: "#5c5c5c", fontSize: "15px" }}
                >
                  Ignore
                </h6>
              </div>
              <div className="col-md-4">
                <img
                  style={{ margin: "9px 31px ", cursor: "pointer" }}
                  width="20px"
                  onClick={handleClick}
                  src={share}
                />
                <h6
                  className="ml-4"
                  style={{ color: "#5c5c5c", fontSize: "15px" }}
                >
                  Share
                </h6>
              </div>
              <div className="col-md-4">
                <img
                  style={{ margin: "0px 45px ", cursor: "pointer" }}
                  width="40px"
                  onClick={(dir) => swiped("right", product._id)}
                  src={thumbsup}
                />
                <h6
                  style={{
                    color: "#5c5c5c",
                    fontSize: "15px",
                    marginLeft: "38px",
                  }}
                >
                  Shortlist
                </h6>
              </div>
            </div>
          </div>
        </TinderCard>
      </div>

      {/* {lastDirection ? (
        <h2 className="infoText">You swiped {lastDirection}</h2>
      ) : (
        <h2 className="infoText"></h2>
      )} */}
    </div>
  );
};

export default Npmcard;
