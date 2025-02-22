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
const ErrorMessage = styled.div`
  color: #ff0000;
  background-color: rgba(255, 0, 0, 0.1);
  border: 1px solid #ff0000;
  padding: 10px;
  margin: 10px 0;
  border-radius: 3px;
  font-size: 0.9em;
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
  const [error, setError] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const response = await fetch("http://localhost:8080/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
      });

      const data = await response.json();

      if (response.ok) {
        dispatch(loginSuccess({ 
          username: data.username, 
          token: data.token 
        }));
        navigate("/monitor");
      } else {
        setError(data.message || "Invalid credentials");
        dispatch(loginFailure(data.message || "Invalid credentials"));
      }
    } catch (error) {
      console.error("Login error:", error);
      setError("Connection error. Please try again.");
      dispatch(loginFailure("Connection error"));
    }
  };

  return (
    <Container>
      <LoginForm onSubmit={handleSubmit}>
        <GlitchText>Login</GlitchText>
        {error && <ErrorMessage>{error}</ErrorMessage>}
        <div>
          <label htmlFor="username">Username:</label>
          <Input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <Input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <Button type="submit">Login</Button>
        <Button type="button" onClick={() => navigate('/register')}>Register</Button>
      </LoginForm>
    </Container>
  );
};

export default LoginScreen;