import React from "react";
import "./../../myStyle.css";

export default function FlowBtn({flowBtnTxt, flowBtnAction, isActive}) {

    if (isActive) return (
        <button className="flowBtn-active" onClick={flowBtnAction}>
        <p className="flowBtnTxt">{flowBtnTxt}</p>
        </button>
    ) 
    
    else return (
        <button className="flowBtn" onClick={flowBtnAction}>
        <p className="flowBtnTxt">{flowBtnTxt}</p>
        </button>
    ) 
}