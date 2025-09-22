import React from "react";
import styled from "styled-components";

const Section = styled.section`
  background: #121217;
  color: ${({ theme }) => theme.colors.gold};
  padding: 4rem 0 2rem 0;
  text-align: center;
`;

const Quote = styled.blockquote`
  font-size: 1.19rem;
  border-left: 4px solid ${({ theme }) => theme.colors.gold};
  padding-left: 2.4rem;
  margin: 2.5rem auto 1.2rem auto;
  max-width: 560px;
  font-style: italic;
  color: #f2ba6f;
`;

const Cited = styled.footer`
  font-size: 1.03rem;
  color: #bbb;
  margin-top: 1.1rem;
`;

export default function Testimonial() {
  return (
    <Section id="testimonial">
      <Quote>“Since switching to Incogir, our workflows never pause yet the security is ironclad.”</Quote>
      <Cited>— VP Security, Fintech Startup</Cited>
    </Section>
  );
}
