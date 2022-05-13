import React from "react";
import "./../../myStyle.css";

export default function ConfirmBtn({ confirmTxt, confirmAction }) {
  return (
    <button className="confirmBtn" onClick={confirmAction}>
      <p className="flowBtnTxt">{confirmTxt}</p>
    </button>
  );
}
