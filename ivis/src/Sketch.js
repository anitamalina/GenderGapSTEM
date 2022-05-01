import {React, useState} from "react";
import Sketch from "react-p5";

export default (props) => {
  let canvas;

  const setup = (p5, canvasParentRef, canvas) => {
    // use parent to render the canvas in this ref
    // (without that p5 will render the canvas outside of your component)
    canvas = p5.createCanvas(600, 400).parent(canvasParentRef);
  };

  const draw = (p5) => {
    p5.background(220);
    let numbersOfGenders = [25, 50];
    for (let i = 0; i < numbersOfGenders.length; i++) {
      let rect_height = (400 * numbersOfGenders[i]) / 100;

      if (i == 0) {
        p5.fill("red");
        p5.rect(0, 0, 600, rect_height);
      } else {
        let y = (400 * numbersOfGenders[i - 1]) / 100;
        p5.fill("yellow");
        p5.rect(0, y, 600, rect_height);
      }
    }
  };

  let canvasURL = canvas.current?.toDataURL("image/png");
  console.log(canvasURL);

  return <Sketch setup={setup} draw={draw} imgURL={canvasURL} />;
};
