import React from "react";
import styled from "styled-components";

const Section = styled.section`
  width: 100%;
  background: ${({ theme }) => theme.colors.bg2};
  display: flex; flex-wrap: wrap; justify-content: center;
  padding: 6em 0 4em 0;
  gap: 3em;
`;

const Card = styled.div`
  background: ${({ theme }) => theme.colors.cardBg};
  border-radius: 1em;
  box-shadow: 0 8px 40px #ffe70010;
  color: #fff;
  width: 340px;
  min-height: 210px;
  padding: 2.1em 1.5em;
  text-align: left;
  h3 { color: ${({ theme }) => theme.colors.gold}; font-size: 1.24rem; margin-bottom: .8rem;}
  p { color: #e6ecca; }
`;

export default function FeatureSection() {
  return (
    <Section>
      <Card>
        <h3>Silent, Seamless, Smart</h3>
        <p>
          Incognoir watches, learns, and defends quietly—detecting threats before they happen.
        </p>
      </Card>
      <Card>
        <h3>More Than Passwords</h3>
        <p>
          Unique behavioral fingerprints and neural pattern analysis for every access.
        </p>
      </Card>
      <Card>
        <h3>Cloud-First, Lightweight</h3>
        <p>
          No heavy agents. Security runs from the cloud, browser extension fits your workflow.
        </p>
      </Card>
    </Section>
  );
}
