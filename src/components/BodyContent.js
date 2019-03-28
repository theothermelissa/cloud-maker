import React, { Component } from "react";
import styled from "styled-components";
import smoke from "../images/smoke.png";
import { spin } from "./Spins";
import colors from "./ColorButtons/ColorsForButtons";
import ControlPanel from './ControlPanel';
import { Button } from 'antd';

const { charcoal } = colors;

const speedInSeconds = (speed) => {
  return `${speed}s`
};
const sizeInPixels = (size) => {
  return `${size}px`
};
const convertToFraction = value => {
  return value/100;
};

const ExplanationBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  align-self: center;
  flex: 1;
  width: 40vw;
  font-size: .9em;
  height: 100%;
  `;

const Explaination = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  `;

  const GetStartedButton = styled(Button)`
    width: 200px;
    height: 50px;
    margin: 10px;
  `;

const BodyContainer = styled.div`
  box-sizing: border-box;
  left: 0;
  right: 0;
  display: flex;
  flex-direction: column;
  background-color: white;
  min-height:100%;
  `;

const SmokeBackground = styled.div`
  position: relative;
  box-sizing: border-box;
  height: 50vh;
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
      showControls: false,
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
      { this.state.showControls ? (
        <ControlPanel {...this.state} handleChange={this.handleChange} />
      ) : (
        <ExplanationBox>
          <Explaination>
            <p>
              Video? Nope. 
            </p>
            <p>
              It's four layers of a single image, styled and animated with simple CSS. And by changing the 
              background color, speed, opacity, size, and positioning, you can achieve vastly different effects.
            </p>
          </Explaination>
          <GetStartedButton type="primary" onClick={() => this.setState({showControls: true})}>Let's Play</GetStartedButton>
        </ExplanationBox>
      )}
    </BodyContainer>
  )}

  handleChange = (imageName, property, value) => {
    this.setState(previousState => ({
      ...previousState,
      [imageName]: {
        ...previousState[imageName],
          [property]: value,
      }
    })
    )
    // console.log( "current state: ", this.state);  
  }
};


export default BodyContent;