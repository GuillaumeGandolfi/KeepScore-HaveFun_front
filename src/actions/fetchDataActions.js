export const FETCH_DAILY_DATA = 'FETCH_DAILY_DATA';
export const FETCH_WEEKLY_DATA = 'FETCH_WEEKLY_DATA';
export const FETCH_MONTHLY_DATA = 'FETCH_MONTHLY_DATA';
export const FETCH_YEARLY_DATA = 'FETCH_YEARLY_DATA';
export const SAVE_DAILY_TRANSACTIONS  = 'SAVE_DAILY_TRANSACTIONS';
export const SAVE_WEEKLY_TRANSACTIONS  = 'SAVE_WEEKLY_TRANSACTIONS';
export const SAVE_MONTHLY_TRANSACTIONS  = 'SAVE_MONTHLY_TRANSACTIONS';
export const SAVE_YEARLY_TRANSACTIONS  = 'SAVE_YEARLY_TRANSACTIONS';


export const fetchWeeklyData = () => ({
    type: FETCH_WEEKLY_DATA
})
export const saveWeeklyData = (weeklyData) => ({
    type:SAVE_WEEKLY_TRANSACTIONS,
    weeklyData,
})


export const fetchDailyData = () => ({
    type: FETCH_DAILY_DATA
})
export const saveDaylyData = (daylyData) => ({
    type:SAVE_DAILY_TRANSACTIONS,
    daylyData,
})


export const fetchMonthlyData = () => ({
    type: FETCH_MONTHLY_DATA
})
export const saveMonthlyData = (monthlyData) => ({
    type:SAVE_MONTHLY_TRANSACTIONS,
    monthlyData,
})


export const fetchYearlyData = () => ({
    type: FETCH_YEARLY_DATA
})
export const saveYearlyData = (yearlyData) => ({
    type:SAVE_YEARLY_TRANSACTIONS,
    yearlyData,
})
