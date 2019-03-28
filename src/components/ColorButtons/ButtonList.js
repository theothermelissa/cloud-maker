import React from "react";
import styled from "styled-components";
import Button from './Button';
import colors from "./ColorsForButtons";
import _ from "lodash";

const ButtonContainer = styled.div`
  display: flex;
  flex-flow: row wrap;
  width: 100%;
  position: relative;
  /* margin: 5px; */
  /* align-items: stretch;
  align-content: stretch;
  justify-content: stretch; */
  `;

const ButtonList = ({ handleChange, imageName }) => {
  const setColor = (hexValue) => {
    console.log(hexValue);
    return (
      handleChange(imageName, "color", hexValue)
  )};

  return (
    <ButtonContainer> {
    _.toPairs(colors).map( ([colorName, hexValue]) => (
        <Button setBackgroundColor={setColor} key={hexValue} name={colorName} hexValue={hexValue} />
    ))
  }</ButtonContainer>
)};


export default ButtonList;