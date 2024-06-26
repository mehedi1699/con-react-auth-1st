import React from 'react';
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Components/Home/Root.jsx';
import Home from './Components/Home/Home.jsx';
import Login from './Components/userLog/Login.jsx';
import Register from './Components/userLog/Register.jsx';
import AuthProvider from './Components/AuthProvider/AuthProvider.jsx';
import About from './Components/About/About.jsx';
import ProtectedRout from './Components/ProtectedRout/ProtectedRout.jsx';





const router = createBrowserRouter([
  {
    path: '/',
    element: <Root></Root>,
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
        path: '/register',
        element: <Register></Register>
      },
      {
        path:'/about',
        element:<ProtectedRout>
          <About></About>
        </ProtectedRout>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)
