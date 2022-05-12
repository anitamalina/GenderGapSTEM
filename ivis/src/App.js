import "./myStyle.css";
import React, { useState, useEffect } from "react";

import Home from "./pages/Home";
import Flow from "./pages/Flow";
import Parse from "parse";

export async function getGenders() {
    let genderArray = [];
    let query = new Parse.Query("gender_itu");

    try {
      let genders = await query.find();

      genders.forEach((gender) => {
        genderArray.push(desctructure(gender));
      });
      return genderArray;
    } catch (error) {}
  }

  function desctructure(g){
    let genderObject = {
      id: g.id,
      description: g.get('gender_description'),
      color: g.get('color'),
      admitted: g.get('admitted')
    }
    return genderObject;
  }

export default function App() {
  const [flow, setFlow] = useState(false);
  const [data, setData] = useState();

    useEffect(() => {
    getGenders().then((genders) => setData(genders));
    console.log(data);
    }, []);

    /*  useEffect(() => {
    getGenders().then((genders) => setData(genders));
    console.log(data);
    }, []); */

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
        setData={setData}
        data={data}
      />
    );
  else return <Home setFlow={setFlow} data={data}/>;
}
