import React from "react";

// Styles
import "./../../myStyle.css";

const GenderLabels = ({ genderText, genderColor, selectGender }) => {
  return (
    <div className="genderlabel" onClick={selectGender}>
      <span style={{ backgroundColor: genderColor }} class="circle"></span>
      <p className="labeltext">{genderText}</p>
    </div>
  );
};

export default GenderLabels;
