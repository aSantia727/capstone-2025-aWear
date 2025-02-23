import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { loginSuccess, loginFailure } from "../features/auth/authSlice";
import { loginUser } from "../services/api";
import styled from "styled-components";
import backgroundImage from '../assets/AVEARBackGround.jpg';


const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-image: url(${backgroundImage});
  background-size: cover;
  background-position: center;
`;

const LoginForm = styled.form`
  // background-color: #2a2a2a;  // Remove the background color for the form
  padding: 2rem;
  border-radius: 8px;
  width: 100%;
  max-width: 400px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;


const Title = styled.h1`
  color: #ffffff;
  margin-bottom: 1.5rem;
  text-align: center;
`;

const Input = styled.input`
  width: 100%;
  padding: 0.75rem;
  margin: 0.5rem 0;
  border: 1px solid #3a3a3a;
  border-radius: 4px;
  background-color: #333;
  color: white;
  font-size: 1rem;

  &:focus {
    outline: none;
    border-color: #4a90e2;
  }
`;

const Button = styled.button`
  width: 100%;
  padding: 0.75rem;
  margin: 0.5rem 0;
  border: none;
  border-radius: 4px;
  background-color: #4a90e2;
  color: white;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background-color: #357abd;
  }

  &:disabled {
    background-color: #666;
    cursor: not-allowed;
  }
`;

const ErrorMessage = styled.div`
  color: #ff4444;
  background-color: rgba(255, 68, 68, 0.1);
  padding: 0.75rem;
  border-radius: 4px;
  margin: 1rem 0;
  text-align: center;
`;

const LinkButton = styled(Button)`
  background-color: #666;

  &:hover {
    background-color: #555;
  }
`;

const LoginScreen = () => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
    ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setIsLoading(true);

    try {
      const data = await loginUser(formData);
      if (data.token) {
        localStorage.setItem("token", data.token);
        dispatch(loginSuccess({
          username: data.username,
          token: data.token
        }));
        navigate("/monitor");
      } else {
        throw new Error('No token received');
      }
    } catch (error) {
      console.error("Login error:", error);
      setError(error.message || "Login failed. Please try again.");
      dispatch(loginFailure(error.message));
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Container>
      <LoginForm onSubmit={handleSubmit}>
        <Title>Login</Title>
        {error && <ErrorMessage>{error}</ErrorMessage>}
        <div>
          <Input
            type="text"
            name="username"
            placeholder="Username"
            value={formData.username}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <Input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>
        <Button type="submit" disabled={isLoading}>{isLoading? "Logging in...": "Login"}</Button>
        <LinkButton type="button" onClick={() => navigate("/register")}>
          Register
        </LinkButton>
      </LoginForm>
    </Container>
  );
};

export default LoginScreen;