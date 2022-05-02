import React from "react";
import "./../../myStyle.css"

export default function FlowBtn({flowBtnTxt, flowBtnAction, isActive}) {
    return (
        <>
        {!isActive ? 
            <button className="flowBtn" onClick={flowBtnAction}>
                <p className="flowBtnTxt">{flowBtnTxt}</p>
            </button>
            : 
            <button className="flowBtn-selected" onClick={flowBtnAction}>
                <p className="flowBtnTxt">{flowBtnTxt}</p>
            </button>
        }
        </>
    )
}
