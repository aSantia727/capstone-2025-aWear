import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const Register = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    try {
      const response = await fetch('http://localhost:8080/api/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, email, password }),
      });

      const data = await response.json();

      if (response.ok) {
        navigate('/');
      } else {
        setError(data.message || 'Registration failed');
      }
    } catch (error) {
      console.error('Registration error:', error);
      setError('Connection error. Please try again.');
    }
  };

  return (
    <Container>
      <RegisterForm onSubmit={handleSubmit}>
        <h2>Register</h2>
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
          <label htmlFor="email">Email:</label>
          <Input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
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
        <Button type="submit">Register</Button>
        <Button type="button" onClick={() => navigate('/')}>
          Back to Login
        </Button>
      </RegisterForm>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background: #1a1a1a;
`;

const RegisterForm = styled.form`
  background: rgba(30, 30, 30, 0.9);
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 0 20px rgba(0, 255, 255, 0.2);
  width: 100%;
  max-width: 400px;
  color: #fff;
`;

const Input = styled.input`
  width: 100%;
  padding: 8px;
  margin: 8px 0;
  background: #2a2a2a;
  border: 1px solid #00ffff;
  color: #fff;
  border-radius: 4px;
`;

const Button = styled.button`
  width: 100%;
  padding: 10px;
  margin: 10px 0;
  background: #00ffff;
  color: #000;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background 0.3s;

  &:hover {
    background: #00cccc;
  }
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

export default Register;