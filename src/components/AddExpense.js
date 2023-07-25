import React, { useContext, useState } from 'react'
import { Context } from '../context'
import { v4 as uuidv4 } from 'uuid'

export default function AddExpense() {
    const [inputs, setInputs] = useState({
        name: '',
        cost: ''
    })

    const dispatch = useContext(Context).dispatch

    const AddExpense = (e) => {
        e.preventDefault()
        dispatch({
            type: 'ADD_EXPENSE',
            payload: {
                id: uuidv4(),
                name: inputs.name,
                cost: inputs.cost
            }
        })
        setInputs({
            name: '',
            cost: ''
        })
    }

    return (
        <div className='add-expense'>
            <h2>Add Expense</h2>
            <form onSubmit={AddExpense}>
                <div className='wrapper'>
                    <div className='form-group'>
                        <label htmlFor='name'>Name</label>
                        <input type='text' id='name' required='required' value={inputs.name}
                            onChange={(e) => setInputs({ ...inputs, name: e.target.value })} />
                    </div>
                    <div className='form-group'>
                        <label htmlFor='cost'>Cost</label>
                        <input type='number' id='cost' required='required' value={inputs.cost}
                            onChange={(e) => setInputs({ ...inputs, cost: e.target.value })} />
                    </div>
                </div>
                <button type='submit' className='primary-btn'>Add</button>
            </form>
        </div>
    )
}
