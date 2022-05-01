import React from "react";

// Styles
import './../myStyle.css';

const GenderLabels = ({ genderText, genderColor }) => {
  return <div className="genderlabel">
      <span style={{ backgroundColor: genderColor }} class="circle"></span>
      <p className="labeltext">{genderText}</p>
      </div>;
  }

export default GenderLabels;