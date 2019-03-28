import React from "react";
import { Slider } from 'antd';
import styled from 'styled-components';

const MAX_OPACITY = 100;
const MIN_OPACITY = 0;


const SliderWrapper = styled.div`
  box-sizing: border-box;
  position: relative;
  width: 30vw;
  padding: 0px 30px;
  .ant-slider {
    margin-top: 0;
  }
`;

const formatter = value => {
  return `${value}%`;
}
class OpacitySlider extends React.Component {
  constructor(props) { 
    super(props);
    this.state = {
      value: MIN_OPACITY,
    }
  };

  handleChange = (value) => {
    this.setState({ value });
  }
  
  render() {
    const { max, min } = this.props;
    const { value } = this.state;
    const mid = ((max - min) / 2).toFixed(5);
    const preColor = value >= mid ? '' : 'rgba(0, 0, 0, .45)';
    const nextColor = value >= mid ? 'rgba(0, 0, 0, .45)' : '';
    return (
      <SliderWrapper>
        <Slider {...this.props} onChange={this.handleChange} min={min || MIN_OPACITY} max={max || MAX_OPACITY} tipFormatter={formatter} value={value} />
      </SliderWrapper>
    );
  }
}

// ReactDOM.render(<OpacitySlider min={0} max={20} />, mountNode);

export default OpacitySlider;