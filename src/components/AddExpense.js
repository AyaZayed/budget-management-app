// import React, { useContext, useState } from 'react'
// import { Context } from '../context'
// import { v4 as uuidv4 } from 'uuid'

// export default function AddExpense() {
//     const [inputs, setInputs] = useState({
//         name: '',
//         cost: ''
//     })

//     const { dispatch } = useContext(Context)

//     const AddExpense = () => {
//         const expense = {
//             id: uuidv4(),
//             name: inputs.name,
//             cost: inputs.cost
//         }
//         dispatch({
//             type: 'ADD_EXPENSE',
//             payload: expense
//         })
//         setInputs({
//             name: '',
//             cost: ''
//         })
//     }

//     return (
//         <div className='add-expense'>
//             <h2>Add Expense</h2>
//             <form onSubmit={AddExpense}>
//                 <div className='form-group'>
//                     <div>
//                         <label htmlFor='name'>Name</label>
//                         <input type='text' id='name' required='required'
//                             onChange={(e) => setInputs({ ...inputs, name: e.target.value })} />
//                     </div>
//                     <div>
//                         <label htmlFor='cost'>Cost</label>
//                         <input type='text' id='cost' required='required'
//                             onChange={(e) => setInputs({ ...inputs, cost: e.target.value })} />
//                     </div>
//                 </div>
//                 <button type='submit'>Add</button>
//             </form>
//         </div>
//     )
// }
