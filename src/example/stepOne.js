import React, { useState, Component } from "react";
import { $ } from "jquery";
import "../css/postproperty.css";
class stepOne extends Component {
  // componentDidMount() {
  //   $(document).ready(() => {
  //     // var autoComplete;
  //     //         autoComplete = new google.maps.places.Autocomplete((document.getElementById("search_input")),{
  //     //             types: ["geocode"]
  //     //         })

  //     //         google.maps.event.addListener(autoComplete,'place_changed',()=> {
  //     //             var near_place = autoComplete.getPlace();
  //     //             document.getElementById("latitude_input").value = near_place.geometry.location.lat();
  //     //             document.getElementById("longitude_input").value = near_place.geometry.location.lng();
  //     //             console.log(near_place.geometry.location.lat())
  //     //             console.log(near_place.geometry.location.lng())

  //     //         })

  //     $("#propertytype").change((el) => {
  //       var p;
  //       console.log($(el.target).val());
  //       if ($(el.target).val() === "Residential") {
  //         $("#subtype").html(
  //           "<option disabled selected value>select any one</option> <option value='Apartment'> Apartment/Flat/Builder floor </option> <option value='Land'> Land </option> <option value='Housevilla'> Housevilla </option> <option value='other'> Other </option>"
  //         );

  //         // console.log((document.getElementById("subtype")).value)

  //         $("#subtype").change((e) => {
  //           if ($(e.target).val() === "Apartment") {
  //             $("#input").detach();
  //             $("#exacttype").prop("disabled", false);
  //             $("#exacttype").html(
  //               "<option disabled selected value>select any one</option> <option value='Residential apartment'> Residential apartment </option> <option value='Studio service apartment'> Studio service apartment </option> <option value='Independent/builder floor'> Independent/builder floor </option> "
  //             );
  //           } else if ($(e.target).val() === "Land") {
  //             $("#input").detach();
  //             $("#exacttype").prop("disabled", false);
  //             $("#exacttype").html(
  //               "<option disabled selected value>select any one</option> <option value='Residential Land'> Residential Land </option> <option value='FarmLand'> FarmLand </option> "
  //             );
  //           } else if ($(e.target).val() === "Housevilla") {
  //             $("#input").detach();
  //             $("#exacttype").prop("disabled", false);
  //             $("#exacttype").html(
  //               "<option disabled selected value>select any one</option> <option value='Farm House'> Farm House </option> <option value='Independent House/Villa'> Independent House/Villa </option> <option value='Society Villa'> Society Villa </option> "
  //             );
  //           } else if ($(e.target).val() === "other") {
  //             $("#exacttype").prop("disabled", true);
  //             $("#other").html(
  //               "<input type='text' name='other' id = 'input' placeholder='Enter Custom text' required></input>"
  //             );
  //             // $("#exacttype").html("<input type='text' value='other' placeholder='Enter Custom text' required")
  //           }
  //         });

  //         sessionStorage.subtype = $("#subtype").val();
  //         sessionStorage.exacttype = $("#exacttype").val();
  //       } else if ($(el.target).val() === "Commercial") {
  //         $("#subtype").html(
  //           "<option disabled selected value>select any one</option> <option value='Office'> Office </option> <option value='Retail'> Retail </option> <option value='Land'> Land </option> <option value='Industry'> Industry </option> <option value='Storage'> Storage </option> <option value='Hospitality'> Hospitality </option> <option value='Other'> Other </option>"
  //         );

  //         $("#subtype").change((e) => {
  //           if ($(e.target).val() === "Office") {
  //             $("#input").detach();
  //             sessionStorage.subtype = "Office";
  //             $("#exacttype").prop("disabled", false);
  //             $("#exacttype").html(
  //               "<option disabled selected value>select any one</option> <option value='Commercial Office Space'> Commercial Office Space </option> <option value='Office in IT/Business Park'> Office in IT/Business Park </option> <option value='Business Centre'> Business Centre </option> <option value='Timeshare'> Timeshare </option> "
  //             );
  //           } else if ($(e.target).val() === "Retail") {
  //             $("#input").detach();
  //             sessionStorage.subtype = "Retail";
  //             $("#exacttype").prop("disabled", false);
  //             $("#exacttype").html(
  //               "<option disabled selected value>select any one</option> <option value='Commercial Shops'> Commercial Shops </option> <option value='Commercial showrooms'> Commercial showrooms </option> <option value = 'Space in Retail Mall'> Space in Retail Mall </option> "
  //             );
  //           } else if ($(e.target).val() === "Land") {
  //             $("#input").detach();
  //             sessionStorage.subtype = "Land";
  //             $("#exacttype").prop("disabled", false);
  //             $("#exacttype").html(
  //               "<option disabled selected value>select any one</option> <option value='Commercial/Industrial Land'> Commercial/Industrial Land </option> <option value='Agriculture/Farm Land'> Agriculture/Farm land </option> <option value='Industry Land/Plots'> Industry Land/Plots </option> "
  //             );
  //           } else if ($(e.target).val() === "Industry") {
  //             $("#input").detach();
  //             sessionStorage.subtype = "Industry";
  //             $("#exacttype").prop("disabled", false);
  //             $("#exacttype").html(
  //               "<option disabled selected value>select any one</option> <option value='Factory'> Factory </option> <option value='Manufacturing'> Manufacturing </option> "
  //             );
  //           } else if ($(e.target).val() === "Storage") {
  //             $("#input").detach();
  //             sessionStorage.subtype = "Storage";
  //             $("#exacttype").prop("disabled", false);
  //             $("#exacttype").html(
  //               "<option disabled selected value>select any one</option> <option value='Warehouse'> Warehouse </option> <option value='Coldstorage'>Coldstorage </option> "
  //             );
  //           } else if ($(e.target).val() === "Land") {
  //             $("#input").detach();
  //             sessionStorage.subtype = "Land";
  //             $("#exacttype").prop("disabled", false);
  //             $("#exacttype").html(
  //               "<option disabled selected value>select any one</option> <option value='Commercial/Industrial Land'> Commercial/Industrial Land </option> <option value='Agriculture/Farm Land'> Agriculture/Farm land </option> <option value='Industry Land/Plots'> Industry Land/Plots </option> "
  //             );
  //           } else if ($(e.target).val() === "Hospitality") {
  //             $("#input").detach();
  //             sessionStorage.subtype = "Hospitality";
  //             $("#exacttype").prop("disabled", false);
  //             $("#exacttype").html(
  //               "<option disabled selected value>select any one</option> <option value='Hotel'> Hotel </option> <option value='Resort'> Resort </option> <option value='Guest House'> Guest House </option> <option value='Banquet Halls'> Banquet Halls</option>"
  //             );
  //           } else if ($(e.target).val() === "Other") {
  //             $("#exacttype").prop("disabled", true);
  //             sessionStorage.subtype = "Other";
  //             $("#other").html(
  //               "<input type='text' name='other' id = 'input' placeholder='Enter Custom text' required></input>"
  //             );
  //             // $("#exacttype").html("<input type='text' value='other' placeholder='Enter Custom text' required")
  //           }

  //           sessionStorage.exacttype = $(e.target).val();
  //         });
  //       }

  //       sessionStorage.propertytype = $("#propertytype").val();
  //     });

  //     $("#possessionyear").change((el) => {
  //       if ($(el.target).val() === "other") {
  //         $("#posother").html(
  //           "<input type='text' name='possessionyear' id = 'possessionyear1' placeholder='Enter Custom text' required></input>"
  //         );
  //       } else {
  //         $("#possessionyear1").detach();
  //       }
  //     });

  //     $("#search_input").change(() => {
  //       document.getElementById("latitude_input").value = "";
  //       document.getElementById("longitude_input").value = "";
  //     });

  //     $("#marketvalue").on("input", (el) => {
  //       $("#discounterr").text("");
  //       $("#error").text("");
  //       var numInt = $(el.target).val().replace(/,/g, "");
  //       var isnum = /^\d+$/.test(numInt);

  //       if ($(el.target).val() === "") {
  //         $("#marketamt").text("");
  //         $("#maxdiscountamt").val("");
  //       } else if (isnum === false) {
  //         $("#marketamt").text("Must include only numbers");
  //         $("#maxdiscountamt").val("");
  //         $("#marketvalue").val("");
  //       } else {
  //         document.getElementById("marketvalue").value = numInt.replace(
  //           /(\d)(?=(\d\d)+\d$)/g,
  //           "$1,"
  //         );
  //         $("#marketamt").text(number2text(parseInt(numInt)));
  //         if ($("#maxdiscountper").val() !== "") {
  //           var percent = parseFloat($("#maxdiscountper").val());
  //           var discount = (percent / 100) * parseFloat(numInt);
  //           // console.log(discount)
  //           if (discount != NaN) {
  //             $("#maxdiscountamt").val((percent / 100) * parseFloat(numInt));
  //           }
  //         }
  //       }
  //     });

  //     $("#maxdiscountper").on("input", (el) => {
  //       $("#discounterr").text("");
  //       if ($("#maxdiscountper").val() === "") {
  //         $("#maxdiscountamt").val("");
  //         return;
  //       }

  //       var isValid = isNumeric($(el.target).val());
  //       if (isValid === false) {
  //         $("#maxdiscountper").val("");
  //         $("#error").text("Enter valid percentage");
  //         $("#maxdiscountamt").val("");
  //         $("#maxdiscountper").val("");
  //         return;
  //       }

  //       var val = parseFloat($("#maxdiscountper").val());
  //       if (
  //         parseFloat($("#maxdiscountper").val()) > 100.0 ||
  //         parseFloat($("#maxdiscountper").val()) < 0.0
  //       ) {
  //         $("#error").text("Enter valid percentage");
  //         $("#maxdiscountamt").val("");
  //       } else if ($("#marketvalue").val() !== "") {
  //         var marketvalue = parseFloat(
  //           document.getElementById("marketvalue").value.replace(/,/g, "")
  //         );
  //         var percent = parseFloat($(el.target).val());
  //         var discount = Math.round((percent / 100) * marketvalue).toString();
  //         $("#maxdiscountamt").val(
  //           discount.replace(/(\d)(?=(\d\d)+\d$)/g, "$1,")
  //         );
  //         // console.log(discount.replace(/(\d)(?=(\d\d)+\d$)/g, "$1,"))
  //         $("#error").text("");
  //       } else {
  //         $("#maxdiscountamt").val("");
  //         $("#error").text("");
  //       }
  //     });

  //     $("#maxdiscountamt").on("input", (el) => {
  //       $("#error").text("");
  //       $("#discounterr").text("");
  //       const isValid = isNumeric($(el.target).val().replace(/,/g, ""));
  //       if (!isValid) {
  //         $("#maxdiscountamt").val("");
  //         $("#maxdiscountper").val("");
  //         $("#discounterr").text("Must be a valid number");
  //         return;
  //       }

  //       if ($("#marketvalue").val() === "") {
  //         $("#discounterr").text("Must fill market value");
  //         $("#maxdiscountamt").val("");
  //         return;
  //       }

  //       if (
  //         $("#marketvalue").val() !== "" &&
  //         parseFloat($("#marketvalue").val().replace(/,/g, "")) >=
  //           parseFloat($(el.target).val().replace(/,/g, ""))
  //       ) {
  //         var mkVal = parseFloat($("#marketvalue").val().replace(/,/g, ""));
  //         var amt = parseFloat($(el.target).val().replace(/,/g, ""));
  //         var percent = (100 * amt) / mkVal;
  //         $("#maxdiscountper").val(percent);
  //         var rounded = parseFloat(
  //           $(el.target).val().replace(/,/g, "")
  //         ).toString();
  //         $("#maxdiscountamt").val(
  //           rounded.replace(/(\d)(?=(\d\d)+\d$)/g, "$1,")
  //         );
  //       } else if (
  //         parseFloat($("#marketvalue").val().replace(/,/g, "")) <
  //         parseFloat($(el.target).val().replace(/,/g, ""))
  //       ) {
  //         $("#discounterr").text("Cannot exceed market value");
  //         $("#maxdiscountper").val("");
  //         $("#maxdiscountamt").val("");
  //       } else {
  //         $("#discounterr").text("");
  //         $("#maxdiscountper").val("");
  //       }
  //     });
  //   });

  //   var currentTab = 0; // Current tab is set to be the first tab (0)
  //   showTab(currentTab); // Display the current tab

  //   console.log(currentTab);
  //   function showTab(n) {
  //     // This function will display the specified tab of the form ...
  //     var x = document.getElementsByClassName("tab");
  //     x[n].style.display = "block";

  //     // ... and fix the Previous/Next buttons:
  //     if (n == 0) {
  //       document.getElementById("prevBtn").style.display = "none";
  //       $("#tab1").css("paddingTop", "15px");
  //       $("#tab2").css("paddingTop", "10px");
  //       $("#tab1").css("background-color", "lightskyblue");
  //       $("#tab2").css("background-color", "#808080");
  //     } else {
  //       document.getElementById("prevBtn").style.display = "inline";
  //     }
  //     if (n == x.length - 1) {
  //       $("#tab2").css("paddingTop", "15px");
  //       $("#tab1").css("paddingTop", "10px");
  //       $("#tab2").css("background-color", "lightskyblue");
  //       $("#tab1").css("background-color", "#808080");
  //       document.getElementById("nextBtn").innerHTML = "Preview";
  //       document.getElementById("nextBtn").classList.add("Preview");
  //     } else {
  //       document.getElementById("nextBtn").innerHTML = "Next";
  //     }
  //   }

  //   function nextPrev(n) {
  //     // This function will figure out which tab to display
  //     var x = document.getElementsByClassName("tab");
  //     // Exit the function if any field in the current tab is invalid:
  //     if (n == 1 && !validateForm()) return false;
  //     // Hide the current tab:
  //     x[currentTab].style.display = "none";

  //     // Increase or decrease the current tab by 1:
  //     console.log(currentTab + " " + n);

  //     currentTab = currentTab + n;
  //     // if you have reached the end of the form... :
  //     if (currentTab >= x.length) {
  //       //...the form gets submitted:

  //       $("#nextBtn").display = "none";
  //       $("#prevBtn").display = "none";
  //       window.location.href = "/api/user/5f2b95aaf480b645ce192d81/home";
  //       return false;
  //     }

  //     showTab(currentTab);

  //     // Otherwise, display the correct tab:
  //   }

  //   function validateForm() {
  //     return true; // return the valid status
  //   }

  //   $("#tab1").click(() => {
  //     currentTab = 1;
  //     nextPrev(-1);
  //   });

  //   $("#tab2").click(() => {
  //     currentTab = 0;
  //     nextPrev(1);
  //   });

  //   function isNumeric(n) {
  //     return !isNaN(parseFloat(n)) && isFinite(n);
  //   }

  //   function number2text(value) {
  //     var fraction = Math.round(frac(value) * 100);
  //     var f_text = "";

  //     if (fraction > 0) {
  //       f_text = "and " + convert_number(fraction) + " paisa";
  //     }

  //     if (convert_number(value) === "NUMBER OUT OF RANGE!") {
  //       return convert_number(value);
  //     }

  //     return convert_number(value) + " rupees" + f_text + " only";
  //   }

  //   function frac(f) {
  //     return f % 1;
  //   }

  //   function convert_number(number) {
  //     if (number < 0 || number > 999999999) {
  //       return "NUMBER OUT OF RANGE!";
  //     }
  //     var Gn = Math.floor(number / 10000000); /* Crore */
  //     number -= Gn * 10000000;
  //     var kn = Math.floor(number / 100000); /* lakhs */
  //     number -= kn * 100000;
  //     var Hn = Math.floor(number / 1000); /* thousand */
  //     number -= Hn * 1000;
  //     var Dn = Math.floor(number / 100); /* Tens (deca) */
  //     number = number % 100; /* Ones */
  //     var tn = Math.floor(number / 10);
  //     var one = Math.floor(number % 10);
  //     var res = "";

  //     if (Gn > 0) {
  //       res += convert_number(Gn) + " Crore";
  //     }
  //     if (kn > 0) {
  //       res += (res == "" ? "" : " ") + convert_number(kn) + " Lakh";
  //     }
  //     if (Hn > 0) {
  //       res += (res == "" ? "" : " ") + convert_number(Hn) + " Thousand";
  //     }

  //     if (Dn) {
  //       res += (res == "" ? "" : " ") + convert_number(Dn) + " Hundred";
  //     }

  //     var ones = Array(
  //       "",
  //       "One",
  //       "Two",
  //       "Three",
  //       "Four",
  //       "Five",
  //       "Six",
  //       "Seven",
  //       "Eight",
  //       "Nine",
  //       "Ten",
  //       "Eleven",
  //       "Twelve",
  //       "Thirteen",
  //       "Fourteen",
  //       "Fifteen",
  //       "Sixteen",
  //       "Seventeen",
  //       "eighteen",
  //       "nineteen"
  //     );
  //     var tens = Array(
  //       "",
  //       "",
  //       "twenty",
  //       "thirty",
  //       "fourty",
  //       "fifty",
  //       "sixty",
  //       "seventy",
  //       "eighty",
  //       "ninety"
  //     );

  //     if (tn > 0 || one > 0) {
  //       if (!(res == "")) {
  //         res += " and ";
  //       }
  //       if (tn < 2) {
  //         res += ones[tn * 10 + one];
  //       } else {
  //         res += tens[tn];
  //         if (one > 0) {
  //           res += "-" + ones[one];
  //         }
  //       }
  //     }

  //     if (res == "") {
  //       res = "zero";
  //     }
  //     return res;
  //   }
  // }
  render() {
    return (
      <div className="">
        <form
          action="/api/user/5f2b95aaf480b645ce192d81/preview"
          autocomplete="on"
          method="POST"
          id="form"
          enctype="multipart/form-data"
        >
          <div className="cardstyle">
            <div className="row content ">
              <div class="inner-wrap">
                <div class="section">
                  <label for="propertyfor"> PropertyFor: </label>
                </div>
                <select id="propertyfor" name="propertyfor" required>
                  <option value="Sale">Sale</option>
                  <option value="Rent">Rent</option>
                </select>
              </div>
              <div class="inner-wrap">
                <div class="section">
                  <label for="propertytype">PropertyType: </label>
                </div>
                <select id="propertytype" name="propertytype" required>
                  <option disabled selected value>
                    select an option
                  </option>
                  <option value="Residential">Residential</option>
                  <option value="Commercial">Commercial</option>
                </select>
              </div>
            </div>
            <div className="row">
              <div class="inner-wrap">
                <label class="section">Subtype: </label>
                <select id="subtype" name="subtype" required></select>
              </div>
              <div class="inner-wrap">
                <label class="section">Exacttype: </label>
                <select id="exacttype" name="exacttype" required></select>
                <div id="other"></div>
              </div>
            </div>
            <div className="row">
              <div class="inner-wrap">
                <div class="section">
                  <label for="location">Location: </label>
                </div>
                <input
                  type="text"
                  name="location"
                  id="search_input"
                  placeholder="Enter Location with pincode"
                  required
                />
              </div>

              <div class="inner-wrap">
                <div class="section">
                  <label for="possessionyear">
                    Possession Year(Expected):{" "}
                  </label>
                </div>
                <select id="possessionyear" name="possessionyear" required>
                  <option value="Ready to move">Ready to move</option>
                  <option value="Within 6 months">Within 6 months</option>
                  <option value="Within 12 months ">Within 12 months</option>
                  <option value="other">Other</option>
                </select>

                <div id="posother"></div>
              </div>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default stepOne;
