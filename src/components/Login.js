// src/components/Login.js
import React from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../redux/authSlice';

function Login() {
  const dispatch = useDispatch();

  const handleLogin = () => {
    dispatch(login());
  };

  return (
    <div>
      <h1>Please Log In</h1>
      <button onClick={handleLogin}>Login</button>
    </div>
  );
}

export default Login;
