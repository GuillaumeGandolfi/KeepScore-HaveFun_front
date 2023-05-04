import * as dayjs from "dayjs";
import {
  FETCH_DAILY_DATA,
  FETCH_MONTHLY_DATA,
  FETCH_WEEKLY_DATA,
  FETCH_YEARLY_DATA,
  FETCH_BUDGETS,
  FETCH_EXPENSES,
  SAVE_NEW_BUDGET,
  SAVE_NEW_EXPENSE,
  saveDaylyData,
  saveWeeklyData,
  saveMonthlyData,
  saveYearlyData,
} from "../actions/fetchDataActions";
import { axiosPrivate } from "../axios/axiosPrivate";
import { saveBudgetsState, saveExpensesState } from "../actions/budgetActions";

const fetchDataMiddleware = (store) => (next) => (action) => {
  const { id } = localStorage.getItem("use") === null ? 0 : JSON.parse(localStorage.getItem("user"));

  switch (action.type) {
    case FETCH_DAILY_DATA:
      axiosPrivate
        .get(`/transaction/day/${id}`)
        .then((response) => {
          const daylyData = response.data;
          store.dispatch(saveDaylyData(daylyData));
        })
        .catch((error) => {
          console.log(error);
        });
      break;
    case FETCH_WEEKLY_DATA:
      axiosPrivate
        .get(`/transaction/week/${id}`)
        .then((response) => {
          const weeklyData = response.data;
          store.dispatch(saveWeeklyData(weeklyData));
        })
        .catch((error) => {
          console.log(error);
        });
      break;
    case FETCH_MONTHLY_DATA:
      axiosPrivate
        .get(`/transaction/month/${id}`)
        .then((response) => {
          const monthlyData = response.data;
          store.dispatch(saveMonthlyData(monthlyData));
        })
        .catch((error) => {
          console.log(error);
        });
      break;
    case FETCH_YEARLY_DATA:
      axiosPrivate
        .get(`/transaction/year/${id}`)
        .then((response) => {
          const yearlyData = response.data;
          store.dispatch(saveYearlyData(yearlyData));
          console.log(yearlyData);
        })
        .catch((error) => {
          console.log(error);
        });
      break;
    case FETCH_BUDGETS:
      axiosPrivate
        .get(`/budget-user/${id}`)
        .then((response) => {
          const budgets = response.data.map((budget) => ({
            ...budget,
            created_at: dayjs(budget.created_at).valueOf(),
            //color: `${response.data.length * 34} 65% 50%`,
          }));
          localStorage.setItem("budgets", JSON.stringify(budgets));
          store.dispatch(saveBudgetsState(budgets));
        })

        .catch((error) => {
          console.log(error);
        });
      break;
    case FETCH_EXPENSES:
      axiosPrivate
        .get(`/transactions/user/${id}`)
        .then((response) => {
          const expenses = response.data.map((expense) => ({
            ...expense,
            created_at: dayjs(expense.created_at).valueOf(),
          }));
          localStorage.setItem("expenses", JSON.stringify(expenses));
          store.dispatch(saveExpensesState(expenses));
        })
        .catch((error) => {
          console.log(error);
        });
      break;
    case SAVE_NEW_BUDGET:
      const lastBudget = action.newItem;
      axiosPrivate
        .post("/budget", {
          lastBudget,
        })
        .then((response) => {
          const budgets = response.data.map((budget) => ({
            ...budget,
            created_at: dayjs(budget.created_at).valueOf(),
          }));
          localStorage.setItem("budgets", JSON.stringify(budgets));
          store.dispatch(saveBudgetsState(budgets));
        })
        .catch((error) => {
          console.log(error);
        });
      break;
    case SAVE_NEW_EXPENSE:
      const lastExpense = action.newItem;
      axiosPrivate
        .post("/transaction", {
          lastExpense,
        })
        .then((response) => {
          const expenses = response.data.map((expense) => ({
            ...expense,
            created_at: dayjs(expense.created_at).valueOf(),
          }));
          localStorage.setItem("expenses", JSON.stringify(expenses));
          store.dispatch(saveExpensesState(expenses));
        })
        .catch((error) => {
          console.log(error);
        });
      break;

    default:
  }
  next(action);
};

export default fetchDataMiddleware;
