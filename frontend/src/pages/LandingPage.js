import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const LandingPage = () => {
  const imageUrl =
    'https://previews.123rf.com/images/classicvector/classicvector1905/classicvector190500077/130274916-man-using-laptop-and-drinking-coffee-illustration-office-worker-sitting-at-desk-vector-clipart.jpg';

  return (
    <LandingPageContainer>
      <div className="landing-page">
        <img src={imageUrl} alt="Landing" className="landing-image" />
        <h1 className="landing-title">Welcome to Our Awesome Platform</h1>
        <p className="landing-description">
          Discover the perfect job for your passion and expertise.
        </p>
        <div className="buttons">
          <Link to="/login">
            <button className="login-button">Login</button>
          </Link>
          <Link to="/register">
            <button className="register-button">Register</button>
          </Link>
        </div>
      </div>
    </LandingPageContainer>
  );
};

const LandingPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #f5f5f5;
  padding: 20px;

  .landing-image {
    width: 100%;
    max-width: 300px;
    display: block;
    border-radius: 10px;
  }

  .landing-page {
    text-align: center;
  }

  .landing-title {
    font-size: 28px;
    color: #007bff;
    margin-top: 20px;
  }

  .landing-description {
    font-size: 16px;
    color: #333;
    margin: 20px 0;
  }

  .buttons {
    display: flex;
    gap: 20px;
    margin-top: 20px;
  }

  .login-button,
  .register-button {
    background-color: #007bff;
    color: #fff;
    border: none;
    padding: 15px 30px;
    border-radius: 25px;
    cursor: pointer;
    transition: background-color 0.3s;
    font-size: 16px;
  }

  .login-button:hover {
    background-color: #0056b3;
  }

  .register-button {
    background-color: transparent;
    border: 1px solid #007bff;
    color: #007bff;
    cursor: pointer;
  }
`;

export default LandingPage;
