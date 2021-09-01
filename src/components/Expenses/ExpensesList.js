import ExpenseItem from './ExpenseItem'
import './ExpensesList.css'

const ExpenseList = props => {
    if (props.filteredItems.length === 0) {
        return (
            <h2 className="expenses-list__fallback">
                No expenses found!
            </h2>
        )
    } else {
        return (
            <ul className="expenses-list">
                {props.filteredItems.map(expense =>
                    <ExpenseItem
                        key={expense.id}
                        expense={expense}
                        handleRemove={(itemId) => props.onRemoveItem(itemId)}
                    />
                )}
            </ul>
        )
    }

}

export default ExpenseList;