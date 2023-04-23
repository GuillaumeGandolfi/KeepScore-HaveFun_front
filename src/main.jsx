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
import Landing from './components/pages/LandingPage/landingPage';
import Homepage from './components/pages/Homepage/Homepage';
import Profil from './components/pages/Profil/Profil'
import Transaction from './components/Transaction/Transaction';
import Budgetpage from './components/pages/Budgetpage/Budgetpage'
import Questspage from "./components/pages/Questspage/Questspage";
import Contactpage from "./components/pages/Contactpage/Contactpage";
import Friendspage from "./components/pages/Friendspage/Friendspage";
import Guildepage from "./components/pages/Guildepage/Guildepage";
import Shoppage from "./components/pages/Shoppage/Shoppage";

const router = createBrowserRouter([
  {
  path: '/',
  element: <Landing/>
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
  element: <Homepage />
},
{
  path:'/profil/1',
  element: <Profil />
},
{
  path:'/transaction',
  element: <Transaction />
},
{
  path: '/budget',
  element: <Budgetpage />
},
{
  path: '/quests',
  element: <Questspage />
},
{
  path: '/contact',
  element: <Contactpage />
},
{
  path: '/friends',
  element: <Friendspage />
},
{
  path: '/guilde',
  element: <Guildepage />
},
{
    path: '/shop',
    element: <Shoppage />
}
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store} >
      <RouterProvider router={router} />

    </Provider>
  </React.StrictMode>,
)


