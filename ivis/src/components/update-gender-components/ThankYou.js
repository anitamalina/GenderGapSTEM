import React from "react";
import "./../../myStyle.css"
import FlowBtn from "./FlowBtn";
import image from "./../images/checkmark.png"

export default function ThankYou({flowBtnAction}) {

  return (
    <div className="thankyou">
      <img className="checkmark" src={image} alt=""/>
      <h4>Thank you!</h4>
      <h5>Your registration is saved</h5>
      <p>You can now see your gender represented in the visualization.</p>
      <div className="flowNav">
      <FlowBtn flowBtnTxt="OK" flowBtnAction={flowBtnAction}/>
      </div>
    </div>
  );
}