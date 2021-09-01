import { useState } from "react";
import Card from "../UI/Card";
import './Expenses.css';
import ExpenseList from './ExpensesList'
import ExpensesFilter from "./ExpensesFilter";
import ExpensesChart from "./ExpensesChart";

const Expenses = (props) => {

    const [filteredYear, setFilteredYear] = useState('2021');

    const filterChangeHandler = selectedYear => {
        setFilteredYear(selectedYear);
    };
    const filtertedExpenses = props.expenses.filter(expense => {
        return expense.date.getFullYear().toString() === filteredYear;
    })

    return (
        <Card className="expenses">
            <ExpensesFilter
                selected={filteredYear}
                onChangeFilter={filterChangeHandler}
            />
            <ExpensesChart expenses={filtertedExpenses} />
            <ExpenseList filteredItems={filtertedExpenses} onRemoveItem={props.onRemoveItem} />
        </Card>
    )
}

export default Expenses;