import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, Route, RouterProvider } from "react-router-dom";
import { Provider } from 'react-redux'
import App from './App'
import Inscription from './components/InscriptionForm';
import store from './store/store'
import './styles/reset.css'
import './styles/index.css'


const router = createBrowserRouter([
  {
    path: '/',
    element: <App />
  
  },
  {
    path: '/inscription',
    element: <Inscription/>
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store} >
     <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>,
)

