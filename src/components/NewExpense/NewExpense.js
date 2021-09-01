import ExpenseForm from "./ExpensForm";
import "./NewExpense.css";

const NewExpense = (props) => {

    const saveExpenseDataHandler = (submitedExpenseData) => {
        const expensData = {
            ...submitedExpenseData,
            id: Math.random().toString()
        }
        props.onAddExpense(expensData)
    }
    return (
        <div className="new-expense">
            <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />
        </div>
    )
}

export default NewExpense;