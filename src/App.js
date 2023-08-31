import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './components/Header';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import { YoutubeApiProvider } from './context/youtubeApiContext';

const queryClient = new QueryClient();

export default function App() {
  const style = {
    color: '#FFF',
    backgroundColor: '#0F0F0F',
  };

  return (
    <div style={style}>
      <YoutubeApiProvider>
        <Header />
        <QueryClientProvider client={queryClient}>
          <Outlet />
        </QueryClientProvider>
      </YoutubeApiProvider>
    </div>
  );
}