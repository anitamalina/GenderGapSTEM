import React from "react";
import "./../myStyle.css";

const GenderInfo = ({ genderText, genderPercent, genderColor }) => {
  return (
    <div style={{ color: genderColor }}>
      {genderText} {genderPercent}
    </div>
  );
};

export default GenderInfo;
