import React from "react";
import styled from 'styled-components';
import { Radio } from 'antd';

const RadioGroup = Radio.Group;

export default class EaseButtons extends React.Component {
  constructor(props) {
    super(props);
    // console.log("Props passed to EaseButtons: ", props)
    // console.log();

  }
  render() {
    const { name, setEase, animationTimingFunction } = this.props;
    return (
      <RadioGroup name={name} onChange={(event) => setEase(event.target.value)} value={animationTimingFunction}>
        <Radio value={"ease-in"}>Ease In</Radio>
        <Radio value={"ease-out"}>Ease Out</Radio>
        <Radio value={"ease-in-out"}>Ease In Out</Radio>
        <Radio value={"linear"}>Linear</Radio>
      </RadioGroup>
    );
  }
};
