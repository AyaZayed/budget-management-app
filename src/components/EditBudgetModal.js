import React, { useState } from 'react'

export default function Modal({ setShowModal, editBudget, budget }) {
    const [newBudget, setNewBudget] = useState(budget)

    function handleEditBudget(e) {
        e.preventDefault()
        editBudget(newBudget)
        setShowModal(false)
    }

    return (
        <div className='backdrop'>
            <div className='modal'>
                <button className='close' onClick={() => setShowModal(false)}>X</button>
                <form onSubmit={handleEditBudget}>
                    <h3>Enter new budget</h3>
                    <input type='number' value={newBudget} onChange={(e) => setNewBudget(e.target.value)} />
                    <button className='primary-btn' type='submit'>Save</button>
                </form>
            </div>
        </div>
    )
}