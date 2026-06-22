import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import './index.css'
import App from './routes/App.jsx'
import Bag from './routes/bag.jsx'
import Home from "./routes/Home";
import LoginPage from "./routes/LoginPage.jsx"

// 🚀 1. CHANGED: Now using createHashRouter instead of createBrowserRouter
import { createHashRouter, RouterProvider } from 'react-router-dom';

import store from './store/index.js'
import {Provider} from "react-redux"

import 'bootstrap/dist/css/bootstrap.min.css';

import AppPreview from './components/previewPage.jsx';
import { ThemeProvider } from './routes/ThemeContext.jsx'

// 🚀 2. CHANGED: Using createHashRouter (and deleted the basename!)
const router = createHashRouter([
  {
    path: '/',
    element: <App/>,
    children: [
      {
        path: '/bag',
        element: <Bag/>,
      },
      {
        path: '/',
        element: <AppPreview/>,
      },
      {
        path: '/product',
        element: <Home/>,
      },
    ]
  },
  {
    path: '/login',
    element: <LoginPage/>
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider>
      <Provider store={store}>
        {/* 🚀 3. FIXED: Removed <App /> from inside here! */}
        <RouterProvider router={router} />
      </Provider>
    </ThemeProvider>
  </StrictMode>,
)