import React from "react";
import { Slider, Icon } from 'antd';
import styled from 'styled-components';
import { mycoral, mycharcoal } from '../Colors';

const Tray = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  `;

const SliderName = styled.p`
  /* font-size: 1.5em; */
  color: ${mycharcoal};
  `;

const SliderBox = styled.div`
  /* display: flex;
  flex-direction: row; */
  position: relative;
  width: 90%;
  padding: 0px 20px;
  .anticon {
    position: absolute;
    margin-top: 0px;
    top: -2px;
    width: 16px;
    height: 16px;
    line-height: 1;
    /* font-size: 16px; */
    color: white;
    &:first-child {
      left: 0;
    }
    &:last-child {
      right: 0;
    }
  }
  .ant-slider {
    margin-top: 0;
  }
`;

const SliderInput = (props) => {
  const { 
    property,
    handleChange,
    name,
    max,
    min,
    defaultValue,
    formatter,
    firstIcon,
    secondIcon 
  } = props;

  const changeSetting = (value) => {
    return (
      handleChange(name, property, value)
    )
  };

  return (
    <Tray>
      <SliderName>{property}</SliderName>
      <SliderBox>
        {/* <Icon type={firstIcon} /> */}
        <Slider 
          onChange={changeSetting}
          defaultValue={defaultValue}
          min={min}
          max={max}
          tipFormatter={formatter}
          slider-rail-background-color={mycoral} />
        {/* <Icon type={secondIcon} /> */}
      </SliderBox>
    </Tray>
  )
};

export default SliderInput;

