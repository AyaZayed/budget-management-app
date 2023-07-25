import React, { useContext, useState } from 'react'
import { Context } from '../context'
import Modal from './EditBudgetModal'

export default function Budget() {
    const budget = useContext(Context).budget
    const dispatch = useContext(Context).dispatch
    const remaining = useContext(Context).expenses.reduce((total, item) => {
        return (total = total - item.cost)
    }, budget)

    const spent = budget - remaining;

    const [showModal, setShowModal] = useState(false)

    function editBudget(newBudget) {
        dispatch({
            type: 'SET_BUDGET',
            payload: newBudget
        })
    }

    return (
        <div className='budget-section'>
            <h1>My Budget Planner</h1>
            <div className='cards'>
                <div className='card'>
                    <p>Budget: <span>${budget}</span></p>
                    <button className='primary-btn' onClick={() => setShowModal(true)}>Edit</button>
                </div>
                <div className='card'>
                    <p>Remaining: <span>${remaining}</span></p>
                </div>
                <div className='card'>
                    <p>Spent so far: <span>${spent}</span></p>
                </div>
            </div>
            {showModal && <Modal setShowModal={setShowModal} editBudget={editBudget} budget={budget} />}
        </div>
    )
}
