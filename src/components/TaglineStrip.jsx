import React from 'react';
import styled, { keyframes } from 'styled-components';

const scrollLeft = keyframes`
  from {
    transform: translateX(100%);
  }
  to {
    transform: translateX(-100%);
  }
`;

const Strip = styled.div`
  width: 100vw;
  padding: 0.5rem 0;
  background: black;
  overflow: hidden;
  color: ${({theme}) => theme.colors.gold};
  font-size: 1.25rem;
  font-family: ${({theme}) => theme.font.heading};
  user-select: none;

  .scroll-text {
    display: inline-block;
    white-space: nowrap;
    animation: ${scrollLeft} 16s linear infinite;
  }
`;

export default function TaglineStrip() {
  return (
    <Strip>
      <span className="scroll-text">
        We craft the unseen. We build the inevitable.&nbsp;&nbsp;&nbsp;
      </span>
    </Strip>
  );
}
