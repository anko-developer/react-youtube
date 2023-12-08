import { Outlet } from 'react-router-dom';
import './App.css';
import SearchHeader from './components/SearchHeader/SearchHeader';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { YoutubeApiProvider } from './context/YoutubeApiContext';
import Snowfall from 'react-snowfall'
const queryClient = new QueryClient();

function App() {
  return (
    <>
      <SearchHeader />
      <YoutubeApiProvider>
        <QueryClientProvider client={queryClient}>
          <Outlet />
        </QueryClientProvider>
      </YoutubeApiProvider>
      <Snowfall color='skyblue' style={{position: 'fixed', width: '100vw',height: '100vh'}} />
    </>
  );
}

export default App;
