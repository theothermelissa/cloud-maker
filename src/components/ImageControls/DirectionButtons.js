import React from "react";
import styled from 'styled-components';
import { Radio } from 'antd';
import { mylightestgray } from '../Colors';

const RadioGroup = Radio.Group;

const DirectionButtonsContainer = styled.div`
  display: flex;
  flex-flow: row wrap;
  position: relative;
  width: 100%;
  align-items: start;
  border-bottom: 1px solid ${mylightestgray};
  padding: 5px 0px;
  `;

export default class DirectionButtons extends React.Component {
  render() {
    const { name, setDirection, direction } = this.props;
    return (
      <DirectionButtonsContainer>
        <RadioGroup name={name} onChange={(event) => setDirection(event.target.value)} value={direction}>
          <Radio color={mylightestgray} value={"left"}>Spin Left</Radio>
          <Radio color={mylightestgray} value={"right"}>Spin Right</Radio>
        </RadioGroup>
      </DirectionButtonsContainer>
    );
  }
};
