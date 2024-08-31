import gsap from "gsap";
import "./App.css";
import { useGSAP } from "@gsap/react";
import { useState } from "react";
import { useRef } from "react";

import React from 'react'

const App = () => {
  const ranX = gsap.utils.random(-500, 500, 50);
  const ranY = gsap.utils.random(-500, 500, 100);
  const rota = gsap.utils.random(0, 360, 30);
  const [xVal, setxVal] = useState(0);
  const [yVal, setyVal] = useState(0);
  const [rot, setrot] = useState(0);
  var imageRef = useRef();
  useGSAP(() => {
    gsap.to(
      imageRef.current,
      {
        x:xVal,
        y:yVal,
        rotate:rot,
        duration:0.6,
        delay:1
      },
      [xVal,yVal,rot]
    );
  });
  return (
    <main>
      <img
        onClick={() => {
          setxVal(ranX)
          setyVal(ranY)
          setrot(rota)
          console.log(ranX,ranY,rota)
        }}
        ref={imageRef}
        
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAoj5_vvXJtyriO6vTlIXJw4RTiSEW0FcEfQ&s"
        alt=""
      />
    </main>
  );
}

export default App





