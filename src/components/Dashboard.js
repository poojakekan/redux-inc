// src/components/Dashboard.js
import React from 'react';
import { useDispatch } from 'react-redux';
import { logout } from '../redux/authSlice';

function Dashboard() {
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <div>
      <h1>Welcome to the Dashboard</h1>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}

export default Dashboard;
