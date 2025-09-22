import React, { useState } from "react";
import styled, { css } from "styled-components";
import { Link, NavLink } from "react-router-dom";

const Nav = styled.nav`
  width: 100vw;
  background: #18191e;
  position: fixed;
  top: 0;
  left: 0;
  height: 62px;
  box-shadow: 0 2px 16px #0007, 0 1px #222 inset;
  z-index: 100;
  display: flex;
  align-items: center;
  padding: 0 1rem;
  justify-content: space-between;
  font-family: "Oswald", "Montserrat", sans-serif;
`;

const LeftGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`;

const MenuButton = styled.button`
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 8px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  border-radius: 4px;

  svg {
    fill: ${({ theme }) => theme.colors.gold};
  }
`;

const Bar = styled.span`
  width: 30px;
  height: 3px;
  margin: 4px 0;
  border-radius: 3px;
  background-color: ${({ theme }) => theme.colors.gold};
  transition: all 0.3s ease-in-out;
  ${({ open, index }) =>
    open &&
    index === 1 &&
    css`
      transform: translateY(7px) rotate(45deg);
    `}
  ${({ open, index }) =>
    open &&
    index === 2 &&
    css`
      opacity: 0;
    `}
  ${({ open, index }) =>
    open &&
    index === 3 &&
    css`
      transform: translateY(-7px) rotate(-45deg);
    `}
`;

const LogoBox = styled(Link)`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  align-items: center;
  z-index: 105;
`;

const LogoImg = styled.img`
  height: 45px;
  filter: drop-shadow(0 0 10px #24cdfa);
`;

const NavLinks = styled.div`
  margin-left: 1em;
  display: flex;
  align-items: center;
  gap: 2rem;

  opacity: ${({ open }) => (open ? 0 : 1)};
  pointer-events: ${({ open }) => (open ? "none" : "auto")};
  transition: opacity 0.35s ease;
  user-select: none;
`;

const StyledLink = styled(NavLink)`
  color: #f6f6f6;
  text-decoration: none;
  font-weight: 700;
  letter-spacing: 1.2px;
  text-transform: uppercase;
  font-size: 1rem;
  padding: 0.4em 0;

  &.active,
  &:hover {
    color: ${({ theme }) => theme.colors.gold};
  }
`;

const SearchBox = styled.div`
  position: relative;
  margin-left: auto;

  input {
    background: #212223;
    border: none;
    border-radius: 9999px;
    color: #eee;
    font-size: 0.95rem;
    padding: 0.5em 1.5em;
    width: 200px;
    transition: width 0.3s ease;
  }

  input:focus {
    width: 260px;
    outline: none;
  }
`;

const SearchIcon = styled.span`
  position: absolute;
  right: 12px;
  top: 50%;
  transform: translateY(-50%);
  color: #ffdf00;
  font-weight: bold;
  pointer-events: none;
`;

const MobileMenu = styled.div`
  position: fixed;
  background: #111215f0;
  width: 70vw;
  height: calc(100vh - 62px); /* Full height minus navbar height */
  padding: 20px 40px 0 40px; /* Adjust padding top for spacing */
  top: 62px; /* Start just below navbar */
  left: 0;
  z-index: 200;
  display: ${({ open }) => (open ? "flex" : "none")};
  flex-direction: column;
  gap: 1.7rem;
  font-size: 1.3rem;
  box-shadow: 8px 0 38px #ffe70018;
  transition: all 0.3s ease;
`;


export default function Navbar() {
  const [open, setOpen] = useState(false);

  const closeMenu = () => setOpen(false);

  return (
    <>
      <Nav>
        <LeftGroup>
          <MenuButton
            onClick={() => setOpen(!open)}
            aria-label={open ? "Close menu" : "Open menu"}
          >
            {[1, 2, 3].map((idx) => (
              <Bar key={idx} open={open} index={idx} />
            ))}
          </MenuButton>
          
        </LeftGroup>

        <LogoBox to="/">
          <LogoImg src="/logo1.jpg" alt="Incognoir Logo" />
        </LogoBox>

        <SearchBox>
          <input type="search" placeholder="Search..." aria-label="Search" />
        </SearchBox>
      </Nav>

      <MobileMenu open={open}>
        <StyledLink to="/about" onClick={closeMenu}>
          ABOUT
        </StyledLink>
        <StyledLink to="/products" onClick={closeMenu}>
          PRODUCTS
        </StyledLink>
        <StyledLink to="/resources" onClick={closeMenu}>
          RESOURCES
        </StyledLink>
        <StyledLink to="/contact" onClick={closeMenu}>
          CONTACT
        </StyledLink>
      </MobileMenu>
    </>
  );
}
