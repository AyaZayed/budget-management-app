import React, { useContext, useEffect, useState } from 'react'
import { Context } from '../context.js'

export default function Expenses() {

    const expenses = useContext(Context).expenses
    const dispatch = useContext(Context).dispatch
    const [displayedExpenses, setDisplayedExpenses] = useState(expenses || [])

    useEffect(() => {
        setDisplayedExpenses(expenses)
    }, [expenses])

    function deleteExpense(id) {
        console.log(id)
        dispatch({
            type: 'DELETE_EXPENSE',
            payload: id
        })
        setDisplayedExpenses(displayedExpenses.filter((expense) => expense.id !== id))
    }

    function searchExpenses(e) {
        const searchValue = e.target.value.toLowerCase()
        const filteredExpenses = expenses.filter((expense) => {
            return expense.name.toLowerCase().includes(searchValue)
        })
        setDisplayedExpenses(filteredExpenses)
    }

    return (
        <div className='expenses-list'>
            <h2>Expenses</h2>
            <input type='text' placeholder='Type to search...' onChange={searchExpenses} />
            <ul>
                {displayedExpenses.map((expense) => (
                    <li key={expense.id}>
                        <p>{expense.name}</p>
                        <div>
                            <span>${expense.cost}</span>
                            <button className='primary-btn' onClick={() => deleteExpense(expense.id)}>X</button>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    )
}
