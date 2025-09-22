import React from 'react';
import styled from 'styled-components';

const FooterWrapper = styled.footer`
  background: #101010;
  padding: 1em 3rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #bbb;
  font-size: 1rem;
`;

const Logo = styled.img`
  height: 34px;
`;

const SocialLinks = styled.div`
  a {
    color: #bbb;
    margin-right: 1rem;
    text-decoration: none;
    transition: color 0.2s;

    &:hover {
      color: ${({theme}) => theme.colors.gold};
    }
  }
`;

export default function Footer() {
  return (
    <FooterWrapper>
      <Logo src="/logo.jpg" alt="Incognoir Logo" />
      <div>© {new Date().getFullYear()} Incognoir | All rights reserved</div>
      <SocialLinks>
        <a href="https://linkedin.com" target="_blank" rel="noreferrer noopener">
          LinkedIn
        </a>
        <a href="https://twitter.com" target="_blank" rel="noreferrer noopener">
          Twitter
        </a>
      </SocialLinks>
    </FooterWrapper>
  );
}
