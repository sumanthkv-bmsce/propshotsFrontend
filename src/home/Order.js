import React, { useState } from "react";
import axios from "axios";

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

const _DEV_ = document.domain === "localhost";

function Order() {
  const [name, setName] = useState("mehul");
  const [alldata, setAlldata] = useState({});

  const { currency, amount, id } = alldata;
  async function displayRazorPay() {
    // axios({
    //   method: "POST",
    //   url: `/api/razorpay`,
    //   headers: {
    //     contentType: "application/json",
    //   },
    // });

    const res = await loadScript(
      "https://checkout.razorpay.com/v1/checkout.js"
    );

    if (!res) {
      alert("RAzerpay failed");
      return;
    }
    const data = axios({
      method: "POST",
      url: "/api/order",
    })
      //  fetch("/order", {
      //   method: "POST",
      // })
      .then((t) => {
        // const valuess = t.clone().json();
        // setAlldata(t.json);
        console.log(t.data.currency);

        setAlldata(t);
        console.log("alldata", alldata);

        console.log(data.data);
        console.log("alldata", t.data.id);

        const options = {
          key: _DEV_ ? "rzp_test_ymS5B1E9GFw09V" : "api key not available", // Enter the Key ID generated from the Dashboard

          currency: t.data.currency,
          amount: t.data.amount.toString(),
          order_id: t.data.id,
          name: "Acme Corp",
          description: "PropShots Transaction",
          image: "https://example.com/your_logo",
          handler: function (response) {
            alert(response.razorpay_payment_id);
            alert(response.razorpay_order_id);
            alert(response.razorpay_signature);
          },
          prefill: {
            name,
          },
        };
        var paymentObject = new window.Razorpay(options);
        paymentObject.open();
      });
  }

  return (
    <div>
      <a className="App-Link" onClick={displayRazorPay} target="_blank">
        Donate $5
      </a>
    </div>
  );
}

export default Order;
