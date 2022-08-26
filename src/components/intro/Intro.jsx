import './intro.scss'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import React, { useEffect, useRef } from 'react'
import { init } from 'ityped'
import Typewriter from 'typewriter-effect/dist/core';



export default function Intro() {

  const textRef = useRef();
  useEffect(()=>{
    new Typewriter(textRef.current, {
      strings: ['Software Engineer', 'Computer Science Student', 'UX Designer'],
      autoStart: true,
      loop: true,
    });
  },[])
  return (
    <div className="intro" id="intro">
        <div className="left">
          <div className="imgContainer">
            <img src="assets/shir.png" alt="" />
          </div>

        </div>
        <div className="right">
          <div className="wrapper">
            <h2>
              Hi there! I'm
            </h2>
            <h1>Shir Nava</h1>
            <h3> <span ref = {textRef}></span> graduating December 2022</h3> 
          </div>
        <a href="#portfolio">
          <KeyboardArrowDownIcon className = "arr"/>
        </a>
        </div>
        </div>
  )
}
