import React from "react"
import "./../myStyle.css";

function UpdateGenderBtn ({updateGenderAction}) {
    return (
        <button className="updateGenderBtn" onClick={updateGenderAction}>
          <div>Would you like to update your gender identity?</div>
        </button>
    )
}

export default UpdateGenderBtn;

