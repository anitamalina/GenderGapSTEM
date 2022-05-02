import React from "react";
import GenderLabel from "./GenderLabel";
import GenderRadioBtn from "./GenderRadioBtn";

import data from "./../../data.json"


export default function GenderLabels({setAssignedGender, assignedGender, setIsActive, isActive}) {

    return(
      <>
        <div className="genderLabels">
          {data.map((g) => (
            <div className="genderText" key={g.id}>
              <GenderRadioBtn
                genderText={g.genderText}
                genderColor={g.genderColor}
                assignedGender={assignedGender}
                setAssignedGender={setAssignedGender}
                setIsActive={setIsActive}
                isActive={isActive}
              />
            </div>
          ))}
        </div> 
      </>
    )
}
/*               setAssignedGender(g.genderText)
              setIsActive(false);
              console.log("clicked")
              console.log("active?", isActive)
              console.log("gender?", g.genderText) */
