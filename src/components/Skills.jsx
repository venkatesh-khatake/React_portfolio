import "./Skills.css";
import React from "../images/react.png";
import Bootstrap from "../images/bootstrap.png";
import Css from "../images/css.png";
import Html from "../images/html.png";
import Java from "../images/java.png";
import Javascript from "../images/Javascript.png";
import Figma from "../images/figma.png";








export function Skills(){
    return(
        <div class="skills-page" id = "skills">
        <h4>my skills</h4>
        <div class="skill-div">
          <div class="skill-box">
            <img src={Html} alt="" />
            <h5>HTML</h5>
          </div>
          <div class="skill-box">
            <img src= {Css} alt="" />
            <h5>CSS</h5>
          </div>
          <div class="skill-box">
            <img src={Javascript} alt="" />
            <h5>JavaScript</h5>
          </div>
          <div class="skill-box">
            <img src={Bootstrap} alt="" />
            <h5>Bootstrap</h5>
          </div>
          <div class="skill-box">
            <img src={React} alt="" />
            <h5>React Js</h5>
          </div>
          <div class="skill-box">
            <img src={Java} alt="" />
            <h5>Core Java</h5>
          </div>
          <div class="skill-box">
            <img src={Figma} alt="" />
            <h5>Figma</h5>
          </div>
        </div>
      </div>
    )
}