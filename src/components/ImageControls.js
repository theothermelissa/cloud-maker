import React from "react";
import styled from 'styled-components';
import SliderInput from './SliderInput';
// import { Radio } from 'antd';
import DirectionButtons from './DirectionButtons';
import EaseButtons from './EaseButtons';
import { mycoral, mylightestgray } from './Colors';


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

const convertFromFraction = value => {
  console.log("Converted from fraction: ", value*100);
  return value*100;
}

const ImageControlsContainer = styled.div`
  display: flex;
  flex-flow: row wrap;
  min-height: 200px;
  width: 100%;
  align-items: start;
  justify-content: space-around;
  margin: 0px 7px;
  padding: 5px 15px;
  /* background-color: ${mylightestgray}; */
  /* border-radius: 7px; */
  `;
const ControlsTitle = styled.h2`
  color: ${mycoral};
  width: 100%;
  /* color: ${mycoral}; */
  `;

// handleChange,
// imageName,
// max,
// min,
// defaultValue,
// formatter,
// firstIcon,
// secondIcon 

const ImageControls = (props) => {
  // console.log("Props passed to ImageControls: ", props);
  const { handleChange, imageName } = props;
  const layerSettings = props[imageName];

  return (
    <ImageControlsContainer >
      <ControlsTitle >{imageName}</ControlsTitle>
      <DirectionButtons 
        name={imageName} 
        direction={layerSettings.direction} 
        setDirection={(directionValue) => 
        handleChange(imageName, "direction", directionValue)} />
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
        secondIcon="down"
         />
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
        secondIcon="down"
         />
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
        secondIcon="down"
         />
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
        secondIcon="down"
         />
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
        secondIcon="down"
         />
      <EaseButtons 
        name={imageName} 
        animationTimingFunction={layerSettings.animationTimingFunction} 
        setEase={(ease) => 
        handleChange(imageName, "animationTimingFunction", ease)} />
    </ImageControlsContainer>
  );
};

// ReactDOM.render(<ImageControls min={0} max={20} />, mountNode);

export default ImageControls;