import React from "react";
import "./../myStyle.css";
import FlowBtn from "./FlowBtn";
import image from "./../images/checkmark.png"

export default function ThankYou() {

  function action() {
      return null;
  }

  return (
    <div className="thankyou">
      <img className="checkmark" src={image} alt=""/>
      <h4>Thank you!</h4>
      <h5>Your registration is saved</h5>
      <p>You can now see your gender represented in the visualization.</p>
      <div className="flowNav">
      <FlowBtn txt="OK" action={action}/>
      </div>
    </div>
  );
}