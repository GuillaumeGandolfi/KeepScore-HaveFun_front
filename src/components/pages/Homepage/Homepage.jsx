// Import React + css
import Typed from "typed.js";
import { NavLink } from "react-router-dom";
import React, { useState, useRef, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import "./homepage.css";

// Import svg - la main à côté du pseudo
import Hand from "../../../assets/icons/home__hand.svg";

// Imports pour utiliser ChartJS en react avec le composant Doughnut
import { Chart as ChartJS } from "chart.js/auto";
import { Doughnut } from "react-chartjs-2";
import {
  fetchDailyData,
  fetchMonthlyData,
  fetchWeeklyData,
  fetchYearlyData,
} from "../../../actions/fetchDataActions";
import { DialerSip } from "@mui/icons-material";
import { chartDataStructure } from "../../utils/chartDataStructure";

const Homepage = () => {
  const dispatch = useDispatch();

  // état pour stocker les données de chart actuellement affichées
  const { firstname, budget, quests } = useSelector(
    (state) => state.user
  );
  
  const {
    daylyTransactions,
    weeklyTransactions,
    monthlyTransactions,
    yearlyTransactions,
  } = useSelector((state) => state.transactions);
  const expenses =
    budget.reduce((allTotal, budget) => {
      const sum = budget.operations.reduce((total, operations) => {
        return total + operations.operation;
      }, 0);
      return allTotal + sum;
    }, 0) || 0;
  const totalBudget =
    budget.reduce((accumulator, budget) => {
      return accumulator + budget.value;
    }, 0) || 0;

  const daylyData = chartDataStructure("dayly", daylyTransactions);
  const weeklyData = chartDataStructure("weekly", weeklyTransactions);
  const monthlyData = chartDataStructure("monthly", monthlyTransactions);
  const yearlyData = chartDataStructure("yearly", yearlyTransactions);

  const [chartData, setChartData] = useState(daylyData);

  const typedRef = useRef(null);

  useEffect(() => {
    if (typedRef.current) {
      const typed = new Typed(typedRef.current, {
        strings: [
          "Bienvenue sur la page d'accueil",
          "Ici tu auras un aperçu global de tes dépenses",
          "Clique sur les boutons pour gérer" + " la période désirée",
          "N'oublie pas, pour t'enrichir, tu dois devenir une pince !!! (Abdelaziz - 2023)",
        ],
        typeSpeed: 70,
        backSpeed: 30,
        backDelay: 1000,
        loop: true,
      });
      return () => {
        typed.destroy();
      };
    }
  }, []);

  // fonction pour changer les données de chart en fonction de la sélection
  const handleChangeChartData = (event) => {
    const selection = event.target.value;
    switch (selection) {
      case "daily":
        dispatch(fetchDailyData());
        setChartData(daylyData);
        break;
      case "weekly":
        dispatch(fetchWeeklyData());
        setChartData(weeklyData);
        break;
      case "monthly":
        dispatch(fetchMonthlyData());
        setChartData(monthlyData);
        break;
      case "yearly":
        dispatch(fetchYearlyData());
        setChartData(yearlyData);
        break;
      default:
        break;
    }
  };

  return (
    <div className="homepage__container">
      <h1 className="home__title">
        Hello {firstname}
        <img src={Hand} alt="handtosayhello" />
      </h1>
      <span className="multiple-text" ref={typedRef}></span>

      <div className="homepage__content">
        <div className="homepage__content-left">
          <div className="homepage__content-left-all">
            <div className="homepage__expenses">
              <h2 className="homepage__expenses-title">Dépenses</h2>
              <h3 className="homepage__expenses-current">
                {expenses} sur {totalBudget} €
              </h3>
            </div>

            <div className="homepage__budget">
              <h2 className="homepage__expenses-title">Budget</h2>
              {budget &&
                budget.map((specificbudget) => (
                  <h3 key={uuidv4()} className="homepage__budget-current">
                    {specificbudget.label} : {specificbudget.value}
                  </h3>
                ))}
              <button className="homepage__expenses-link">
                Gérer son budget
              </button>
            </div>
          </div>

          <div className="homepage__quests">
            <div className="homepage__mainquest">
              <h2 className="homepage__expenses-title">
                Quête principale en cours
              </h2>
              <p>
                Ne pas se doucher pendant 1 semaine pour diminuer son budget eau
                du mois
              </p>
            </div>

            <div className="homepage__sidequest">
              <h2 className="homepage__expenses-title">
                Quête secondaire suivie
              </h2>
              <p>Aller au cinéma sans acheter du popcorn</p>
              <button className="homepage__expenses-link">
                Journal de quêtes
              </button>
            </div>
          </div>
        </div>

        <div className="homepage__content-right">
          <div className="homepage__buttons">
            <button value="daily" onClick={handleChangeChartData}>
              Journalier
            </button>
            <button value="weekly" onClick={handleChangeChartData}>
              Hebdomadaire
            </button>
            <button value="monthly" onClick={handleChangeChartData}>
              Mensuel
            </button>
            <button value="yearly" onClick={handleChangeChartData}>
              Annuel
            </button>
          </div>
          <div className="homepage__charts">
            <Doughnut data={chartData} id="myChart" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
