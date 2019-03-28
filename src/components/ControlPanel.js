import React from "react";
import styled from 'styled-components';
import ImageControls from './ImageControls';
import ButtonList from './ColorButtons/ButtonList';

const ControlsContainer = styled.div`
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
      <ButtonList {...props} imageName="background" />
        <ImageBox>
          <ImageControls {...props} imageName="lower" />
          <ImageControls {...props} imageName="back" />
          <ImageControls {...props} imageName="middle" />
          <ImageControls {...props} imageName="front" />
        </ImageBox>
    </ControlsContainer>
  );
};

export default ControlPanel;