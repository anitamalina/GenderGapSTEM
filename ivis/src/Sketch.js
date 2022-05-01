import React, {useEffect} from "react";
import Sketch from "react-p5";


export default (props) => {

	const setup = (p5, canvasParentRef) => {
		// use parent to render the canvas in this ref
		// (without that p5 will render the canvas outside of your component)
		let c = p5.createCanvas(600, 500).parent(canvasParentRef);
        return c
	};

	const draw = (p5, c) => {
		p5.background(0);

          let numbersOfGenders = [25,50]
            
            for(let i = 0; i < numbersOfGenders.length; i++) {
              let rect_height = (400 * numbersOfGenders[i])/100;
              
              if (i==0) {
                p5.fill('red');
                p5.rect(0,0, 600, rect_height);
                
              } else {
                let y = (400 * numbersOfGenders[i-1])/100;
                p5.fill('yellow');
                p5.rect(0,y, 600, rect_height);
              }
            }
        /* const sketch = p5.saveCanvas(c, 'myCanvas.jpg'); */
        const imgSrc = p5.canvas.toDataURL()
        props.setImg(imgSrc)
	};

	return <Sketch setup={setup} draw={draw} />;
};