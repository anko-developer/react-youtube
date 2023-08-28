import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../components/Header';

export default function Root() {
  return (
    <div style={{ color: '#fff', backgroundColor: '#0f0f0f' }}>
      <Header />
      <Outlet />
    </div>
  );
}

