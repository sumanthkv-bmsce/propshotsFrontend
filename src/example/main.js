import React from "react";
import ReactDOM from "react-dom";
import MultiStep from "react-multistep";
import "./css/custom.css";
import "./css/normilize.css";
import "./css/skeleton.css";
import StepOne from "./stepOne";
import StepTwo from "./stepTwo";
import StepThree from "./stepThree";
import StepFour from "./stepFour";

const steps = [{ component: <StepOne /> }, { component: <StepTwo /> }];

const prevStyle = { background: "#33c3f0", "border-width": "2px" };
const nextStyle = { background: "#33c3f0", "border-width": "2px" };

const MainForm = () => (
  <div className="container">
    <MultiStep steps={steps} prevStyle={prevStyle} nextStyle={nextStyle} />
  </div>
);

export default MainForm;
