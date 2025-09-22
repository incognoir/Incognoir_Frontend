import React from "react";
import styled from "styled-components";

const Section = styled.section`
  max-width: 600px;
  padding: 3em 1.5em;
  margin: 3em auto;
  background: ${({ theme }) => theme.colors.bg2};
  border-radius: 1.5em;
  box-shadow: 0 10px 26px #ffe70044;
  color: ${({ theme }) => theme.colors.light};
`;

const Title = styled.h2`
  color: ${({ theme }) => theme.colors.gold};
  font-size: 2.2rem;
  margin-bottom: 1em;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.3em;
  input, textarea {
    resize: none;
    padding: 1em;
    border-radius: 1em;
    border: none;
    font-size: 1.1rem;
    background: #212223;
    color: #fff;
  }
  button {
    cursor: pointer;
    background: ${({ theme }) => theme.colors.gold};
    border: none;
    color: #181a20;
    border-radius: 50px;
    padding: 0.9em 2.6em;
    font-weight: bold;
    font-size: 1.12rem;
    box-shadow: 0 0 28px #ffe70077;
    transition: background 0.3s;
    &:hover {
      background: #cba135;
    }
  }
`;

export default function Contact() {
  return (
    <Section>
      <Title>Contact Us</Title>
      <Form>
        <input type="text" placeholder="Your Name" required />
        <input type="email" placeholder="Your Email" required />
        <textarea rows="5" placeholder="Your Message" required />
        <button type="submit">Send Message</button>
      </Form>
    </Section>
  );
}
