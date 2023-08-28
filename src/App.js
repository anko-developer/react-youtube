import './App.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Root from './pages/Root';
import VideoList from './pages/VideoList';
import VideoDetail from './pages/VideoDetail';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <p>Error</p>,
    children: [
      {
      index: true,
      element: <VideoList />
      },
      {
        path: '/videos/:videoId',
        element: <VideoDetail />
      }
    ]
  }
]);


function App() {
  return (
    <RouterProvider router={router}>

    </RouterProvider>
  );
}

export default App;
