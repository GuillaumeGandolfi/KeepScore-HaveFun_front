
import { FETCH_DAILY_DATA, FETCH_MONTHLY_DATA, FETCH_WEEKLY_DATA, FETCH_YEARLY_DATA, saveDaylyData, saveWeeklyData,saveMonthlyData,saveYearlyData } from "../actions/fetchDataActions";
import { axiosPrivate } from "../axios/axiosPrivate";



const fetchDataMiddleware = (store) => (next) => (action) => {
    const { id } = store.getState().user
    
    switch(action.type){
        case FETCH_DAILY_DATA:
            axiosPrivate
            .get(`/transaction/day/${id}`)
            .then((response) => {
                const daylyData = response.data
                store.dispatch(saveDaylyData(daylyData))
                console.log(daylyData)
            })
            .catch((error)=>{
                console.log(error)
            })
            break;
        case FETCH_WEEKLY_DATA:
            axiosPrivate
            .get(`/transaction/week/${id}`)
            .then((response) => {
                const weeklyData = response.data
                store.dispatch(saveWeeklyData(weeklyData))
                console.log(weeklyData)
            })
            .catch((error)=>{
                console.log(error)
            })
            break;
            case FETCH_MONTHLY_DATA:
                axiosPrivate
                .get(`/transaction/month/${id}`)
                .then((response) => {
                    const monthlyData = response.data
                    store.dispatch(saveMonthlyData(monthlyData))
                    console.log(monthlyData)
                })
                .catch((error)=>{
                    console.log(error)
                })
                break;
                case FETCH_YEARLY_DATA:
                    axiosPrivate
                    .get(`/transaction/year/${id}`)
                    .then((response) => {
                        const yearlyData = response.data
                        store.dispatch(saveYearlyData(yearlyData))
                        console.log(yearlyData)
                    })
                    .catch((error)=>{
                        console.log(error)
                    })
                    break;

        default:
    }
    next(action);
}

export default fetchDataMiddleware