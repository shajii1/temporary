import React from 'react';
import { BrowserRouter, Routes, Route, Outlet, Link } from 'react-router-dom';
import '@fortawesome/fontawesome-free/css/all.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingBag } from '@fortawesome/free-solid-svg-icons';

import LandingPage from './pages/LandingPage';
import Home from './components/Home';
import Cart from './components/Cart';
import Invoice from './components/Invoice';
import Account from './components/Account';
import Referral from './components/Referral';
import LoginPage from './pages/LoginPage'; 
import './App.css';
import RegisterPage from './pages/RegisterPage';

library.add(fas);

const BottomNav = () => {
  return (
    <nav className="bottom-nav">
      <Link to="/Home">
        <i className="fas fa-home"></i>
      </Link>
      <Link to="/Invoice">
        <FontAwesomeIcon
          icon={faShoppingBag}
          style={{ fontSize: '24px', marginBottom: '5px' }}
        />
      </Link>
      <Link to="/Cart">
        <i className="fas fa-shopping-cart"></i>
      </Link>
      <Link to="/Referral">
        <i className="fas fa-users"></i>
      </Link>
      <Link to="/Account">
        <i className="fas fa-user"></i>
      </Link>
    </nav>
  );
};

const App = () => {
  return (
    <BrowserRouter>
      <div className="app-container">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<LoginPage />} />
           {/* Add a route for the LoginPage */}
           <Route path='/register' element={<RegisterPage/>}/>
          <Route
            path="/Home"
            element={
              <>
                <Outlet />
                <BottomNav />
              </>
            }
          />
          <Route path="/Home" element={<Home />} />
          <Route path="/Cart" element={<Cart />} />
          <Route path="/Invoice" element={<Invoice />} />
          <Route path="/Referral" element={<Referral />} />
          <Route path="/Account" element={<Account />} />
        </Routes>
        

      </div>
    </BrowserRouter>
  );
};

export default App;