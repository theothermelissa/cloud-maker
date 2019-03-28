import React from "react";
import styled from 'styled-components';
import ImageControls from './ImageControls/ImageControls';
import ButtonList from './ColorButtons/ButtonList';

const ControlsContainer = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: start;
  justify-content: center;
`;

const ImageBox = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
`;

const ControlPanel = (props) => {
  return (
    <ControlsContainer>
        <ImageBox>
          <ImageControls {...props} imageName="lower" />
          <ImageControls {...props} imageName="back" />
          <ImageControls {...props} imageName="middle" />
          <ImageControls {...props} imageName="front" />
        </ImageBox>
      <ButtonList {...props} imageName="background" />
    </ControlsContainer>
  );
};

export default ControlPanel;
