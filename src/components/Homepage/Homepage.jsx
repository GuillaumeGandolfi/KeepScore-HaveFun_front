// Import React + css
import Typed from 'typed.js';
import React, { useState, useRef, useEffect } from 'react';
import './homepage.css'

// Import des components Header & Footer
import Header from '../Header/Header'
import Footer from '../Footer/Footer'

// Import svg - la main à côté du pseudo
import Hand from '../../assets/icons/home__hand.svg'

// Imports pour utiliser ChartJS en react avec le composant Doughnut
import { Chart as ChartJS } from 'chart.js/auto'
import { Doughnut } from 'react-chartjs-2';

// Données de démonstration
const dailyData = {
    labels: ['Alimentation', 'Transport', 'Loisirs'],
    datasets: [{
        label: 'Dépenses journalières',
        data: [30, 20, 15],
        backgroundColor: ['#FF6294', '#44C768', '#66ACFF']
    }]
};

const weeklyData = {
    labels: ['Alimentation', 'Transport', 'Loisirs'],
    datasets: [{
        label: 'Dépenses hebdomadaires',
        data: [150, 100, 75],
        backgroundColor: ['#FF6294', '#44C768', '#66ACFF']
    }]
};

const monthlyData = {
    labels: ['Alimentation', 'Transport', 'Loisirs'],
    datasets: [{
        label: 'Dépenses mensuelles',
        data: [600, 400, 300],
        backgroundColor: ['#FF6294', '#44C768', '#66ACFF']
    }]
};

const yearlyData = {
    labels: ['Alimentation', 'Transport', 'Loisirs'],
    datasets: [{
        label: 'Dépenses annuelles',
        data: [7200, 4800, 3600],
        backgroundColor: ['#FF6294', '#44C768', '#66ACFF']
    }]
};

const Homepage = () => {
    // état pour stocker les données de chart actuellement affichées
    const [chartData, setChartData] = useState(dailyData);

    const typedRef = useRef(null);

    useEffect(() => {
        if (typedRef.current) {
            const typed = new Typed(typedRef.current, {
                strings: ['Bienvenue sur la page d\'accueil', 'Ici tu auras un aperçu global de tes dépenses', 'Clique sur les boutons pour gérer' +
                ' la période désirée', 'N\'oublie pas, pour t\'enrichir, tu dois devenir une pince !!! (Abdelaziz - 2023)'],
                typeSpeed: 70,
                backSpeed: 30,
                backDelay: 1000,
                loop: true
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
            case 'daily':
                setChartData(dailyData);
                break;
            case 'weekly':
                setChartData(weeklyData);
                break;
            case 'monthly':
                setChartData(monthlyData);
                break;
            case 'yearly':
                setChartData(yearlyData);
                break;
            default:
                break;
        }
    };

    return (
        <div className="homepage__container">
            <Header />

            <h1 className="home__title">
                Hello Abdelaziz
                <img src={Hand} alt="handtosayhello" />

            </h1>
            <span className="multiple-text" ref={typedRef}></span>


            <div className="homepage__content">

                <div className="homepage__content-left">
                    <div className="homepage__content-left-all">

                        <div className="homepage__expenses">
                            <h2 className="homepage__expenses-title">Dépenses</h2>
                            <h3 className="homepage__expenses-current">1000 sur 1200 €</h3>
                        </div>

                        <div className="homepage__budget">
                            <h2 className="homepage__expenses-title">Budget</h2>
                            <h3 className="homepage__budget-current">Budget</h3>
                            <button className="homepage__expenses-link">Gérer son budget</button>
                        </div>
                    </div>

                    <div className="homepage__quests">
                        <div className="homepage__mainquest">
                            <h2 className="homepage__expenses-title">Quête principale en cours</h2>
                            <p>Ne pas se doucher pendant 1 semaine pour diminuer son budget eau du mois</p>
                        </div>

                        <div className="homepage__sidequest">
                            <h2 className="homepage__expenses-title">Quête secondaire suivie</h2>
                            <p>Aller au cinéma sans acheter du popcorn</p>
                            <button className="homepage__expenses-link">Voir toutes les quêtes</button>
                        </div>
                    </div>
                </div>

                <div className="homepage__content-right">
                    <div className="homepage__buttons">
                        <button value="daily" onClick={handleChangeChartData}>Journalier</button>
                        <button value="weekly" onClick={handleChangeChartData}>Hebdomadaire</button>
                        <button value="monthly" onClick={handleChangeChartData}>Mensuel</button>
                        <button value="yearly" onClick={handleChangeChartData}>Annuel</button>
                    </div>
                    <div className="homepage__charts">
                        <Doughnut data={chartData} id="myChart" />
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
};

export default Homepage;