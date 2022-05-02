import React, {useState} from "react";
import "./../../myStyle.css";

export default function GenderRadioBtn({genderText, genderColor, assignedGender, setAssignedGender, isActive, setIsActive}) {

    const [select, setSelect] = useState()


    function handleChange (e) {
      console.log("checked",e.target.checked)
      console.log("value",e.target.value)
      
        setAssignedGender(e.target.value);
        setIsActive(true)
        console.log(!select)
      }

   ;
  
    return (
      <>
        {(!select) ?
        <label className="genderRadioBtn" >
        <span style={{ backgroundColor: genderColor }} className="circle"></span>
        <input label={genderText} type="radio" value={genderText} name="gender" checked={genderText == assignedGender} onChange={handleChange} />
        <span>{genderText}</span>
      </label>
       : <label className="genderRadioBtn-selected">
      <span style={{ backgroundColor: genderColor }} className="circle"></span>
      <input label={genderText} type="radio" value={genderText} name="gender" checked={genderText == assignedGender} onChange={handleChange} />
      <span>{genderText}</span>
    </label>
    }
      </> 
    );
  
  };

