import React from "react";
import styled from "styled-components";

const HeroSection = styled.section`
  height: 100vh;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  background: #06080b;
  overflow: hidden;
`;
const VideoBg = styled.video`
  position: absolute;
  width: 100vw;
  height: 100vh;
  z-index: 0;
  top: 0; left: 0;
  object-fit: cover;
  filter: brightness(.3);
`;

const HeroContent = styled.div`
  position: relative;
  z-index: 1;
  color: ${({ theme }) => theme.colors.light};
  margin-left: 8vw;
  max-width: 620px;
  h1 { font-size: 3.8rem; margin-bottom: .3em; }
  h2 { color: ${({ theme }) => theme.colors.gold}; font-size: 1.65rem; margin-bottom: 2em; }
  .cta {
    background: ${({ theme }) => theme.colors.gold};
    color: #181a20;
    font-weight: 700;
    border-radius: 50px;
    padding: 1.1em 2.4em;
    text-decoration: none;
    font-size: 1.2em;
    outline: none;
    border: none;
    box-shadow: 0 0 28px #ffe70033;
    margin-right: 1.3em;
    transition: background .18s;
    &:hover { background: ${({ theme }) => theme.colors.accent}; }
  }
`;

export default function Hero() {
  return (
    <HeroSection>
      <VideoBg autoPlay loop muted playsInline src="/video/background.mp4" />
      <HeroContent>
        <h1>Trust in the Silence</h1>
        <h2>
          The world’s first invisible, AI-driven behavioral cybersecurity platform — protecting admin access with zero disruption.
        </h2>
        <a href="/products" className="cta">Discover</a>
        <a href="/login" className="cta" style={{background:'#181a20', color:'#ffe700', border:'2px solid #ffe700'}}>Get Started</a>
      </HeroContent>
    </HeroSection>
  );
}
