import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Apple from './Logg.jsx';
import Con from './components/contact.jsx';
import Logg from './Logg.jsx';
import { useNavigate } from 'react-router-dom';


const router = createBrowserRouter([

  {
    path: "/",
    element: <App />,
  },
  {
    path: "/Logg",
    element: <Logg />,
  },
  {
    path: "/conn",
    element: <Con />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
