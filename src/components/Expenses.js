import React, { useContext, useState } from 'react'
import { Context } from '../context.js'

export default function Expenses() {
    const dispatchedExpenses = useContext(Context).expenses
    const [expenses, setExpenses] = useState(dispatchedExpenses)

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
                    </li>
                ))}
            </ul>
        </div>
    )
}
