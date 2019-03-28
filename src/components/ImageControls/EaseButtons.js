import React from "react";
import styled from 'styled-components';
import { Radio } from 'antd';


const RadioGroup = Radio.Group;

const EaseButtonsContainer = styled.div`
  display: flex;
  flex-flow: row wrap;
  position: relative;
  width: 100%;
  align-items: start;
  padding: 5px 0px;
  `;

export default class EaseButtons extends React.Component {
  render() {
    const { name, setEase, animationTimingFunction } = this.props;
    return (
      <EaseButtonsContainer>
        <RadioGroup name={name} onChange={(event) => setEase(event.target.value)} value={animationTimingFunction}>
          <Radio value={"ease-in"}>Ease In</Radio>
          <Radio value={"ease-out"}>Ease Out</Radio>
          <Radio value={"ease-in-out"}>Ease In Out</Radio>
          <Radio value={"linear"}>Linear</Radio>
        </RadioGroup>
      </EaseButtonsContainer>
    );
  }
};
