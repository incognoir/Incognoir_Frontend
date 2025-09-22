import React from "react";
import styled from "styled-components";

const Section = styled.section`
  background: #0a0c12;
  padding: 6.5rem 1.3rem 3.7rem 1.3rem;
  color: ${({ theme }) => theme.colors.light};
  text-align: center;
`;

const Title = styled.h2`
  color: ${({ theme }) => theme.colors.gold};
  margin-bottom: 1.7rem;
`;

const Grid = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 3rem;
  justify-content: center;
  max-width: 980px;
  margin: 0 auto;
`;

const Card = styled.div`
  flex: 1 0 270px;
  min-width: 260px;
  background: #10131e;
  padding: 2.1rem 1.6rem;
  border-radius: 2rem;
  box-shadow: 0 2px 24px #bfd9ff08;
  text-align: left;
  margin: 1rem;
  h3 {
    color: ${({ theme }) => theme.colors.gold};
    font-size: 1.24rem;
    margin-bottom: 0.5rem;
    letter-spacing: 1.2px;
  }
  p {
    font-size: 1.09rem;
    color: #d0daee;
    margin-bottom: 0;
    line-height: 1.42;
  }
`;

export default function WhyIncogir() {
  return (
    <Section id="why">
      <Title>Why Incogir?</Title>
      <Grid>
        <Card>
          <h3>Silent, Seamless, Smart</h3>
          <p>Your administrators don’t stop working. Neither should your cybersecurity. Incogir watches, learns, and defends quietly—detecting threats before they happen.</p>
        </Card>
        <Card>
          <h3>More Than Passwords</h3>
          <p>We verify who is behind every access attempt, through unique behavioral fingerprints and neural pattern analysis.</p>
        </Card>
        <Card>
          <h3>Cloud-First, Lightweight</h3>
          <p>No heavy agents. Your security runs from the cloud. A browser extension connects you seamlessly, minimizing footprint.</p>
        </Card>
      </Grid>
    </Section>
  );
}
