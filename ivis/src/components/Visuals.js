import React from "react";
import Sketch from "react-p5";

export default function Visuals({setSrc, data}) {

  const setup = (p5, canvasParentRef, canvas) => {
    p5.createCanvas(600, 400).parent(canvasParentRef);
  };

  function destructure(input){
    let genderSquare= {
      rectHeight: (400*input.get("admitted"))/100,
      color: input.get("color")
    }
    return genderSquare;
  }

  const squareArray = data.map(destructure);

  const draw = (p5) => {
    p5.background(220);
    //let numbersOfGenders = [25, 50];
    console.log("From Visuals", squareArray)
    let sumHeight = 0;
    for (let i = 0; i < squareArray.length; i++) {

      if (i === 0) {
        p5.fill(squareArray[i].color);
        p5.noStroke();
        p5.rect(0, 0, 600, squareArray[i].rectHeight);
        sumHeight += squareArray[i].rectHeight;
        
      } else {
        p5.fill(squareArray[i].color);
        p5.rect(0, sumHeight, 600, squareArray[i].rectHeight);
        sumHeight += squareArray[i].rectHeight;

      }
    }
    
    const imgSrc = p5.canvas.toDataURL();
    setSrc(imgSrc);
    p5.canvas.hide();
  }
  return <Sketch setup={setup} draw={draw}/>;
};
