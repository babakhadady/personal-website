import ParticlesBackground from "../ParticlesBackground";
import "./App.css";
import React, { useState, useRef, useEffect } from "react";
import { Fade } from "react-reveal";
import NavBar from "../NavBar";
import Header from "../Header";
import Paragraph from "../Paragraph";

export default function App() {

  useEffect(() => {
    document.body.style.backgroundColor = '#0f0f0f';
    document.title = "Babak Hadady";
  }, [])


  return (
    <div>
      <div>
        <NavBar>
          <ul className="details">
            <li><a>CONTACT</a></li>
            <li><a href="downloads/babak hadady.docx" download>RESUME</a></li>
            <li><a href="https://www.linkedin.com/in/babak-hadady-50a857201/">LINKEDIN</a></li>
            <li><a href="#experience">EXPERIENCES</a></li>
            <li><a href="#aboutme">ABOUT ME</a></li>
          </ul>
        </NavBar>
      </div>

      {/* <div className="body">
        <Fade bottom>
          <h1 className="heading listitems"> Hello. </h1>
          <p>
            My name is Babak Hadady, I am currently a Computer Science major at the University of
            British Columbia graduating in 2025.
            I am seeking a coop term for September 2023.
          </p>
          <h2 className="listitems"> About </h2>
          <h2 className="listitems experience" id="experience"> Experiences </h2>
        </Fade>
      </div> */}

      <ParticlesBackground></ParticlesBackground>

      <div>

      <Header>
          <Fade cascade bottom>
            <h1>Hello</h1>
          </Fade>

        </Header>
        {/* <p ref={myRef} className={(isVisible ? 'fadeIn' : 'fadeOut')}>
          My name is Babak Hadady, I am currently a Computer Science major at the University of
          British Columbia graduating in 2025. I am also a undergraduate teaching assistant for CPSC 110, 
          an introductory computer science course.
        </p>
        <h2 ref={myRef} className={(isVisible ? 'fadeIn' : 'fadeOut')} id="aboutme"> About </h2> */}
        {/* <h2 ref={myRef} className={(isVisible ? 'fadeIn' : 'fadeOut')} id="experience"> Experiences </h2> */}
        <Paragraph>
          <Fade big delay={1000}>
              <p> My name is Babak Hadady,
             I'm a Computer Science major at UBC.
               I'm also an undergraduate teaching assistant for CPSC 110,
                an intro computer science course. </p>
          </Fade>
        </Paragraph>

      </div>
    </div >
  );
}
