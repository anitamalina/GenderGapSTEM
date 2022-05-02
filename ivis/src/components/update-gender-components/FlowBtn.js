import React from "react";
import './../myStyle.css'

export default function FlowBtn({flowBtnTxt, flowBtnAction}) {
    return (
        <button className="flowBtn" onClick={flowBtnAction}>
        <p className="flowBtnTxt">{flowBtnTxt}</p>
        </button>
    )
}