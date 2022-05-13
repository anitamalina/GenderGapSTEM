import React, { useState } from "react";
import "./../../myStyle.css";

export default function FlowBtn({ flowBtnTxt, flowBtnAction, isActive }) {
  const [errorMessage, setErrorMessage] = useState();

  function flowBtnActionError() {
    console.log("error btn clcikd");
    setErrorMessage("Choose gender to continue");
  }

  if (isActive)
    return (
      <div className="flowNav">
        <button className="flowBtn-active" onClick={flowBtnAction}>
          <p className="flowBtnTxt">{flowBtnTxt}</p>
        </button>
      </div>
    );
  else
    return (
      <div className="flowNav">
        <button className="flowBtn" onClick={flowBtnActionError}>
          <p className="flowBtnTxt">{flowBtnTxt}</p>
        </button>
        {errorMessage && <div className="errorMessage"> {errorMessage} </div>}
      </div>
    );
}
