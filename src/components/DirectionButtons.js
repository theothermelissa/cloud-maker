import React from "react";
import styled from 'styled-components';
import { Radio } from 'antd';

const RadioGroup = Radio.Group;

export default class DirectionButtons extends React.Component {
  constructor(props) {
    super(props);
    // console.log("Props passed to DirectionButtons: ", props)
    // console.log();

  }
  render() {
    const { name, setDirection, direction } = this.props;
    return (
      <RadioGroup name={name} onChange={(event) => setDirection(event.target.value)} value={direction}>
        <Radio value={"left"}>Left</Radio>
        <Radio value={"right"}>Right</Radio>
      </RadioGroup>
    );
  }
};
