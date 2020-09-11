import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getCategories, createProduct } from "./helper/adminapicall";
import axios from "axios";
import Preview from '../property/helper/preview'

import { isAuthenticated } from "../auth/helper/index";
import HeaderAndSideBar from "../user/HeaderAndSideBar";
import "../css/postproperty.css";
import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng,
} from "react-places-autocomplete";

import Order from "../home/Order";
var convertRupeesIntoWords = require("convert-rupees-into-words");

var numberToWords = require("number-to-words");
const user = isAuthenticated();
var fileObj = [];
var fileArray = [];

function loadScript(src) {
  return new Promise((resolve) => {
    const script = document.createElement("script");
    script.src = src;
    script.onload = () => {
      resolve(true);
    };
    script.onerror = () => {
      resolve(false);
    };
    document.body.appendChild(script);
  });
}

const PostProperty = () => {
  // const {flag,setFlag} = useState("")
  const { user, token } = isAuthenticated();
  const [image, setImage] = useState({
    allimgs1: "l",
    allimgs2: [],
  });
  const { allimgs1, allimgs2 } = image;

  

  const [address, setAddress] = useState("");
  const [coordinates, setCoordinates] = useState({
    lat: null,
    lng: null,
  });

  const [name, setName] = useState();
  const [alldata, setAlldata] = useState({
    mystatus: 0,
  });
  const [disablity, setDisability] = useState({
    disable: false,
  });
  const [discount, setDiscout] = useState({
    discountpercent: "",
    discountvalue: "",
  });
  const { discountpercent, discountvalue } = discount;

  const { disable } = disablity;

  const { mystatus } = alldata;

  const { currency, amount, id } = alldata;

  const number2text = (marketValue) => {
    var fraction = Math.round(frac(marketValue) * 100);
    var f_text = "";

    if (fraction > 0) {
      f_text = "and " + convert_number(fraction) + " paisa";
    }

    if (convert_number(marketValue) === "NUMBER OUT OF RANGE!") {
      return convert_number(marketValue);
    }

    return convert_number(marketValue) + " Rupees" + f_text;
  };
  const frac = (f) => {
    return f % 1;
  };
  const convert_number = (number) => {
    if (number < 0 || number > 999999999) {
      return "NUMBER OUT OF RANGE!";
    }
    var Gn = Math.floor(number / 10000000); /* Crore */
    number -= Gn * 10000000;
    var kn = Math.floor(number / 100000); /* lakhs */
    number -= kn * 100000;
    var Hn = Math.floor(number / 1000); /* thousand */
    number -= Hn * 1000;
    var Dn = Math.floor(number / 100); /* Tens (deca) */
    number = number % 100; /* Ones */
    var tn = Math.floor(number / 10);
    var one = Math.floor(number % 10);
    var res = "";
    if (Gn > 0) {
      res += convert_number(Gn) + " Crore";
    }
    if (kn > 0) {
      res += (res === "" ? "" : " ") + convert_number(kn) + " Lakh";
    }
    if (Hn > 0) {
      res += (res === "" ? "" : " ") + convert_number(Hn) + " Thousand";
    }
    if (Dn) {
      res += (res === "" ? "" : " ") + convert_number(Dn) + " Hundred";
    }
    var ones = Array(
      "",
      "One",
      "Two",
      "Three",
      "Four",
      "Five",
      "Six",
      "Seven",
      "Eight",
      "Nine",
      "Ten",
      "Eleven",
      "Twelve",
      "Thirteen",
      "Fourteen",
      "Fifteen",
      "Sixteen",
      "Seventeen",
      "Eighteen",
      "Nineteen"
    );
    var tens = Array(
      "",
      "",
      "Twenty",
      "Thirty",
      "Fourty",
      "Fifty",
      "Sixty",
      "Seventy",
      "Eighty",
      "Ninety"
    );
    if (tn > 0 || one > 0) {
      if (!(res === "")) {
        res += " and ";
      }
      if (tn < 2) {
        res += ones[tn * 10 + one];
      } else {
        res += tens[tn];
        if (one > 0) {
          res += "-" + ones[one];
        }
      }
    }
    if (res === "") {
      res = "Zero";
    }
    return res;
  };
  async function displayRazorPay() {
    // const res = await loadScript(
    //   "https://checkout.razorpay.com/v1/checkout.js"
    // );

    // if (!res) {
    //   alert("RAzerpay failed");
    //   return;
    // }
    // const data = axios({
    //   method: "POST",
    //   url: "http://localhost:8000/api/order",
    // }).then((t) => {
    //   console.log(t.data.currency);

      // setAlldata(t);
    //   console.log("alldata", alldata);

    //   console.log(data.data);
    //   console.log("alldata", t.data.id);

    //   // rzp_live_Gx4uC9Kj0zvSky
    //   const options = {
    //     key: "rzp_live_Gx4uC9Kj0zvSky", // Enter the Key ID generated from the Dashboard

    //     currency: t.data.currency,
    //     amount: t.data.amount.toString(),
    //     order_id: t.data.id,
    //     name: "PropShots",
    //     description: "One-time property listing fee",

    //     handler: function (response) {
    //       if (response.razorpay_payment_id) {
    //         createProduct(
    //           user._id,
    //           // coordinates.lat,
    //           // coordinates.lng,

    //           token,
    //           formData
    //         ).then((data) => {
    //           if (data?.error) {
    //             setValues({ ...values, error: data.error });
    //           } else {
    //             alert("property posted successfully");
    //             window.location.replace("/home/myproperty");
    //           }
    //         });
    //       }

    //       axios({
    //         method: "POST",
    //         url: `http://localhost:8000/api/order/${user._id}/create`,
    //         data: {
    //           userId: user._id,
    //           paymentId: response.razorpay_payment_id,
    //           orderId: response.razorpay_order_id,
    //           paymentSignature: response.razorpay_signature,
    //         },
    //       }).then((res) => {
    //         console.log("orderdata", res);
    //       });

    //       setAlldata({
    //         mystatus: 1,
    //       });
    //       flag = 1;
    //       console.log("first ", mystatus);
    //     },
    //     prefill: {
    //       name,
    //     },
    //   };
    //   var paymentObject = new window.Razorpay(options);
    //   paymentObject.open();
    // });


    createProduct(
      user._id,
      // coordinates.lat,
      // coordinates.lng,

      token,
      formData
    ).then((data) => {
      if (data?.error) {
        setValues({ ...values, error: data.error });
      } else {
        alert("property posted successfully");
        // window.location.replace("/home/myproperty");
      }
    });
  }

  const handleSelect = async (value) => {
    const results = await geocodeByAddress(value);
    const latLng = await getLatLng(results[0]);
    setAddress(value);
    setCoordinates(latLng);
  };

  // console.log("address", address);
  const [values, setValues] = useState({
    PropertyFor: "",
    PropertyType: "",
    subType: "",
    exactType: "",
    location: "",
    plotArea: "",
    plotUnit: "",
    possession: "",
    marketValue: "",
    discountPer: "",
    discountVal: "",
    description: "",
    allimglen: "",
    lat: "",
    lon: "",
    city: "",
    states: "",
    flag: 0,
    getaRedirect: false,
    formData: "",
  });

  const {
    PropertyFor,
    PropertyType,
    subType,
    exactType,
    location,
    plotArea,
    plotUnit,
    possession,
    marketValue,
    discountPer,
    discountVal,
    description,
    allimglen,
    lat,
    lon,
    city,
    states,
    loading,
    error,
    createdProduct,
    getaRedirect,
    formData,
  } = values;

  const preload = () => {
    getCategories().then((data) => {
      // console.log(data);
      if (data?.error) {
        setValues({ ...values, error: data.error });
      } else {
        setValues({ ...values, categories: data, formData: new FormData() });
      }
    });
  };

  useEffect(() => {
    preload();
  }, []);

  const onSubmit = async (event) => {
    event.preventDefault();
    fileArray = []
    // formData.append("myImage", allimgs1);
    for (var i = 0; i < allimgs2.length; i++) {
      formData.append("myImage", allimgs2[i]);
    }
    // console.log("check chek ", allimgs2);
    setValues({ ...values, error: "", loading: true });
    // console.log("lat", coordinates.lat);
    // console.log("lon", coordinates.lng);
    setValues({...values,lat: coordinates.lat,lon: coordinates.lng})

    // console.log("first ", mystatus);

    setValues({...values,flag: 1})
    // await displayRazorPay();

    // console.log("second=>", mystatus);
    // if (flag === 1) {
    // }
  };

  const uploadMultipleFiles = (e) => {
    
      for (var i = 0; i < e.target.files.length; i++) {
          if(fileObj.length<4) {
            fileObj.push(e.target.files[i]);
          }
        
      }
      // console.log("fileobj", fileObj);
      fileArray = [];
  
      for (let i = 0; i < fileObj.length; i++) {
        if(fileArray.length<4) {
          fileArray.push(URL.createObjectURL(fileObj[i]));
        }
        
      }
  
      setImage({
        allimgs2: fileObj,
      });
    
  };

  const handleChange = (name) => (event) => {
    const value = name === "photo" ? event.target.files[0] : event.target.value;

    if (name === "discountVal") {
      const newPercent = (value * 100) / marketValue;
      setDiscout({
        discountpercent: newPercent,
      });
    }
    if (name === "discountPer") {
      const newAmount = (value / 100) * marketValue;
      setDiscout({
        discountvalue: newAmount,
      });
    }

    formData.set(name, value);
    const name2 = "lat";
    const name3 = "lng";
    const allimglength = "allimglen";
    formData.set(name2, coordinates.lat);
    formData.set(name3, coordinates.lng);
    formData.set(allimglength, allimgs2.length);

    // formData.set(name, value2);
    setValues({ ...values, [name]: value });
  };
  const errorMessage = () => {
    return (
      <div className="row offset-7">
        <div className="" style={{ display: error ? "" : "none" }}>
          {error}
        </div>
      </div>
    );
  };

  const successMessage = () => (
    <div
      class="alert offset-2 alert-success mt-3"
      style={{ display: createdProduct ? "" : "none" }}
    >
      <h4>{createdProduct} created successfuly</h4>
    </div>
  );
  // const countWords = (desc) => {
  //   let nWords = desc.value.match(/\s/g).length - 1;
  //   alert(nWords);
  // };

  const createProductForm = () => (
    <div className="offset-3 postform">
      <form onSubmit={onSubmit} encType="multipart/form-data">
        <span className="postheading">
          <h4 className="">Post Property</h4>
        </span>
        <div className="row">
          <div className="form-group">
            Property For
            <select
              onChange={handleChange("PropertyFor")}
              className="form-control"
              placeholder="Category"
              value={PropertyFor}
              required
            >
              <option value="">Select</option>
              <option>Sale</option>
              <option>Rent</option>
            </select>
          </div>

          <div className="form-group rightdrops1">
            Property Type
            <select
              onChange={handleChange("PropertyType")}
              name="PropertyType"
              className="form-control"
              placeholder="PropertyType"
              value={PropertyType}
              required
            >
              <option value="">Select</option>
              <option>Residential</option>
              <option>Commercial</option>
            </select>
          </div>
        </div>
        <div className="row">
          {PropertyType === "Residential" ? (
            <div className="form-group">
              Sub Type
              <select
                onChange={handleChange("subType")}
                name="subType"
                className="form-control"
                placeholder="subType"
                value={subType}
                required
              >
                <option value="">Select</option>
                <option>Apartment/Builder Floor</option>
                <option>Land</option>
                <option>House Villa</option>
                <option>Other</option>
              </select>
            </div>
          ) : null}
          {PropertyType === "Commercial" ? (
            <div className="form-group">
              Sub Type
              <select
                onChange={handleChange("subType")}
                name="subType"
                className="form-control"
                placeholder="subType"
                value={subType}
                required
              >
                <option value="">Select</option>
                <option>Office</option>
                <option>Retail</option>
                <option>Land</option>
                <option>Industry</option>
                <option>Storage</option>
                <option>Storage</option>
                <option>Other</option>
              </select>
            </div>
          ) : null}

          {subType === "Apartment/Builder Floor" ? (
            <div className="form-group rightdrops2">
              Exact Type
              <select
                onChange={handleChange("exactType")}
                name="exactType"
                className="form-control"
                placeholder="exactType"
                width="200px"
                value={exactType}
                required
              >
                <option value="">Select</option>

                <option>Residential Apartment</option>
                <option>Studio Service Apartment</option>
                <option>Independent/builder floor</option>
              </select>
            </div>
          ) : null}
          {subType === "Land" && PropertyType === "Residential" ? (
            <div className="form-group rightdrops2">
              Exact Type
              <select
                onChange={handleChange("exactType")}
                name="exactType"
                className="form-control"
                placeholder="exactType"
                value={exactType}
                required
              >
                <option value="">Select</option>
                <option>Residential Land</option>
                <option>Farm Land</option>
              </select>
            </div>
          ) : null}
          {subType === "House Villa" ? (
            <div className="form-group rightdrops2">
              Exact Type
              <select
                onChange={handleChange("exactType")}
                name="exactType"
                className="form-control"
                placeholder="exactType"
                value={exactType}
                required
              >
                <option value="">Select</option>
                <option>Farm House</option>
                <option>Independent House/Villa</option>
                <option>Society Villa</option>
              </select>
            </div>
          ) : null}
          {subType === "Other" && PropertyType === "Residential" ? (
            <div className="form-group rightdrops2">
              Exact Type
              <textarea rows="4" cols="50" />
            </div>
          ) : null}
          {subType === "Office" ? (
            <div className="form-group rightdrops4">
              Exact Type
              <select
                onChange={handleChange("exactType")}
                name="exactType"
                className="form-control"
                placeholder="exactType"
                value={exactType}
                required
              >
                <option value="">Select</option>
                <option> Commercial Office Space</option>
                <option>Office in IT / Business Park </option>
                <option> Business Centre</option>
                <option>TimeShare</option>
              </select>
            </div>
          ) : null}
          {subType === "Retail" ? (
            <div className="form-group rightdrops4">
              Exact Type
              <select
                onChange={handleChange("exactType")}
                name="exactType"
                className="form-control"
                placeholder="exactType"
                value={exactType}
                required
              >
                <option value="">Select</option>
                <option> Commercial Shops</option>
                <option>Commercial Showrooms</option>
                <option>Space in Retail Mall</option>
              </select>
            </div>
          ) : null}
          {subType === "Land" && PropertyType === "Commercial" ? (
            <div className="form-group rightdrops4">
              Exact Type
              <select
                onChange={handleChange("exactType")}
                name="exactType"
                className="form-control"
                placeholder="exactType"
                value={exactType}
                required
              >
                <option value="">Select</option>
                <option>Commercial/Institutional Land</option>
                <option>Agriculture/Farm Land</option>
                <option>Industrial Land/Plots</option>
              </select>
            </div>
          ) : null}
          {subType === "Industry" ? (
            <div className="form-group rightdrops4">
              Exact Type
              <select
                onChange={handleChange("exactType")}
                name="exactType"
                className="form-control"
                placeholder="exactType"
                value={exactType}
                required
              >
                <option value="">Select</option>
                <option>Factory</option>
                <option>Manufacturing</option>
              </select>
            </div>
          ) : null}
          {subType === "Storage" ? (
            <div className="form-group rightdrops4">
              Exact Type
              <select
                onChange={handleChange("exactType")}
                name="exactType"
                className="form-control"
                placeholder="exactType"
                value={exactType}
                required
              >
                <option value="">Select</option>
                <option>Warehouse</option>
                <option>Coldstorage</option>
              </select>
            </div>
          ) : null}
          {subType === "Hospitality" ? (
            <div className="form-group rightdrops4">
              Exact Type
              <select
                onChange={handleChange("exactType")}
                name="exactType"
                className="form-control"
                placeholder="exactType"
                value={exactType}
                required
              >
                <option value="">Select</option>
                <option>Hotel</option>
                <option>Resort</option>
                <option>Guest House</option>
                <option>Banquet Halls</option>
              </select>
            </div>
          ) : null}
          {subType === "Other" && PropertyType === "Commercial" ? (
            <div className="form-group rightdrops4">
              Exact Type
              <textarea
                onChange={handleChange("exactType")}
                name="exactType"
                className="form-control"
                placeholder="exactType"
                value={exactType}
                required
                rows="4"
                cols="50"
              />
            </div>
          ) : null}
        </div>

        <div className=" places ">
          <div className="ml-0"> Property Details</div>
           <PlacesAutocomplete
            value={address}
            onChange={setAddress}
            onSelect={handleSelect}
            className="pl-3"
            name="address"
          >
            {({
              getInputProps,
              suggestions,
              getSuggestionItemProps,
              loading,
            }) => (
              <div>
                <p onChange={handleChange("lat")}>
                  {/* {" "}
                    Latitude: {coordinates.lat} */}
                </p>
                <p onChange={handleChange("lng")}>
                  {/* Longitude: {coordinates.lng} */}
                </p>

                <input
                  className="pl-3"
                  required
                  onChange={handleChange("address")}
                  onSelect={handleChange("address")}
                  {...getInputProps({
                    placeholder:
                      "Apartment/House/Plot No.,Street Name,Locality, Sector etc.. ",
                  })}
                />

                <div>
                  {loading ? <div>...loading</div> : null}

                  {suggestions.map((suggestion) => {
                    const style = {
                      background: suggestion.active ? "#41b6e6" : "#f3f5f9",
                    };

                    return (
                      <div {...getSuggestionItemProps(suggestion, { style })}>
                        {suggestion.description}
                      </div>
                    );
                  })}
                </div>
              </div>
            )}
          </PlacesAutocomplete> 
          {/* <input
              onChange={handleChange("location")}
              type="text"
              name="location"
              className="form-control"
              placeholder="location"
              value={location}
            /> */}
        </div>
        <div className="row mr-4 ml-3 mt-3">
          City
          <select
            onChange={handleChange("city")}
            name="city"
            className="form-control"
            placeholder="PropertyType"
            value={city}
            required
          >
            <option value=""> Select</option>
            <option> ADILABAD </option>
            <option> AGRA </option>
            <option> AHMEDABAD </option>
            <option> AHMEDNAGAR </option>
            <option> AIZAWL </option>
            <option> AJMER </option>
            <option> AKOLA </option>
            <option> ALAPPUZHA </option>
            <option> ALIGARH </option>
            <option> ALLAHABAD </option>
            <option> ALMORA </option>
            <option> ALWAR </option>
            <option> AMBALA </option>
            <option> AMBEDKARNAGAR </option>
            <option> AMRAVATI </option>
            <option> AMRELI </option>
            <option> AMRITSAR </option>
            <option> ANAND </option>
            <option> ANANTHAPUR </option>
            <option> ANANTHNAG </option>
            <option> ANGUL </option>
            <option> ANUPPUR </option>
            <option> ARARIA </option>
            <option> ARIYALUR </option>
            <option> ARWAL </option>
            <option> AURAIYA </option>
            <option> AURANGABAD </option>
            <option> AURANGABAD(BH) </option>
            <option> AZAMGARH </option>
            <option> BAGALKOT </option>
            <option> BAGESHWAR </option>
            <option> BAGPAT </option>
            <option> BAHRAICH </option>
            <option> BALAGHAT </option>
            <option> BALANGIR </option>
            <option> BALESWAR </option>
            <option> BALLIA </option>
            <option> BALRAMPUR </option>
            <option> BANASKANTHA </option>
            <option> BANDA </option>
            <option> BANDIPUR </option>
            <option> BANGALORE </option>
            <option> BANGALORERURAL </option>
            <option> BANKA </option>
            <option> BANKURA </option>
            <option> BANSWARA </option>
            <option> BARABANKI </option>
            <option> BARAMULLA </option>
            <option> BARAN </option>
            <option> BARDHAMAN </option>
            <option> BAREILLY </option>
            <option> BARGARH </option>
            <option> BARMER </option>
            <option> BARNALA </option>
            <option> BARPETA </option>
            <option> BARWANI </option>
            <option> BASTAR </option>
            <option> BASTI </option>
            <option> BATHINDA </option>
            <option> BEED </option>
            <option> BEGUSARAI </option>
            <option> BELGAUM </option>
            <option> BELLARY </option>
            <option> BETUL </option>
            <option> BHADRAK </option>
            <option> BHAGALPUR </option>
            <option> BHANDARA </option>
            <option> BHARATPUR </option>
            <option> BHARUCH </option>
            <option> BHAVNAGAR </option>
            <option> BHILWARA </option>
            <option> BHIND </option>
            <option> BHIWANI </option>
            <option> BHOJPUR </option>
            <option> BHOPAL </option>
            <option> BIDAR </option>
            <option> BIJAPUR </option>
            <option> BIJAPUR </option>
            <option> BIJNOR </option>
            <option> BIKANER </option>
            <option> BILASPUR </option>
            <option> BILASPUR(HP) </option>
            <option> BIRBHUM </option>
            <option> BISHNUPUR </option>
            <option> BOKARO </option>
            <option> BONGAIGAON </option>
            <option> BOUDH </option>
            <option> BUDAUN </option>
            <option> BUDGAM </option>
            <option> BULANDSHAHR </option>
            <option> BULDHANA </option>
            <option> BUNDI </option>
            <option> BUXAR </option>
            <option> CACHAR </option>
            <option> CENTRALDELHI </option>
            <option> CHAMBA </option>
            <option> CHAMOLI </option>
            <option> CHAMPAWAT </option>
            <option> CHAMPHAI </option>
            <option> CHAMRAJNAGAR </option>
            <option> CHANDAULI </option>
            <option> CHANDEL </option>
            <option> CHANDIGARH </option>
            <option> CHANDRAPUR </option>
            <option> CHANGLANG </option>
            <option> CHATRA </option>
            <option> CHENNAI </option>
            <option> CHHATARPUR </option>
            <option> CHHINDWARA </option>
            <option> CHICKMAGALUR </option>
            <option> CHIKKABALLAPUR </option>
            <option> CHITRADURGA </option>
            <option> CHITRAKOOT </option>
            <option> CHITTOOR </option>
            <option> CHITTORGARH </option>
            <option> CHURACHANDPUR </option>
            <option> CHURU </option>
            <option> COIMBATORE </option>
            <option> COOCHBEHAR </option>
            <option> CUDDALORE </option>
            <option> CUDDAPAH </option>
            <option> CUTTACK </option>
            <option> DADRA&NAGARHAVELI </option>
            <option> DAHOD </option>
            <option> DAKSHINAKANNADA </option>
            <option> DAMAN </option>
            <option> DAMOH </option>
            <option> DANTEWADA </option>
            <option> DARBHANGA </option>
            <option> DARJILING </option>
            <option> DARRANG </option>
            <option> DATIA </option>
            <option> DAUSA </option>
            <option> DAVANGARE </option>
            <option> DEBAGARH </option>
            <option> DEHRADUN </option>
            <option> DEOGHAR </option>
            <option> DEORIA </option>
            <option> DEWAS </option>
            <option> DHALAI </option>
            <option> DHAMTARI </option>
            <option> DHANBAD </option>
            <option> DHAR </option>
            <option> DHARMAPURI </option>
            <option> DHARWARD </option>
            <option> DHEMAJI </option>
            <option> DHENKANAL </option>
            <option> DHOLPUR </option>
            <option> DHUBRI </option>
            <option> DHULE </option>
            <option> DIBANGVALLEY </option>
            <option> DIBRUGARH </option>
            <option> DIMAPUR </option>
            <option> DINDIGUL </option>
            <option> DINDORI </option>
            <option> DIU </option>
            <option> DODA </option>
            <option> DUMKA </option>
            <option> DUNGARPUR </option>
            <option> DURG </option>
            <option> EASTCHAMPARAN </option>
            <option> EASTDELHI </option>
            <option> EASTGAROHILLS </option>
            <option> EASTGODAVARI </option>
            <option> EASTKAMENG </option>
            <option> EASTKHASIHILLS </option>
            <option> EASTMIDNAPORE </option>
            <option> EASTNIMAR </option>
            <option> EASTSIANG </option>
            <option> EASTSIKKIM </option>
            <option> EASTSINGHBHUM </option>
            <option> ERNAKULAM </option>
            <option> ERODE </option>
            <option> ETAH </option>
            <option> ETAWAH </option>
            <option> FAIZABAD </option>
            <option> FARIDABAD </option>
            <option> FARIDKOT </option>
            <option> FARRUKHABAD </option>
            <option> FATEHABAD </option>
            <option> FATEHGARHSAHIB </option>
            <option> FATEHPUR </option>
            <option> FIROZABAD </option>
            <option> FIROZPUR </option>
            <option> Fazilka </option>
            <option> GADAG </option>
            <option> GADCHIROLI </option>
            <option> GAJAPATI </option>
            <option> GANDHINAGAR </option>
            <option> GANGANAGAR </option>
            <option> GANJAM </option>
            <option> GARHWA </option>
            <option> GAUTAMBUDDHANAGAR </option>
            <option> GAYA </option>
            <option> GHAZIABAD </option>
            <option> GHAZIPUR </option>
            <option> GIRIDH </option>
            <option> GOALPARA </option>
            <option> GODDA </option>
            <option> GOLAGHAT </option>
            <option> GONDA </option>
            <option> GONDIA </option>
            <option> GOPALGANJ </option>
            <option> GORAKHPUR </option>
            <option> GULBARGA </option>
            <option> GUMLA </option>
            <option> GUNA </option>
            <option> GUNTUR </option>
            <option> GURDASPUR </option>
            <option> GURGAON </option>
            <option> GWALIOR </option>
            <option> HAILAKANDI </option>
            <option> HAMIRPUR </option>
            <option> HAMIRPUR(HP) </option>
            <option> HANUMANGARH </option>
            <option> HARDA </option>
            <option> HARDOI </option>
            <option> HARIDWAR </option>
            <option> HASSAN </option>
            <option> HATHRAS </option>
            <option> HAVERI </option>
            <option> HAZARIBAG </option>
            <option> HINGOLI </option>
            <option> HISAR </option>
            <option> HOOGHLY </option>
            <option> HOSHANGABAD </option>
            <option> HOSHIARPUR </option>
            <option> HOWRAH </option>
            <option> HYDERABAD </option>
            <option> IDUKKI </option>
            <option> IMPHALEAST </option>
            <option> IMPHALWEST </option>
            <option> INDORE </option>
            <option> JABALPUR </option>
            <option> JAGATSINGHAPUR </option>
            <option> JAINTIAHILLS </option>
            <option> JAIPUR </option>
            <option> JAISALMER </option>
            <option> JAJAPUR </option>
            <option> JALANDHAR </option>
            <option> JALAUN </option>
            <option> JALGAON </option>
            <option> JALNA </option>
            <option> JALOR </option>
            <option> JALPAIGURI </option>
            <option> JAMMU </option>
            <option> JAMNAGAR </option>
            <option> JAMTARA </option>
            <option> JAMUI </option>
            <option> JANJGIR-CHAMPA </option>
            <option> JASHPUR </option>
            <option> JAUNPUR </option>
            <option> JEHANABAD </option>
            <option> JHABUA </option>
            <option> JHAJJAR </option>
            <option> JHALAWAR </option>
            <option> JHANSI </option>
            <option> JHARSUGUDA </option>
            <option> JHUJHUNU </option>
            <option> JIND </option>
            <option> JODHPUR </option>
            <option> JORHAT </option>
            <option> JUNAGADH </option>
            <option> JYOTIBAPHULENAGAR </option>
            <option> K.V.RANGAREDDY </option>
            <option> KACHCHH </option>
            <option> KAIMUR(BHABUA) </option>
            <option> KAITHAL </option>
            <option> KALAHANDI </option>
            <option> KAMRUP </option>
            <option> KANCHIPURAM </option>
            <option> KANDHAMAL </option>
            <option> KANGRA </option>
            <option> KANKER </option>
            <option> KANNAUJ </option>
            <option> KANNUR </option>
            <option> KANPURDEHAT </option>
            <option> KANPURNAGAR </option>
            <option> KANYAKUMARI </option>
            <option> KAPURTHALA </option>
            <option> KARAIKAL </option>
            <option> KARAULI </option>
            <option> KARBIANGLONG </option>
            <option> KARGIL </option>
            <option> KARIMGANJ </option>
            <option> KARIMNAGAR </option>
            <option> KARNAL </option>
            <option> KARUR </option>
            <option> KASARGOD </option>
            <option> KATHUA </option>
            <option> KATIHAR </option>
            <option> KATNI </option>
            <option> KAUSHAMBI </option>
            <option> KAWARDHA </option>
            <option> KENDRAPARA </option>
            <option> KENDUJHAR </option>
            <option> KHAGARIA </option>
            <option> KHAMMAM </option>
            <option> KHEDA </option>
            <option> KHERI </option>
            <option> KHORDA </option>
            <option> KHUNTI </option>
            <option> KINNAUR </option>
            <option> KIPHIRE </option>
            <option> KISHANGANJ </option>
            <option> KODAGU </option>
            <option> KODERMA </option>
            <option> KOHIMA </option>
            <option> KOKRAJHAR </option>
            <option> KOLAR </option>
            <option> KOLASIB </option>
            <option> KOLHAPUR </option>
            <option> KOLKATA </option>
            <option> KOLLAM </option>
            <option> KOPPAL </option>
            <option> KORAPUT </option>
            <option> KORBA </option>
            <option> KORIYA </option>
            <option> KOTA </option>
            <option> KOTTAYAM </option>
            <option> KOZHIKODE </option>
            <option> KRISHNA </option>
            <option> KRISHNAGIRI </option>
            <option> KULLU </option>
            <option> KUPWARA </option>
            <option> KURNOOL </option>
            <option> KURUKSHETRA </option>
            <option> KURUNGKUMEY </option>
            <option> KUSHINAGAR </option>
            <option> LAHUL&SPITI </option>
            <option> LAKHIMPUR </option>
            <option> LAKHISARAI </option>
            <option> LAKSHADWEEP </option>
            <option> LALITPUR </option>
            <option> LATEHAR </option>
            <option> LATUR </option>
            <option> LAWNGTLAI </option>
            <option> LEH </option>
            <option> LOHARDAGA </option>
            <option> LOHIT </option>
            <option> LONGLENG </option>
            <option> LOWERSUBANSIRI </option>
            <option> LUCKNOW </option>
            <option> LUDHIANA </option>
            <option> LUNGLEI </option>
            <option> MADHEPURA </option>
            <option> MADHUBANI </option>
            <option> MADURAI </option>
            <option> MAHABUBNAGAR </option>
            <option> MAHARAJGANJ </option>
            <option> MAHASAMUND </option>
            <option> MAHENDRAGARH </option>
            <option> MAHESANA </option>
            <option> MAHOBA </option>
            <option> MAINPURI </option>
            <option> MALAPPURAM </option>
            <option> MALDA </option>
            <option> MALKANGIRI </option>
            <option> MAMMIT </option>
            <option> MANDI </option>
            <option> MANDLA </option>
            <option> MANDSAUR </option>
            <option> MANDYA </option>
            <option> MANSA </option>
            <option> MARIGAON </option>
            <option> MATHURA </option>
            <option> MAU </option>
            <option> MAYURBHANJ </option>
            <option> MEDAK </option>
            <option> MEERUT </option>
            <option> MIRZAPUR </option>
            <option> MOGA </option>
            <option> MOKOKCHUNG </option>
            <option> MON </option>
            <option> MORADABAD </option>
            <option> MORENA </option>
            <option> MUKTSAR </option>
            <option> MUMBAI </option>
            <option> MUNGER </option>
            <option> MURSHIDABAD </option>
            <option> MUZAFFARNAGAR </option>
            <option> MUZAFFARPUR </option>
            <option> Mysuru </option>
            <option> NABARANGAPUR </option>
            <option> NADIA </option>
            <option> NAGAON </option>
            <option> NAGAPATTINAM </option>
            <option> NAGAUR </option>
            <option> NAGPUR </option>
            <option> NAINITAL </option>
            <option> NALANDA </option>
            <option> NALBARI </option>
            <option> NALGONDA </option>
            <option> NAMAKKAL </option>
            <option> NANDED </option>
            <option> NANDURBAR </option>
            <option> NARMADA </option>
            <option> NARSINGHPUR </option>
            <option> NASHIK </option>
            <option> NAVSARI </option>
            <option> NAWADA </option>
            <option> NAWANSHAHR </option>
            <option> NAYAGARH </option>
            <option> NEEMUCH </option>
            <option> NELLORE </option>
            <option> NEWDELHI </option>
            <option> NICOBAR </option>
            <option> NILGIRIS </option>
            <option> NIZAMABAD </option>
            <option> NORTH24PARGANAS </option>
            <option> NORTHANDMIDDLEANDAMAN </option>
            <option> NORTHCACHARHILLS </option>
            <option> NORTHDELHI </option>
            <option> NORTHDINAJPUR </option>
            <option> NORTHEASTDELHI </option>
            <option> NORTHGOA </option>
            <option> NORTHSIKKIM </option>
            <option> NORTHTRIPURA </option>
            <option> NORTHWESTDELHI </option>
            <option> NUAPADA </option>
            <option> OSMANABAD </option>
            <option> PAKUR </option>
            <option> PALAKKAD </option>
            <option> PALAMAU </option>
            <option> PALI </option>
            <option> PANCHKULA </option>
            <option> PANCHMAHALS </option>
            <option> PANIPAT </option>
            <option> PANNA </option>
            <option> PAPUMPARE </option>
            <option> PARBHANI </option>
            <option> PATAN </option>
            <option> PATHANAMTHITTA </option>
            <option> PATIALA </option>
            <option> PATNA </option>
            <option> PAURIGARHWAL </option>
            <option> PERAMBALUR </option>
            <option> PEREN </option>
            <option> PHEK </option>
            <option> PILIBHIT </option>
            <option> PITHORAGARH </option>
            <option> PONDICHERRY </option>
            <option> POONCH </option>
            <option> PORBANDAR </option>
            <option> PRAKASAM </option>
            <option> PRATAPGARH </option>
            <option> PUDUKKOTTAI </option>
            <option> PULWAMA </option>
            <option> PUNE </option>
            <option> PURI </option>
            <option> PURNIA </option>
            <option> Pathankot </option>
            <option> Purulia </option>
            <option> RAEBARELI </option>
            <option> RAICHUR </option>
            <option> RAIGARH </option>
            <option> RAIGARH(MH) </option>
            <option> RAIPUR </option>
            <option> RAISEN </option>
            <option> RAJAURI </option>
            <option> RAJGARH </option>
            <option> RAJKOT </option>
            <option> RAJNANDGAON </option>
            <option> RAJSAMAND </option>
            <option> RAMANAGAR </option>
            <option> RAMANATHAPURAM </option>
            <option> RAMGARH </option>
            <option> RAMPUR </option>
            <option> RANCHI </option>
            <option> RATLAM </option>
            <option> RATNAGIRI </option>
            <option> RAYAGADA </option>
            <option> REWA </option>
            <option> REWARI </option>
            <option> RIBHOI </option>
            <option> ROHTAK </option>
            <option> ROHTAS </option>
            <option> RUDRAPRAYAG </option>
            <option> RUPNAGAR </option>
            <option> SABARKANTHA </option>
            <option> SAGAR </option>
            <option> SAHARANPUR </option>
            <option> SAHARSA </option>
            <option> SAHIBGANJ </option>
            <option> SAIHA </option>
            <option> SALEM </option>
            <option> SAMASTIPUR </option>
            <option> SAMBALPUR </option>
            <option> SANGLI </option>
            <option> SANGRUR </option>
            <option> SANTKABIRNAGAR </option>
            <option> SANTRAVIDASNAGAR </option>
            <option> SARAN </option>
            <option> SATARA </option>
            <option> SATNA </option>
            <option> SAWAIMADHOPUR </option>
            <option> SEHORE </option>
            <option> SENAPATI </option>
            <option> SEONI </option>
            <option> SERAIKELA-KHARSAWAN </option>
            <option> SERCHHIP </option>
            <option> SHAHDARA </option>
            <option> SHAHDOL </option>
            <option> SHAHJAHANPUR </option>
            <option> SHAJAPUR </option>
            <option> SHEIKHPURA </option>
            <option> SHEOHAR </option>
            <option> SHEOPUR </option>
            <option> SHIMLA </option>
            <option> SHIMOGA </option>
            <option> SHIVPURI </option>
            <option> SHRAWASTI </option>
            <option> SIBSAGAR </option>
            <option> SIDDHARTHNAGAR </option>
            <option> SIDHI </option>
            <option> SIKAR </option>
            <option> SIMDEGA </option>
            <option> SINDHUDURG </option>
            <option> SIRMAUR </option>
            <option> SIROHI </option>
            <option> SIRSA </option>
            <option> SITAMARHI </option>
            <option> SITAPUR </option>
            <option> SIVAGANGA </option>
            <option> SIWAN </option>
            <option> SOLAN </option>
            <option> SOLAPUR </option>
            <option> SONAPUR </option>
            <option> SONBHADRA </option>
            <option> SONIPAT </option>
            <option> SONITPUR </option>
            <option> SOUTH24PARGANAS </option>
            <option> SOUTHANDAMAN </option>
            <option> SOUTHDELHI </option>
            <option> SOUTHDINAJPUR </option>
            <option> SOUTHEASTDELHI </option>
            <option> SOUTHGAROHILLS </option>
            <option> SOUTHGOA </option>
            <option> SOUTHSIKKIM </option>
            <option> SOUTHTRIPURA </option>
            <option> SOUTHWESTDELHI </option>
            <option> SRIKAKULAM </option>
            <option> SRINAGAR </option>
            <option> SULTANPUR </option>
            <option> SUNDERGARH </option>
            <option> SUPAUL </option>
            <option> SURAT </option>
            <option> SURENDRANAGAR </option>
            <option> SURGUJA </option>
            <option> TAMENGLONG </option>
            <option> TARNTARAN </option>
            <option> TAWANG </option>
            <option> TEHRIGARHWAL </option>
            <option> THANE </option>
            <option> THANJAVUR </option>
            <option> THEDANGS </option>
            <option> THENI </option>
            <option> THIRUVANANTHAPURAM </option>
            <option> THOUBAL </option>
            <option> THRISSUR </option>
            <option> TIKAMGARH </option>
            <option> TINSUKIA </option>
            <option> TIRAP </option>
            <option> TIRUCHIRAPPALLI </option>
            <option> TIRUNELVELI </option>
            <option> TIRUPPUR </option>
            <option> TIRUVALLUR </option>
            <option> TIRUVANNAMALAI </option>
            <option> TIRUVARUR </option>
            <option> TONK </option>
            <option> TUENSANG </option>
            <option> TUMKUR </option>
            <option> TUTICORIN </option>
            <option> UDAIPUR </option>
            <option> UDHAMPUR </option>
            <option> UDHAMSINGHNAGAR </option>
            <option> UDUPI </option>
            <option> UJJAIN </option>
            <option> UKHRUL </option>
            <option> UMARIA </option>
            <option> UNA </option>
            <option> UNNAO </option>
            <option> UPPERSIANG </option>
            <option> UPPERSUBANSIRI </option>
            <option> UTTARAKANNADA </option>
            <option> UTTARKASHI </option>
            <option> VADODARA </option>
            <option> VAISHALI </option>
            <option> VALSAD </option>
            <option> VARANASI </option>
            <option> VELLORE </option>
            <option> VIDISHA </option>
            <option> VILLUPURAM </option>
            <option> VIRUDHUNAGAR </option>
            <option> VISAKHAPATNAM </option>
            <option> VIZIANAGARAM </option>
            <option> WARANGAL </option>
            <option> WARDHA </option>
            <option> WASHIM </option>
            <option> WAYANAD </option>
            <option> WESTCHAMPARAN </option>
            <option> WESTDELHI </option>
            <option> WESTGAROHILLS </option>
            <option> WESTGODAVARI </option>
            <option> WESTKAMENG </option>
            <option> WESTKHASIHILLS </option>
            <option> WESTMIDNAPORE </option>
            <option> WESTNIMAR </option>
            <option> WESTSIANG </option>
            <option> WESTSIKKIM </option>
            <option> WESTSINGHBHUM </option>
            <option> WESTTRIPURA </option>
            <option> WOKHA </option>
            <option> YAMUNANAGAR </option>
            <option> YAVATMAL </option>
            <option> ZUNHEBOTTO </option>
          </select>
        </div>
        <div className="row mr-4 ml-3 mt-3">
          State
          <select
            onChange={handleChange("states")}
            name="states"
            className="form-control"
            placeholder="states"
            value={states}
            required
          >
            <option value="">Select</option>
            <option> ANDHRAPRADESH </option>
            <option> ARUNACHALPRADESH </option>
            <option> ASSAM </option>
            <option> BIHAR </option>
            <option> CHATTISGARH </option>
            <option> DADRA&NAGARHAVELI </option>
            <option> DAMAN&DIU </option>
            <option> DELHI </option>
            <option> GOA </option>
            <option> GUJARAT </option>
            <option> HARYANA </option>
            <option> HIMACHALPRADESH </option>
            <option> JAMMU&KASHMIR </option>
            <option> JHARKHAND </option>
            <option> KARNATAKA </option>
            <option> KERALA </option>
            <option> LAKSHADWEEP </option>
            <option> MADHYAPRADESH </option>
            <option> MAHARASHTRA </option>
            <option> MANIPUR </option>
            <option> MEGHALAYA </option>
            <option> MIZORAM </option>
            <option> NAGALAND </option>
            <option> NANDAMAN&NICOBARISLANDSICOBAR </option>
            <option> ODISHA </option>
            <option> PONDICHERRY </option>
            <option> PUNJAB </option>
            <option> RAJASTHAN </option>
            <option> SIKKIM </option>
            <option> TAMILNADU </option>
            <option> TELANGANA </option>
            <option> TRIPURA </option>
            <option> UTTARAKHAND </option>
            <option> UTTARPRADESH </option>
            <option> WESTBENGAL </option>
          </select>
        </div>
        <div className="row mt-3">
          <div className="form-group">
            Property Area
            <input
              onChange={handleChange("plotArea")}
              type="text"
              name="plotArea"
              className="form-control"
              placeholder="Property Area"
              value={plotArea}
              required
            />
          </div>
          <div className="form-group rightdrop3 ">
            Area Unit
            <select
              onChange={handleChange("plotUnit")}
              name="plotUnit"
              className="form-control"
              placeholder="Area Unit"
              value={plotUnit}
              required
            >
              <option value="">Select</option>
              <option>Sq.Ft.</option>
              <option>Sq.Mt.</option>
              <option>Sq.Yd.</option>
              <option>Acres</option>
              <option>Marla</option>
              <option>Cents</option>
              <option>Bigha</option>
              <option>Kottah</option>
              <option>Kanal</option>
              <option>Grounds</option>
              <option>Ares</option>
              <option>Guntha</option>
              <option>Biswa</option>
              <option>Hectares</option>
              <option>Chataks</option>
              <option>Perch</option>
              <option>Rood</option>
              <option>Aankadam</option>
            </select>
          </div>
        </div>
        <div className="row ">
          <div className="form-group">
            Possession Year
            <select
              onChange={handleChange("possession")}
              name="possession"
              className="form-control"
              placeholder="possession"
              value={possession}
              required
            >
              <option value="">Select</option>
              <option>After 2030</option>
              <option>2030</option>
              <option>2029</option>
              <option>2028</option>
              <option>2027</option>
              <option>2026</option>
              <option>2025</option>
              <option>2024</option>
              <option>2023</option>
              <option>2022</option>
              <option>2021</option>
              <option>2020</option>
              <option>2019</option>
              <option>2018</option>
              <option>2017</option>
              <option>2016</option>
              <option>2015</option>
              <option>2014</option>
              <option>2013</option>
              <option>2012</option>
              <option>2011</option>
              <option>2010</option>
              <option>Before 2010</option>
            </select>
          </div>
        </div>
        <div className="row">
          <div className="form-group marketval">
            Property Value
            <input
              onChange={handleChange("marketValue")}
              type="number"
              name="marketValue"
              className="form-control"
              placeholder="Property Value"
              value={marketValue}
              required
            />
            <div className="markettext">
              {marketValue.length < 15
                ? number2text(marketValue || 0).toUpperCase()
                : ""}
            </div>
          </div>
        </div>
        <div className="row">
          <div className="form-group">
            Discount Percent
            <input
              onChange={handleChange("discountPer")}
              type="text"
              name="discountPer"
              className="form-control"
              placeholder={discountpercent}
              value={discountpercent}
              required
            />
          </div>
          <div style={{ padding: "32px 0px" }}>OR</div>
          <div className="form-group">
            Discount Value
            <input
              onChange={handleChange("discountVal")}
              type="text"
              name="discountVal"
              className="form-control"
              required
              placeholder={discountvalue}
              value={discountvalue}
            />
          </div>
        </div>
        <div className="form-group propimage">
          Profile Picture : Please upload showcase picture of your property
          <input
            onChange={handleChange("photo")}
            type="file"
            name="photo"
            accept="image"
            multiple
            className="mt-2"
            placeholder="choose a file"
            required
          />
        </div>
        {/* <h1>Single Image:</h1>
        <br></br>
        <input
          type="file"
          id="img1"
          onChange={handleChange("allimgs1")}
          name="myImage"
          accept="image/*"
          required
        />
        <br></br> */}
        <div className="propimage">
          Upload more pictures for better match{" "}
          <span style={{ fontSize: "14px" }}> (max. 4 files)</span>
        </div>

        {/* <input
          style={{ margin: "0px 19px" }}
          type="file"
          id="img2"
          onChange={handleChange("allimgs2")}
          name="myImage"
          accept="image/*"
          multiple
          required
        /> */}
        <div className="form-group multi-preview">
          {fileArray.map((url) => (
            <img
              style={{ margin: "0px 5px" }}
              width="100px"
              src={url}
              alt="..."
            />
          ))}
        </div>

        <div className="form-group propimage">
          <input type="file" onChange={uploadMultipleFiles} multiple required />
        </div>

        <div
          className="form-group  "
          style={{ margin: "10px 17px", padding: " 6px 0px" }}
        >
          Property Features you want to Highlight{" "}
          <span style={{ fontSize: "14px" }}> (max. 15 words Optional)</span>
          <textarea
            onChange={handleChange("description")}
            name="description"
            className="form-control mt-2"
            placeholder=" Ex - Vaastu Compliant, East Facing, On 60 mtr wide road, Already Rented, In Good Condition"
            value={description}
            // onKeyPress={countWords("description")}
            rows="2 "
            maxLength="100"
            cols="50"
          />
        </div>
        <div
          style={{ textAlign: "center", fontSize: "14px", marginBottom: "4px" }}
        >
          One-Time property listing fee ₹ 499
        </div>

        <input
          style={{ background: "#ff3399", color: "#fff", margin: "0px 202px" }}
          type="submit"
          value=" Pay & Post Property"
          className="btn 
          mb-3 "
        ></input>
        <div
          style={{ textAlign: "center", fontSize: "14px", marginTop: "-4px" }}
        >
          The only charge you pay on PropShots, Our promise!
        </div>
      </form>
    </div>
  );

  if(values.flag===0) {
    return (
      <div>
        {successMessage()}
        <HeaderAndSideBar />
        {errorMessage()}
        {createProductForm()}
      </div>
    );
  }
  else {
    return (
      <div>
        <Preview values={values} allImg={allimgs2} lat= {coordinates.lat} lng={coordinates.lng} formD = {formData}></Preview>
      </div>
    )
  }
};

export default PostProperty;
