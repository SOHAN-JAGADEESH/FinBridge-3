import React, {useEffect} from 'react';
import Dollar from './pages/Dollar';
import Compare from './pages/Compare';
import Survey from './pages/Survey';
import Information from './pages/Information';
import Analyze from './pages/Analyze';
import Budget from './pages/Budget';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import {
  createBrowserRouter,
  RouterProvider,
  useNavigate,
  useLocation // Import the useNavigate hook
} from 'react-router-dom';

function ScrollToTop({ children }) {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return children;
}

const router = createBrowserRouter([
  {
    path: '/',
    element: <ScrollToTop><App /></ScrollToTop>,
  },
  {
    path: '/dollar',
    element:<ScrollToTop><Dollar /></ScrollToTop> ,
  },
  {
    path: '/compare',
    element: <ScrollToTop><Compare /></ScrollToTop>,
  },
  {
    path: '/information',
    element: <ScrollToTop><Information /></ScrollToTop>,
  },
  {
    path: '/survey',
    element: <ScrollToTop><Survey /></ScrollToTop>,
  },
  {
    path: '/analyze',
    element: <ScrollToTop><Analyze /></ScrollToTop>,
  },
  {
    path: '/budget',
    element: <ScrollToTop><Budget /></ScrollToTop>,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router}>
    {/* Render your app */}
    <AppWrapper />
  </RouterProvider>
);

function AppWrapper() {
  const navigate = useNavigate(); // Get the navigate function

  // Define the handleClick function to navigate to the /dollar page
  const handleClick = () => {
    navigate('/dollar');
  };

  return (
    <App handleClick={handleClick} /> // Pass handleClick as a prop to your App component
  );
}
