import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../components/Header';

export default function Root() {
  const style = {
    color: '#FFF',
    backgroundColor: '#0F0F0F',
  };

  return (
    <div style={style}>
      <Header />
      <Outlet />
    </div>
  );
}

