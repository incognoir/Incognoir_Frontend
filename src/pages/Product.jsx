import React from "react";
import styled from "styled-components";

const Section = styled.section`
  max-width: 960px;
  margin: 4em auto;
  padding: 0 1.3em;
  color: ${({ theme }) => theme.colors.light};
`;

const Title = styled.h1`
  color: ${({ theme }) => theme.colors.gold};
  font-size: 2.8rem;
  margin-bottom: 1.2em;
`;

const ProductList = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill,minmax(280px,1fr));
  gap: 2.5em;
`;

const ProductCard = styled.div`
  background: ${({ theme }) => theme.colors.bg2 || "#181a1b"};
  border-radius: 1em;
  padding: 1.8em 1.5em;
  box-shadow: 0 10px 28px #ffe70022;
  transition: box-shadow 0.3s ease;
  &:hover {
    box-shadow: 0 15px 40px #ffe70044;
  }
  h3 {
    color: ${({ theme }) => theme.colors.gold};
    margin-bottom: 0.5em;
  }
  p {
    font-size: 1rem;
    color: #cbcecd;
    line-height: 1.4;
  }
`;

export default function Product() {
  return (
    <Section>
      <Title>Our Products</Title>
      <ProductList>
        <ProductCard>
          <h3>Incognoir Behavioral AI</h3>
          <p>Invisible AI that protects admin access with behavioral biometrics.</p>
        </ProductCard>
        <ProductCard>
          <h3>Neural Pattern Manager</h3>
          <p>Manage user fingerprints uniquely in your enterprise ecosystem.</p>
        </ProductCard>
        <ProductCard>
          <h3>Cloud Extension Suite</h3>
          <p>Seamless browser-based security, no heavy agents required.</p>
        </ProductCard>
      </ProductList>
    </Section>
  );
}
