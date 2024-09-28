import { keyframes } from '@emotion/react';
import styled from '@emotion/styled';

const rotate = keyframes`
  from {
		transform: rotate(0deg);
	}
	to {
		transform: rotate(360deg);
	}
`;

export const SpinnerWrapper = styled.div`
  display: inline-block;
  position: relative;
  width: 55px;
  height: 55px;
  align-self: center;
`;

export const SpinnerOuter = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  animation: ${rotate} 1.2s linear infinite;
  object-fit: contain;
`;

export const SpinnerInner = styled.div`
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;

  img {
    width: 21px;
    height: 21px;
  }
`;
