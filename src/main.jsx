import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import './index.css'
import App from './routes/App.jsx'
import Bag from './routes/bag.jsx'
import Home from "./routes/Home";
import LoginPage from "./routes/LoginPage.jsx"

import { createBrowserRouter,RouterProvider } from 'react-router-dom';

import store from './store/index.js'
 import {Provider} from "react-redux"

import 'bootstrap/dist/css/bootstrap.min.css';

import AppPreview from './components/previewPage.jsx';
import { ThemeProvider } from './routes/ThemeContext.jsx'

const router=createBrowserRouter([

{path:'/',
element:<App/>,
 children:[
{
  path:'/bag',
  element:<Bag/>,
},
{
  path:'/',
  element:<AppPreview/>,
},
{
  path:'/product',
  element:<Home/>,
},
 ]
},
{path:'/login',
  element:<LoginPage/>
}




]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider>
    <Provider store={store}>
    <RouterProvider router={router}>
    <App />
  </RouterProvider> 
  </Provider>
  </ThemeProvider>
  </StrictMode>,
)
