import React from "react";
import styled from "styled-components";

const Section = styled.section`
  width: 100%; background: #0b0c10;
  color: #fff;
  padding: 6em 0 6em 9vw;
  display: flex;
  align-items: center;
  gap: 2.5em;
`;

const Left = styled.div`
  width: 30vw;
  min-width: 250px;
`;

const Title = styled.h2`
  color: ${({ theme }) => theme.colors.gold};
  font-size: 2.1rem;
  margin-bottom: .9em;
`;

const CTA = styled.a`
  display: inline-block;
  margin-top: 1.7em;
  background: ${({ theme }) => theme.colors.gold};
  color: #181a20;
  padding: 1em 2.3em;
  border-radius: 2em;
  box-shadow: 0 3px 20px #ffe70044;
  font-weight: bold;
  font-size: 1.18rem;
`;

const Right = styled.img`
  max-width: 330px; border-radius: 1.3em; box-shadow: 0 7px 35px #ffe70013;
`;

export default function DiscoverSection() {
  return (
    <Section>
      <Left>
        <Title>Experience True Next-Gen Admin Security</Title>
        <p>
          Our platform uses behavioral fingerprinting and AI to secure your workflows — unbreakable by design and invisible in use.
        </p>
        <CTA href="/contact">Book a Demo</CTA>
      </Left>
      <Right src="/logo.jpg" alt="Incognoir logo" />
    </Section>
  );
}
