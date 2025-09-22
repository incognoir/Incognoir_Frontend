import React from "react";
import styled from "styled-components";

const Section = styled.section`
  max-width: 900px;
  margin: 4em auto;
  padding: 0 1.3em;
  color: ${({ theme }) => theme.colors.light};
`;

const Title = styled.h1`
  color: ${({ theme }) => theme.colors.gold};
  font-size: 2.6rem;
  margin-bottom: 1.2em;
`;

const ResourceList = styled.ul`
  list-style: none;
  padding-left: 0;
`;

const ResourceItem = styled.li`
  background: ${({ theme }) => theme.colors.bg2 || "#181a1b"};
  border-radius: 1rem;
  padding: 1.3em 1.8em;
  margin-bottom: 1.2em;
  box-shadow: 0 8px 26px #e7de0066;
  cursor: pointer;
  transition: background 0.2s;
  &:hover {
    background: ${({ theme }) => theme.colors.gold};
    color: ${({ theme }) => theme.colors.bg};
  }
`;

export default function Resources() {
  return (
    <Section>
      <Title>Resources</Title>
      <ResourceList>
        <ResourceItem>Whitepaper: Behavioral Security 2025</ResourceItem>
        <ResourceItem>Demo Video: Incognoir in Action</ResourceItem>
        <ResourceItem>Customer Case Studies</ResourceItem>
      </ResourceList>
    </Section>
  );
}
