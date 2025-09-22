import React, { useState } from 'react';
import styled from 'styled-components';

const Section = styled.section`
  min-height: 70vh;
  background: linear-gradient(180deg, #121212 98%, #000);
  padding: 6rem 2rem 4rem 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Card = styled.div`
  background: #191919;
  width: 100%;
  max-width: 430px;
  padding: 2rem 2.4rem 1.7rem;
  border-radius: 2rem;
  box-shadow: 0 6px 42px 0 #cba13530;
  color: ${({theme}) => theme.colors.light};
  display: flex;
  flex-direction: column;
  align-items: center;

  h2 {
    color: ${({theme}) => theme.colors.gold};
    margin-bottom: 2.1rem;
    font-family: ${({theme}) => theme.font.heading};
  }
`;

const Input = styled.input`
  width: 100%;
  padding: 1em;
  border-radius: 10px;
  margin-bottom: 1.2rem;
  border: 1.5px solid #333;
  background: #131313;
  color: #fff;
  font-family: ${({theme}) => theme.font.body};
  font-size: 1.05rem;

  &:focus {
    outline: none;
    border: 2.4px solid ${({theme}) => theme.colors.gold};
  }
`;

const Textarea = styled.textarea`
  width: 100%;
  padding: 1em;
  border-radius: 10px;
  margin-bottom: 1.2rem;
  border: 1.5px solid #333;
  background: #131313;
  color: #fff;
  font-family: ${({theme}) => theme.font.body};
  font-size: 1.05rem;
  height: 120px;

  &:focus {
    outline: none;
    border: 2.4px solid ${({theme}) => theme.colors.gold};
  }
`;

const Button = styled.button`
  background: ${({theme}) => theme.colors.gold};
  color: #111;
  padding: 1rem 2.5rem;
  border-radius: 30px;
  border: none;
  font-weight: 600;
  font-size: 1.1rem;
  cursor: pointer;
  transition: background 0.2s;

  &:hover {
    background: ${({theme}) => theme.colors.light};
  }
`;

export default function Contact() {
  const [sent, setSent] = useState(false);

  const handleSubmit = e => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <Section id="contact">
      <Card>
        <h2>Step Into the Shadow.</h2>
        {!sent ? (
          <form onSubmit={handleSubmit}>
            <Input type="text" required placeholder="Your Name" />
            <Input type="email" required placeholder="Your Email" />
            <Textarea required placeholder="Your Message" />
            <Button type="submit">Send Message</Button>
          </form>
        ) : (
          <div style={{ color: '#cba135', fontWeight: 600, fontSize: '1.2rem' }}>
            Thank you for contacting Incognoir!
          </div>
        )}
      </Card>
    </Section>
  );
}

