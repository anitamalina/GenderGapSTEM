import "./myStyle.css";
import React, {useState} from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./Pages/Home"
import UpdateGenderFlow from "./Pages/UpdateGenderFlow"


function App() {
  const [src, setSrc] = useState();
      
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home src={src} setSrc={setSrc}/>} />
          <Route path="/update-gender" element={<UpdateGenderFlow scr={src} setSrc={setSrc}/>} />
          <Route path="*" element={<Home/>}/>
        </Routes>
      </Router>
    </>
  );
}

export default App;
