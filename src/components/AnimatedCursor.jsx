import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';

const Cursor = styled.div`
  position: fixed;
  pointer-events: none;
  z-index: 9999;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  border: 2px solid ${({ theme }) => theme.colors.gold};
  background: rgba(203,161,53,0.09);
  transform: translate(-50%, -50%);
  mix-blend-mode: difference;
  transition: all 0.12s cubic-bezier(0.4,0,0.2,1);
  &.grow {
    transform: translate(-50%, -50%) scale(1.35);
  }
  &.ring {
    border-width: 4px;
    box-shadow: 0 0 16px ${({ theme }) => theme.colors.gold};
  }
`;

export default function AnimatedCursor() {
  const cursorRef = useRef();

  useEffect(() => {
    const move = (e) => {
      if (cursorRef.current) {
        cursorRef.current.style.left = e.clientX + 'px';
        cursorRef.current.style.top = e.clientY + 'px';
      }
    };

    const addEffect = () => {
      cursorRef.current?.classList.add('grow', 'ring');
    };
    const removeEffect = () => {
      cursorRef.current?.classList.remove('grow', 'ring');
    };

    window.addEventListener('mousemove', move);

    document.querySelectorAll('a,button,.card').forEach(el => {
      el.addEventListener('mouseenter', addEffect);
      el.addEventListener('mouseleave', removeEffect);
    });

    return () => {
      window.removeEventListener('mousemove', move);
      document.querySelectorAll('a,button,.card').forEach(el => {
        el.removeEventListener('mouseenter', addEffect);
        el.removeEventListener('mouseleave', removeEffect);
      });
    };
  }, []);

  return <Cursor ref={cursorRef} />;
}
