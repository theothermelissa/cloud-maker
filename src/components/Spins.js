import styled, { keyframes} from "styled-components";

export const Extraslow = "250s";
export const Slow = "200s";
export const Medium = "150s";
export const Fast = "90s";
export const Extrafast = "30s";

export const spinRight = keyframes`
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
`;

export const spinLeft = keyframes`
  from { transform: rotate(360deg); }
  to { transform: rotate(0deg); }
`;

export const spin = (direction) => {
  let result;
  switch (direction) {
    case "right":
      result = spinRight;
      break;
    case "left":
      result = spinLeft;
      break;
    // default:
    //   result = spinRight;
  }
  return result;
};
