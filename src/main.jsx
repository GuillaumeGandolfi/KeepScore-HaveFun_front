import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Provider } from 'react-redux'
import App from './App'
import store from './store/store'
import './styles/reset.css'
import './styles/index.css'
import ConnectionForm from './components/ConnectionForm/ConnectionForm';
import Inscription from './components/Inscription/Inscription';
import Homepage from './components/Homepage/Homepage';

const router = createBrowserRouter([
{
  path: '/',
  element: <App />
},
{
  path:'/signin',
  element: <ConnectionForm />
},
{
  path:'/signup',
  element:<Inscription />
},
{
  path:'/homepage',
  element:<Homepage />
}
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store} >
     <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>,
)
