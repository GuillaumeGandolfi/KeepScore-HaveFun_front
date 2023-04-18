import {useState} from "react";
import './homepage.css';

// Import des components Header & Footer
import Header from '../Header/Header'
import Footer from '../Footer/Footer'

// Import des data & du Donut ChartJS
import {UserData} from "../../Data.jsx";
import DoughnutChart from "./DoughnutChart.jsx";


const Homepage = () => {
    const [userData, setUserData] = useState({
        labels: UserData.map((data) => data.year),
        datasets: [{
            label: "Users Gained",
            data: UserData.map((data) => data.userGain),
        }]
    })

    return (
        <div className="homepage__container">
            <Header />
            <div className="homepage__wrap">
                <div className="homepage__main-content">
                    <div className="homepage__charts">
                        <DoughnutChart chartData={userData} />
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Homepage;
