import React from "react";
import styled from "styled-components";
import Button from './Button';
import colors from "../ColorsForButtons";
import _ from "lodash";

const ButtonContainer = styled.span`
  display: flex;
  flex-flow: row wrap;
  width: 100%;
  margin: 10px;
  align-items: center;
  justify-content: space-around;
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