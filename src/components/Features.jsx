import React from "react";
import styled from "styled-components";

const Section = styled.section`
  background: #181a23;
  color: ${({ theme }) => theme.colors.light};
  padding: 6rem 0 4rem 0;
  text-align: center;
`;

const Title = styled.h2`
  color: ${({ theme }) => theme.colors.gold};
  margin-bottom: 2rem;
`;

const Grid = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 2rem;
  list-style: none;
  max-width: 900px;
  margin: 0 auto;
`;

const FeatureItem = styled.li`
  background: #13151b;
  border-radius: 1rem;
  padding: 1.9rem 1.5rem;
  min-width: 230px;
  color: #eaf3fe;
  font-size: 1.1rem;
  margin-bottom: 1rem;
  box-shadow: 0 2px 20px #111a3355;
`;

export default function Features() {
  return (
    <Section id="features">
      <Title>Features</Title>
      <Grid>
        <FeatureItem>Behavioral Fingerprinting — Know your admins by how they interact, not just what they type.</FeatureItem>
        <FeatureItem>Provisional Access Codes & Neural Authentication — Multi-layered, unspillable security.</FeatureItem>
        <FeatureItem>Zero Trust Enforcement — Immediate isolation of suspicious sessions.</FeatureItem>
        <FeatureItem>Audit & Compliance — Transparent logs, no spying, just security.</FeatureItem>
        <FeatureItem>Cloud-Managed Updates & Insights — Always evolving, always improving.</FeatureItem>
      </Grid>
    </Section>
  );
}
