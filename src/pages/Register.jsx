import React from "react";
import styled from "styled-components";

const Card = styled.div`
  max-width: 430px;
  margin: 7rem auto 4rem auto;
  background: #161a1e;
  padding: 2.5rem 2rem 2rem 2rem;
  border-radius: 1.1em;
  box-shadow: 0 8px 40px #FFC30013;
`;

const Title = styled.h2`
  color: ${({ theme }) => theme.colors.gold};
  margin-bottom: 1.3em;
`;

const Input = styled.input`
  width: 100%;
  padding: 0.9em;
  margin-bottom: 1.1em;
  border-radius: 0.6em;
  border: 2px solid #232733;
  background: #11141a;
  color: ${({ theme }) => theme.colors.light};
  font-size: 1.07rem;
`;

const Button = styled.button`
  width: 100%;
  padding: 0.9em;
  border-radius: 0.6em;
  background: ${({ theme }) => theme.colors.gold};
  color: #18191d;
  font-weight: bold;
  font-size: 1.08rem;
  border: none;
  cursor: pointer;
`;

const Minor = styled.div`
  margin-top: 1.1em;
  font-size: 0.97rem;
  color: #999;
  text-align: center;
`;

export default function Register() {
  return (
    <Card>
      <Title>Register</Title>
      <form>
        <Input type="text" placeholder="Name" required />
        <Input type="email" placeholder="Email" required />
        <Input type="password" placeholder="Password" required />
        <Button type="submit">Register</Button>
        <Minor>
          Already have an account? <a href="/login" style={{color:'#CBA135'}}>Login</a>
        </Minor>
      </form>
    </Card>
  );
}
