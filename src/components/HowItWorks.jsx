import React from "react";
import styled from "styled-components";

const Section = styled.section`
  background: #0d111a;
  color: ${({ theme }) => theme.colors.light};
  padding: 6rem 0 4rem 0;
  text-align: center;
`;

const Title = styled.h2`
  color: ${({ theme }) => theme.colors.gold};
  margin-bottom: 2rem;
`;

const Steps = styled.div`
  max-width: 950px;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  gap: 2.2rem;
  justify-content: center;
`;

const StepCard = styled.div`
  background: #171c29;
  border-radius: 1.5rem;
  padding: 2.1rem 1.7rem 1.7rem 1.7rem;
  min-width: 260px;
  max-width: 300px;
  margin: 0.6rem;
  text-align: left;
  box-shadow: 0 2px 22px #6ddfff09;
  h3 {
    color: ${({ theme }) => theme.colors.gold};
    font-size: 1.13rem;
    margin-bottom: 1rem;
  }
  p { font-size: 1rem; color: #c3cddf; }
`;

export default function HowItWorks() {
  return (
    <Section id="how">
      <Title>How It Works</Title>
      <Steps>
        <StepCard>
          <h3>Step 1: Amplify Intent Detection</h3>
          <p>
            Our AI algorithms continuously analyze typing patterns, cursor movements, and login behaviors to identify genuine users versus mimics.
          </p>
        </StepCard>
        <StepCard>
          <h3>Step 2: Adaptive Behavioral Defense</h3>
          <p>
            Upon detecting anomalies, Incogir instantly isolates suspicious activity — using looped simulations and honeypots — without halting workflows.
          </p>
        </StepCard>
        <StepCard>
          <h3>Step 3: Silent Protection in Action</h3>
          <p>
            Threats are blocked and logged automatically. Your admins stay productive, while your sensitive data stays secure.
          </p>
        </StepCard>
      </Steps>
    </Section>
  );
}
