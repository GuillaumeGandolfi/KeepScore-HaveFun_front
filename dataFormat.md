'''js
const BudgetItem = ({ budget, showDelete = false }) => {
    const { id, name, amount, color } = budget;
'''

'''js
const ExpenseItem = ({ expense, showBudget }) => {
    const fetcher = useFetcher();

    const budget = getAllMatchingItems({
        category: "budgets",
        key: "id",
        value: expense.budgetId,
    })[0];
    '''

    