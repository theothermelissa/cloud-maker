import React from "react";
import styled from "styled-components";
import { mylightestgray } from '../Colors';

const ColorName = styled.h2`
  color: white;
  /* font-size: .9em; */
  /* font-weight: bold; */
  text-transform: uppercase;
  margin: 0;
  `;

const ColorButton = styled.button`
  display: flex;
  flex-grow: 1;
  justify-content: center;
  margin: 3px 0px;
  /* min-width: 13vw; */
  /* padding: 3px; */
  border: 5px solid white;
  border-radius: 15px;
  background-color: ${ ({color}) => color };
  /* background-color: ${ ({color}) => color }; */
  `;


const Button = ({ name, hexValue, setBackgroundColor }) => (
    <ColorButton color={hexValue} onClick={() => setBackgroundColor(hexValue)} >
      <ColorName color={hexValue}>
        {name}
      </ColorName>
    </ColorButton>
);

export default Button;