import { useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import Header from "./components/Header/Header";
import NewExpense from "./components/NewExpense/NewExpense";
const DUMMY_EXPENSES = [
  {
    id: 'e0',
    title: 'Iphone',
    amount: 994.9,
    date: new Date(2020, 2, 7),
  },
  {
    id: 'e1',
    title: 'Toilet Paper',
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  {
    id: 'e2',
    title: 'New TV',
    amount: 799.49,
    date: new Date(2021, 2, 12)
  },
  {
    id: 'e3',
    title: 'Car Insurance',
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: 'e4',
    title: 'New Desk (Wooden)',
    amount: 450,
    date: new Date(2021, 5, 12),
  },
]
const App = () => {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES)

  const addExpenseHandler = (newExpense) => {
    setExpenses((prevState) => {
      return [newExpense, ...prevState]
    })
  }
  const removeExpenseHandler = (itemId) => {
    setExpenses((prevState) => {
      return prevState.filter(item => item.id !== itemId)
    })
  }
  return (
    <div>
      <Header />
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses expenses={expenses} onRemoveItem={removeExpenseHandler} />
    </div>
  );

}

export default App;
