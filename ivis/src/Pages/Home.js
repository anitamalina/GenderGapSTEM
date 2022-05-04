import React, { useState, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stars } from "@react-three/drei";
import Parse from "parse";

// components
import Sphere from "../components/Sphere";
import Timer from "../components/Timer";
import GenderInfo from "../components/GenderInfo";
import UpdateGenderBtn from "../components/UpdateGenderBtn";
import Visuals from "../components/Visuals";

import data from "./../data.json";

export default function Home() {
  const [src, setSrc] = useState();
  const [timer, setTimer] = useState();
  const [parseData, setParseData] = useState();

  const gender_id = "34gnzcE46z";
  const genderHope = [];

/*   useEffect(() => {
    getGenderRep();
    console.log("1) from home component: ", parseData);
  }, []); */

  /*  useEffect(() => {
    genderTest(gender_id);
  }, []); */

  useEffect(() => {
    getGenderDetails();
  }, []);




  function goToPage() {
    return null;
  }

/*   async function getGenderRep() {
    let genderArray = [];
    const genders = Parse.Object.extend("gender_itu");
    const query = new Parse.Query(genders);

    try {
      let genderResult = await query.find();

      genderResult.forEach((gender) => {
        genderArray.push(gender);
      });
      
      console.log(genderArray);
      let destructuredArray = destructureGenderArray(genderArray);

     return true;
    } catch (error) {}
  } */

  async function getGenderDetails(){
    const genderNew = Parse.Object.extend("gender_itu");
    const query = new Parse.Query(genderNew);
    

    try{

      let genderTest = await query.find();
      genderTest.forEach((gender) => {
        let object = {
        description: gender.get("gender_description"),
        color: gender.get("color"),
        admitted: gender.get("admitted")
        }
        genderHope.push(object);
      });

      console.log("is here hope?", genderHope);
      setParseData(genderHope);

      destructureGenderArray(genderHope)

      console.log("is here destructured hope?", parseData);

    
  }catch(error){

  }
  }

 /*  async function genderTest(id){

    let genderArray;

    const genders = Parse.Object.extend("gender_itu");
    const query = new Parse.Query(genders);

    try{
      const gender = await query.get(id);
      const description = gender.get("gender_description");
      console.log(description)

    } catch(error){

    }

  }*/

  function destructure(gender) {
    let genderObject = {
      description: gender.get("gender_description"),
      admitted: gender.get("admitted"),
      color: gender.get("color")
    }
    return genderObject;
  }

  function destructureGenderArray(genderArray) {
    genderArray.map(destructure);
  } 

  return (
    <>
      <Timer setTimer={setTimer} />
      <h1>Student Representation</h1>
      <div className="genderInfo">
        {parseData.map((g) => (
          <div className="genderText">
            <GenderInfo
              genderText={g.description}
              genderPercent={g.admitted + " %"}
              genderColor={g.color}
            />
          </div>
        ))}
      </div>
      <UpdateGenderBtn action={goToPage} />
      <p className="timer">{timer}</p>
      <div className="p5-sketch">
        <Visuals setSrc={setSrc} />
      </div>
      <Canvas className="canvas">
        <OrbitControls />
        <Stars />
        <Sphere position={[0, 0, 0]} src={src} />
      </Canvas>
    </>
  );
}
