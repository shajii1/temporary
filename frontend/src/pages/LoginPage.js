import React from 'react';
import styled from 'styled-components';
import { Link, useNavigate } from 'react-router-dom';
import { database } from './Config';
import { signInWithEmailAndPassword } from 'firebase/auth';

const LoginPage = () => {
  const history = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    signInWithEmailAndPassword(database, email, password).then(data => {
      console.log(data, "authData");
      history('/Home'); 
    });
  };



  return (
    <LoginPageContainer>
      <h1>Login</h1>
      <form onSubmit={(e) => handleSubmit(e)}>
        <div className="form-group">
          <label>Email</label>
          <input type="email" name="email" placeholder="Email" />
        </div>
        <div className="form-group">
          <label>Password</label>
          <input type="password" name="password" placeholder="Password" />
        </div>
        <div className="forgot-password">
          <Link to="/forgot-password">Forgot your password?</Link>
        </div>
        <button className="login-button" type="submit">
          Sign In
        </button>
        <div className="create-account">
          <p>Don't have an account? <Link to="/register">Create a new account</Link></p>
        </div>
        <div className="social-login">
          <p>Or continue with:</p>
          <div className="social-icons">
            <div className="social-icon">
              <i className="fab fa-google"></i>
            </div>
            <div className="social-icon">
              <i className="fab fa-facebook"></i>
            </div>
          </div>
        </div>
      </form>
    </LoginPageContainer>
  );
};


const LoginPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  height: 70vh; 

  h1 {
    font-size: 24px;
    color: #000;
    margin-bottom: 20px;
  }

  .form-group {
    width: 100%;
    margin-bottom: 20px;
  }

  label {
    display: block;
    font-size: 14px;
    color: #000;
    margin-bottom: 5px;
  }

  input {
    width: 100%;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 20px;
    font-size: 14px;
  }

  .forgot-password,
  .create-account {
    a {
      color: #007bff;
      text-decoration: none;
      &:hover {
        text-decoration: underline;
      }
    }
  }

  .login-button {
   
    background-color: #007bff;
  color: #fff;
  border: none;
  padding: 15px;
  border-radius: 10px;
  cursor: pointer;
  transition: background-color 0.3s;
  width: 100%; 
  margin-top: 20px; 

    &:hover {
      background-color: #0056b3;
    }
  }

  .social-login {
    text-align: center;
  }

  .social-icons {
    font-size: 24px;
    display: flex;
    justify-content: center; 
    gap: 5px; 
  }

  .social-icon {
    background-color: #fff;
    padding: 10px;
    border-radius: 50%;
  }
`;

export default LoginPage;