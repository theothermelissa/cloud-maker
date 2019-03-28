import React from "react";
import styled from 'styled-components';
import SliderInput from './SliderInput';
import DirectionButtons from './DirectionButtons';
import EaseButtons from './EaseButtons';
import { mynavy, mylightestgray } from '../Colors';

const MAX_SPEED = 300;
const MIN_SPEED = 15;
const MIN_SIZE = 500;
const MAX_SIZE = 2500;
const MIN_OPACITY = 0;
const MAX_OPACITY = 100;
const MIN_POSITION = -900;
const MAX_POSITION = 900;

const speedFormatter = value => {
  return `${value}s`;
};
const opacityFormatter = value => {
  return `${value}%`;
};
const sizeFormatter = value => {
  return `${value}px`;
};

const ImageControlsContainer = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-flow: row wrap;
  position: relative;
  width: 100%;
  align-items: start;
  justify-content: space-around;
  margin: 10px;
  padding: 5px 15px;
  background-color: ${mylightestgray};
  border-radius: 5px;
`;

const ControlsTitle = styled.h2`
  width: 100%;
  color: ${mynavy};
  font-size: 18px;
  font-weight: bold;
`;

const ImageControls = (props) => {
  const { handleChange, imageName } = props;
  const layerSettings = props[imageName];

  return (
    <ImageControlsContainer >
      <ControlsTitle >{imageName}</ControlsTitle>
      <SliderInput 
        name={imageName} 
        property="speed"
        handleChange={handleChange}
        max={MAX_SPEED}
        min={MIN_SPEED}
        defaultValue={layerSettings.speed}
        value={layerSettings.speed}
        formatter={speedFormatter}
        firstIcon="up"
        secondIcon="down" />
      <SliderInput 
        name={imageName} 
        property="opacity"
        handleChange={handleChange}
        max={MAX_OPACITY}
        min={MIN_OPACITY}
        defaultValue={layerSettings.opacity}
        value={layerSettings.opacity}
        formatter={opacityFormatter}
        firstIcon="up"
        secondIcon="down" />
      <SliderInput 
        name={imageName} 
        property="size"
        handleChange={handleChange}
        max={MAX_SIZE}
        min={MIN_SIZE}
        defaultValue={layerSettings.size}
        value={layerSettings.size}
        formatter={sizeFormatter}
        firstIcon="up"
        secondIcon="down" />
      <SliderInput 
        name={imageName} 
        property="leftPosition"
        handleChange={handleChange}
        max={MAX_POSITION}
        min={MIN_POSITION}
        defaultValue={layerSettings.leftPosition}
        value={layerSettings.leftPosition}
        formatter={sizeFormatter}
        firstIcon="up"
        secondIcon="down" />
      <SliderInput 
        name={imageName} 
        property="topPosition"
        handleChange={handleChange}
        max={MAX_POSITION}
        min={MIN_POSITION}
        defaultValue={layerSettings.topPosition}
        value={layerSettings.topPosition}
        formatter={sizeFormatter}
        firstIcon="up"
        secondIcon="down" />
      <DirectionButtons 
        name={imageName} 
        direction={layerSettings.direction} 
        setDirection={(directionValue) => 
        handleChange(imageName, "direction", directionValue)} />
      <EaseButtons 
        name={imageName} 
        animationTimingFunction={layerSettings.animationTimingFunction} 
        setEase={(ease) => 
          handleChange(imageName, "animationTimingFunction", ease)} />
    </ImageControlsContainer>
  );
};

export default ImageControls;
