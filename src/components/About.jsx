import React from 'react';
import styled from 'styled-components';

const Section = styled.section`
  min-height: 90vh;
  padding: 8rem 2rem 4rem 2rem;
  display: flex;
  background: linear-gradient(180deg, #121212 98%, #000);
  justify-content: center;
  align-items: center;
`;

const Container = styled.div`
  max-width: 1100px;
  display: flex;
  gap: 5rem;
  flex-wrap: wrap;
`;

const Left = styled.div`
  flex: 1.5;
  color: #f3f3f3;

  h2 {
    font-family: ${({theme}) => theme.font.heading};
    font-size: 2.5rem;
    color: ${({theme}) => theme.colors.gold};
    margin-bottom: 1.2rem;
  }
  p {
    font-family: ${({theme}) => theme.font.body};
    font-size: 1.2rem;
    line-height: 1.6;
    margin-bottom: 1.2rem;
  }
  blockquote {
    font-style: italic;
    margin-top: 2rem;
    color: #fff;
  }
`;

const Right = styled.div`
  flex: 1;
  min-width: 300px;
  border-radius: 1.5rem;
  box-shadow: 0 0 44px #000a;
  background:
    radial-gradient(ellipse at 60% 30%, #CBA13515 0%, transparent 70%),
    url('/assets/about-abstract.jpg') center/cover no-repeat;
  height: 360px;
`;

export default function About() {
  return (
    <Section id="about">
      <Container>
        <Left>
          <h2>The Face Behind the Shadow.</h2>
          <p>
            Incognoir isn’t just another security layer. We’re architects of invisible protection,
            building safeguards that learn and evolve. AI-driven, adaptive, and entirely silent, we keep
            your most sensitive operations unseen by malicious eyes.
          </p>
          <p>
            Our mission: Change the foundation of cyber defense from the reactive to the anticipatory—
            so that you’re not just protected, but always one step ahead.
          </p>
          <blockquote>“We are not seen. We are felt.”</blockquote>
        </Left>
        <Right />
      </Container>
    </Section>
  );
}

