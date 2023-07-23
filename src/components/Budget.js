import React, { useContext } from 'react'
import { Context } from '../context'

export default function Budget() {
    const budget = useContext(Context).budget
    const dispatch = useContext(Context).dispatch
    const remaining = useContext(Context).expenses.reduce((total, item) => {
        return (total = total - item.cost)
    }, budget)

    const spent = budget - remaining;

    function editBudget() {
        const newBudget = prompt('Enter new budget')
        dispatch({
            type: 'SET_BUDGET',
            payload: newBudget
        })
    }

    return (
        <div className='budget-section'>
            <h1>My Budget Planner</h1>
            <div className='card'>
                <p>Budget: ${budget}</p>
                <button onClick={editBudget}>Edit</button>
            </div>
            <div className='card'>
                <p>Remaining: ${remaining}</p>
            </div>
            <div className='card'>
                <p>Spent so far: ${spent}</p>
            </div>
        </div>
    )
}
