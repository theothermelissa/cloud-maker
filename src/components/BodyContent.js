import React, { Component } from "react";
import styled, { keyframes } from "styled-components";
import smoke from "../images/smoke.png";
import { spin, spinLeft, spinRight, Extraslow, Slow, Medium, Fast, Extrafast } from "./Spins";
import ButtonList from "./ColorButtons/ButtonList";
import colors from "./ColorsForButtons";
import ControlPanel from './ControlPanel';
import ImageControls from './ImageControls';
// import { assign } from "lodash";

const { lightestgray, mediumgray, charcoal, mint, darkmint, coral, darkcoral, cream } = colors;

const speedInSeconds = (speed) => {
  // console.log("Speed in seconds: ", `${speed}s`);
  return `${speed}s`
};
const sizeInPixels = (size) => {
  // console.log("Size in pixels: ", `${size}px`);
  return `${size}px`
};
const convertToFraction = value => {
  // console.log("Converted to fraction: ", value/100);
  return value/100;
};

const BodyContainer = styled.div`
  /* margin: -5vw; */
  box-sizing: border-box;
  left: 0;
  right: 0;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh;
  /* align-items: center; */
  background-color: white;
  `;

const SmokeBackground = styled.div`
  position: relative;
  /* box-sizing: border-box; */
  height: 55vh;
  width: 100vw;
  overflow: hidden;
  background: ${props => props.backgroundColor};
  `;

const Image = styled.img`
  name: ${props => props.imageName};
  position: absolute;  
  left: ${props => sizeInPixels(props.leftPosition)};
  top: ${props => sizeInPixels(props.topPosition)};
  opacity: ${props => convertToFraction(props.opacity)};
  width: auto;
  margin: 0px;
  height: ${props => sizeInPixels(props.size)};
  animation: 
    ${props => spin(props.direction)} 
    ${ props => speedInSeconds(props.speed) } 
    ${props => props.animationTimingFunction} 
    infinite;
  `;

class BodyContent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      background: {
        color: charcoal,
      },
      lower: {  
        imageName: "lower",
        leftPosition: -350,
        topPosition: 50,
        speed: 80,
        direction: "left",
        opacity: 20,
        size: 2200,
        animationTimingFunction: "linear",
      },
      back: {  
        imageName: "back",
        speed: 150,
        leftPosition: -600,
        topPosition: -500,
        direction: "right",
        size: 2400,
        opacity: 60,
        animationTimingFunction: "linear",
      },
      middle: {  
        imageName: "middle",
        speed: 150,
        leftPosition: -300,
        topPosition: -200,
        direction: "left",
        size: 1400,
        opacity: 60,
        animationTimingFunction: "linear",
      },
      front: {  
        imageName: "front",
        speed: 150,
        direction: "right",
        leftPosition: 250,
        topPosition: -160,
        opacity: 75,
        size: 1700,
        animationTimingFunction: "linear",
      },
    }
  }

  render() {
    return (
      <BodyContainer>
      <SmokeBackground backgroundColor={this.state.background.color}>
        <Image {...this.state.back} src={smoke} alt="Smoke" />
        <Image {...this.state.middle} src={smoke} alt="Smoke" />
        <Image {...this.state.front} src={smoke} alt="Smoke" />
        <Image {...this.state.lower} src={smoke} alt="Smoke" />
      </SmokeBackground>
      <ControlPanel {...this.state} handleChange={this.handleChange} />
    </BodyContainer>
  )}

  handleChange = (imageName, property, value) => {
    // console.log("imageName: ", imageName);
    // console.log("property: ", property);
    // console.log("value: ", value);
    // console.log("Change It To: ", value);
    this.setState(previousState => ({
      ...previousState,
      [imageName]: {
        ...previousState[imageName],
          [property]: value,
      }
    })
    )
    console.log( "current state: ", this.state);  
  }
};


export default BodyContent;