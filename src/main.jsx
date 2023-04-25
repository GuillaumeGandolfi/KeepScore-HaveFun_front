import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, Route, RouterProvider } from "react-router-dom";
import { Provider } from 'react-redux'
import App from './App'
import store from './store/store'

// Import des css
import './styles/reset.css'
import './styles/index.css'

import ConnectionForm from './components/ConnectionForm/ConnectionForm';
import Inscription from './components/Inscription/Inscription';
import Profil from './components/pages/Profil/Profil';
import Transaction from './components/Transaction/Transaction';

// Import de librairies


// Import Actions
import { logoutAction } from "./components/pages/Budgetpage/actions/logout";
import { deleteBudget } from "./components/pages/Budgetpage/actions/deleteBudget.js";

// Import des pages
import Main, {mainLoader} from "./components/pages/Budgetpage/layouts/Main.jsx";
import Dashboard, {dashBoardAction, dashboardLoader} from './components/pages/Budgetpage/pages/Dashboard.jsx'
import Landing from './components/pages/LandingPage/landingPage';
import Homepage from './components/pages/Homepage/Homepage';
import Questspage from "./components/pages/Questspage/Questspage";
import Contactpage from "./components/pages/Contactpage/Contactpage";
import Friendspage from "./components/pages/Friendspage/Friendspage";
import Guildepage from "./components/pages/Guildepage/Guildepage";
import Shoppage from "./components/pages/Shoppage/Shoppage";
import Error from "./components/pages/Error/Error";
import Errordashboard from "./components/pages/Budgetpage/pages/Errordashboard.jsx";
import ExpensesPage, {expensesAction, expensesLoader} from "./components/pages/Budgetpage/pages/ExpensesPage.jsx";
import BudgetPage, {budgetAction, budgetLoader} from "./components/pages/Budgetpage/pages/BudgetPage.jsx";
import Layout from "./components/Layout.jsx";
import ConnectionFormCustom from "./components/ConnectionForm2/ConnectionFormCustom.jsx";


const router = createBrowserRouter([

    // ----- Pages sans header, ni footer -----
    {
      path:'/index',
      element:<Landing />
    },
    {
      path:'/signin',
      element: <ConnectionForm />
    },
    {
      path:'/signup',
      element:<Inscription />
    },
    // Travail perso sur une page de connection custom
    {
      path:'/login',
      element: <ConnectionFormCustom />
    },

    // ----- Pages avec header & footer -----
  {
    path: '/',
    element: <Layout />,
    errorElement: <Error />,
    children: [
      {
        path: '/homepage',
        element: <Homepage />
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
      },
      {
        path:'/profil/1',
        element: <Profil />
      },
      {
        path:'transaction',
        element: <Transaction />
      },
    ]
},

    // ----- Application de gestion de budget -----
{
  path: '/budget',
  element: <Main />,
  loader: mainLoader,
  errorElement: <Errordashboard />,
  children: [
    {
      index: true,
      element: <Dashboard />,
      loader: dashboardLoader,
      action: dashBoardAction,
      errorElement: <Errordashboard />
    },
    {
      path: "/budget/:id",
      element: <BudgetPage />,
      loader: budgetLoader,
      action: budgetAction,
      errorElement: <Errordashboard />,
      children: [
        {
          path: "delete",
           action: deleteBudget,
        }
      ]
    },
    {
      path: "expenses",
      element: <ExpensesPage />,
      loader: expensesLoader,
      action: expensesAction,
      errorElement: <Errordashboard />,
    },
  ]
}
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store} >
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>,
)


