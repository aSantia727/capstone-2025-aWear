import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { loginSuccess, loginFailure } from "../features/auth/authSlice";
import styled, { keyframes } from "styled-components";
import loginBackgroundImage from "../assets/AVEARBackGround.jpg";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-image: url(${loginBackgroundImage});
  background-size: 30% auto;
  background-position: center center;
  background-attachment: fixed;
  color: #0ff;
  font-family: "Courier New", monospace;
`;

const glitch = keyframes`
  0% {
    transform: translate(0);
  }
  20% {
    transform: translate(-2px, 2px);
  }
  40% {
    transform: translate(-2px, -2px);
  }
  60% {
    transform: translate(2px, 2px);
  }
  80% {
    transform: translate(2px, -2px);
  }
  to {
    transform: translate(0);
  }
`;

const LoginForm = styled.form`
  background-color: transparent;
  padding: 30px;
  border-radius: 5px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  margin: 10px 0;
  border: 1px solid #555;
  border-radius: 3px;
  background-color: #444;
  color: #eee;
`;

const Button = styled.button`
  background-color: #007bff;
  color: white;
  padding: 10px 15px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin: 5px;
`;

const GlitchText = styled.h1`
  animation: ${glitch} 0.5s infinite;
  color: #0ff;
  text-shadow: 0 0 5px #0ff;
`;

const LoginScreen = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:8080/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
      });

      if (response.ok) {
        const data = await response.json();
        dispatch(loginSuccess({ username: data.username, token: data.token }));
        navigate("/monitor");
      } else {
        dispatch(loginFailure("Invalid credentials"));
      }
    } catch (error) {
      console.error(error);
      dispatch(loginFailure("An error occurred"));
    }
  };

  return (
    <Container>
      <LoginForm onSubmit={handleSubmit}>
        <GlitchText>Login</GlitchText>
        <div>
          <label htmlFor="username">Username:</label>
          <Input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <Input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <Button type="submit">Login</Button>
        <Button type="button" onClick={() => navigate('/register')}>Register</Button>
      </LoginForm>
    </Container>
  );
};

export default LoginScreen;