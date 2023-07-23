import React, { useContext, useState } from 'react'
import { Context } from '../context.js'

export default function Expenses() {

    const dispatchedExpenses = useContext(Context).expenses
    const [expenses, setExpenses] = useState(dispatchedExpenses)
    const dispatch = useContext(Context).dispatch

    function deleteExpense(id) {
        console.log(id)
        dispatch({
            type: 'DELETE_EXPENSE',
            payload: id
        })
        setExpenses(expenses.filter((expense) => expense.id !== id))
    }

    function searchExpenses(e) {
        if (e.target.value === '') {
            setExpenses(dispatchedExpenses)
            return
        }
        const newExpenses = expenses.filter((expense) => {
            return expense.name.toLowerCase().includes(e.target.value)
        })
        setExpenses(newExpenses)
    }

    return (
        <div className='expenses-list'>
            <h2>Expenses</h2>
            <input type='text' placeholder='Type to search...' onChange={searchExpenses} />
            <ul>
                {expenses.map((expense) => (
                    <li key={expense.id}>
                        <span>{expense.name}</span>
                        <span>{expense.cost}</span>
                        <button onClick={() => deleteExpense(expense.id)}>x</button>
                    </li>
                ))}
            </ul>
        </div>
    )
}
