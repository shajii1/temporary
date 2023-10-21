import React from 'react';
import styled from 'styled-components';
import { Link, useNavigate } from 'react-router-dom';
import { database } from './Config';
import { createUserWithEmailAndPassword } from 'firebase/auth';

const RegisterPage = () => {
  const history = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    createUserWithEmailAndPassword(database, email, password).then(data => {
      console.log(data, "authData");
      history('/login'); 
    });
  };

  



  return (
    <RegisterPageContainer>
      <h1>Create Account</h1>
      <form onSubmit={(e) => handleRegister(e)}>
        <div className="form-group">
          <label>Email</label>
          <input type="email" name="email" placeholder="Email" />
        </div>
        <div className="form-group">
          <label>Password</label>
          <input type="password" name="password" placeholder="Password" />
        </div>
        <div className="form-group">
          <label>Confirm Password</label>
          <input type="password" name="confirmPassword" placeholder="Confirm Password" />
        </div>
        <button className="register-button" type="submit">
          Sign Up
        </button>
        <div className="have-account">
          <p>Already have an account? <Link to="/login">Sign in</Link></p>
        </div>
        <div className="social-login">
          <p>Or continue with:</p>
          <div className="social-icons">
            <i className="fab fa-google"></i>
            <i className="fab fa-facebook"></i>
          </div>
        </div>
      </form>
    </RegisterPageContainer>
  );
};


const RegisterPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
 
  justify-content: space-between ;
  height:70vh;

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
   // text-align: left;
  }

  input {
    width: 100%;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 20px;
    font-size: 14px;
  }

  .register-button {
    background-color: #007bff;
    color: #fff;
    border: none;
    padding: 15px;
    border-radius: 10px;
    cursor: pointer;
    transition: background-color 0.3s;
    width: 100%; 
    margin-top: 20px;
  }

  .register-button:hover {
    background-color: #0056b3;
  }

  .have-account {
    margin-top: 10px;
    a {
      color: #007bff;
      text-decoration: none;
      &:hover {
        text-decoration: underline;
      }
    }
  }

  .social-login {
    text-align: center;
   // margin-top: 20px;
    //text-align: center;
  }

  .social-icons {
    display: flex;
    justify-content: center; 
  }

  .social-icons i {
    font-size: 24px;
    margin: 0 10px;
    cursor: pointer;
  }
`;

export default RegisterPage;
