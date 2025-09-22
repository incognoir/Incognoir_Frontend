import React from "react";
import styled from "styled-components";

const HeroWrap = styled.section`
  min-height: 100vh;
  width: 100vw;
  position: relative;
  overflow: hidden;
  background: #01030c;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const VideoBG = styled.video`
  position: absolute;
  width: 100vw;
  height: 100vh;
  top: 0; left: 0;
  object-fit: cover;
  filter: brightness(0.3) blur(0.5px);
  z-index: 1;
`;

const Content = styled.div`
  z-index: 2;
  position: relative;
  text-align: center;
  color: ${({ theme }) => theme.colors.light};
  margin-top: -3vh;
`;

const Logo = styled.img`
  width: 110px;
  border-radius: 12px;
  margin-bottom: 2rem;
  box-shadow: 0 0 40px #74d0ff30;
`;

const Headline = styled.h1`
  font-family: ${({ theme }) => theme.font.heading};
  font-size: 3.7rem;
  background: linear-gradient(90deg, #17d1ff 10%, #cba135 90%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  letter-spacing: 2px;
`;

const Subheadline = styled.h2`
  font-family: ${({ theme }) => theme.font.body};
  color: #CBA135;
  font-size: 1.35rem;
  max-width: 480px;
  margin: 1.7rem auto 2.7rem auto;
  line-height: 1.4;
`;

const CTA = styled.a`
  padding: 0.85em 2em;
  background: ${({ theme }) => theme.colors.gold};
  color: #181a20;
  font-weight: 700;
  border-radius: 50px;
  box-shadow: 0 0 20px #cba13555;
  margin: 0 .6em;
  font-size: 1.1rem;
  text-decoration: none;
  transition: background .18s, color .18s;
  &:hover {
    background: ${({ theme }) => theme.colors.light};
    color: #121212;
  }
`;

export default function HeroSection() {
  return (
    <HeroWrap id="home">
      <VideoBG autoPlay loop muted playsInline src="/video/hero-loop.mp4" />
      <Content>
        <Logo src="/logo.jpg" alt="Incogir logo"/>
        <Headline>Trust in the Silence</Headline>
        <Subheadline>
          The world’s first invisible, AI-driven behavioral cybersecurity platform — protecting admin access with zero disruption.
        </Subheadline>
        <CTA href="#about">Get Started</CTA>
        <CTA href="#contact" style={{background:'#181a20', color:'#CBA135', border:'1.5px solid #cba135'}}>Request a Demo</CTA>
      </Content>
    </HeroWrap>
  );
}
