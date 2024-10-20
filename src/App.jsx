import { useEffect, useState } from 'react';
import './App.css';
import { NewExpenseForm } from './NewExpenseForm';
import { ExpenseList } from './ExpenseList';

export default function App() {

  const [expense, setExpense] = useState(() => {
    const localValue = localStorage.getItem("expense")
    if (localValue == null) return []

    return JSON.parse(localValue)
  })

  useEffect(() => {

    localStorage.setItem('expense', JSON.stringify(expense));
  }, [expense])

  const [totalExpenses, setTotalExpenses] = useState(0);



  useEffect(() => {
    localStorage.setItem('expense', JSON.stringify(expense));

    setTotalExpenses(expense.reduce((total, exp) => total + exp.amount, 0));
  }, [expense]);

  
  useEffect(() => {
    localStorage.setItem('totalExpenses', totalExpenses);
  }, [totalExpenses]);


  function addExpense(title, amt, date, type) {

    const amount = parseFloat(amt);

    setExpense(currentExp => {
      const updatedExpenses = [
        ...currentExp,
        {
          id: crypto.randomUUID(),
          title,
          amount,
          date,
          type,
          completed: false
        },
      ];

      return updatedExpenses;
    });

  }

  function handleDelete(id) {
    setExpense(currentExp => {
      const updatedExpenses = currentExp.filter(exp => exp.id !== id);

      return updatedExpenses;
    });
  }

  return (
    <>
      <NewExpenseForm onSubmit={addExpense} />
      <h1 className="header"> Expense Tracker</h1>
      <h2>Your Expenses:</h2>

      <ExpenseList expense={expense} handleDelete={handleDelete} />

      <h3>Total Expenses: ${totalExpenses.toFixed(2)}</h3>
    </>
  )
}
