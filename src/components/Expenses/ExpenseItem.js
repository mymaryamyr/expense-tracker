import React from 'react';
import Card from '../UI/Card';
import ExpenseDate from './ExpenseDate';
import './ExpenseItem.css';

const ExpenseItem = (props) => {

    const expense = props.expense
    const handleRemove = () => {
        props.handleRemove(expense.id)
    }
    return (
        <li>
            <Card className="expense-item">
                <ExpenseDate date={expense.date} />
                <div className="expense-item__description">
                    <h2>{expense.title}</h2>
                    <div className="expense-item__price">${expense.amount}</div>
                    <button className="expense-item__remove" onClick={handleRemove}>&#10006;</button>
                </div>
            </Card>
        </li>
    )

}

export default ExpenseItem;