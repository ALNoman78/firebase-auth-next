import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Layout from './components/Layout/Layout';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import SignUp from './components/SignUp/SignUp';
import AuthProvider from './Providers/AuthProvider';
import { ToastContainer } from 'react-toastify';
import Order from './components/Order/Order';
import PrivateRoute from './components/routes/PrivateRoute';
import Profile from './components/Profile/Profile';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    // errorElement : <div>Error 404</div>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/signup',
        element: <SignUp></SignUp>
      },
      {
        path: '/orders',
        element: <PrivateRoute><Order></Order></PrivateRoute>
      },
      {
        path : '/profile',
        element : <PrivateRoute><Profile></Profile></PrivateRoute>
      }
    ]
  },
]);
createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* add into the AuthProvider components */}
    {/* <RouterProvider router={router} /> */}

    {/* and same as authProvider is add on main component */}
    <AuthProvider>
      {/* now children of auth provider component */}
      <RouterProvider router={router} />
      <ToastContainer></ToastContainer>
    </AuthProvider>
  </StrictMode>
)
