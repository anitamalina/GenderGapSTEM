import React from "react";

// Styles
import "./myStyle.css";

const genderInfo = ({ genderText, genderPercent, genderColor }) => {
  return <div style={{ color: genderColor }}>{genderText} {genderPercent}</div>;
  }

export default genderInfo;