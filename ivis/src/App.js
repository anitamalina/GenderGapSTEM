import "./myStyle.css";
import React, { useState, useEffect } from "react";

import Home from "./pages/Home";
import Flow from "./pages/Flow";
import Parse from "parse";

export default function App() {
  const [assignedGender, setAssignedGender] = useState("");
  const [identifiedGender, setIdentifiedGender] = useState("");
  const [flow, setFlow] = useState(false);
  const [data, setData] = useState();

    useEffect(() => {
    getGenders().then((genders) => setData(genders));
    }, []);


   async function getGenders() {
    let genderArray = [];
    let query = new Parse.Query("gender_itu");

    try {
      let genders = await query.find();

      genders.forEach((gender) => {
        genderArray.push(gender);
      });
      return genderArray;
    } catch (error) {}
  }

  if (!data) {
    return (
      <div className="load-screen">
        <p>Loading...</p>
      </div>
    );
  } else if (flow)
    return (
      <Flow
        setFlow={setFlow}
        assignedGender={assignedGender}
        setAssignedGender={setAssignedGender}
        identifiedGender={identifiedGender}
        setIdentifiedGender={setIdentifiedGender}
        data={data}
      />
    );
  else return <Home setFlow={setFlow} data={data}/>;
}
