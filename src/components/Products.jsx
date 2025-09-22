import React from 'react';
import styled from 'styled-components';

const Section = styled.section`
  position: relative;
  padding: 8rem 2rem 6rem 2rem;
  min-height: 120vh;
  background: #000;
  color: ${({theme}) => theme.colors.light};
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: hidden;
`;

const Banner = styled.div`
  text-align: center;
  max-width: 700px;
  margin-bottom: 4rem;
  z-index: 10;

  h2 {
    color: ${({theme}) => theme.colors.gold};
    font-size: 2.6rem;
    margin-bottom: 0.4rem;
  }
  p {
    color: #eee;
    font-family: ${({theme}) => theme.font.body};
    font-size: 1.15rem;
    line-height: 1.5;
  }
  button {
    background: ${({theme}) => theme.colors.gold};
    color: #111;
    font-weight: 600;
    border-radius: 40px;
    padding: 0.8em 2.25em;
    border: none;
    font-size: 1.15rem;
    margin: 1.7rem 1rem 0 1rem;
    box-shadow: 0 0 26px #cba135cc;
    cursor: pointer;
    transition: background 0.2s ease;

    &:hover {
      background: ${({theme}) => theme.colors.light};
    }
  }
`;

export default function Products() {
  return (
    <Section id="products">
      <Banner>
        <h2>The First Living Cybersecurity</h2>
        <p>
          Adaptive. Autonomous. Alive.<br />
          Phase 1 of a new era. A system that evolves with every threat,
          integrates with your environment, and safeguards your digital life as if it were alive.
        </p>
        <button>Request Early Access</button>
        <button style={{background: '#222', color: '#cba135', border: '2px solid #cba135'}}>
          See How It Works
        </button>
      </Banner>
      {/* Optional add feature cards or visualizations here */}
    </Section>
  );
}
