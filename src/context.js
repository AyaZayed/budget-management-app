import { createContext, useReducer } from 'react'
import { v4 as uuidv4 } from 'uuid'

export const appReducer = (state, action) => {
    switch (action.type) {
        case 'ADD_EXPENSE':
            return {
                ...state,
                expenses: [...state.expenses, action.payload]
            }
        case 'DELETE_EXPENSE':
            return {
                ...state,
                expenses: state.expenses.filter(
                    (expense) => expense.id !== action.payload
                )
            }
        case 'SET_BUDGET':
            return {
                ...state,
                budget: action.payload
            }
        default:
            return state
    }
}

const initialState = {
    budget: 2000,
    expenses: [
        { id: uuidv4(), name: 'shopping', cost: 40 },
        { id: uuidv4(), name: 'holiday', cost: 400 },
        { id: uuidv4(), name: 'car service', cost: 50 },
    ],
}

export const Context = createContext()

export function Provider(props) {

    const [state, dispatch] = useReducer(appReducer, initialState)

    return (
        <Context.Provider value={{
            budget: state.budget,
            expenses: state.expenses,
            dispatch,
        }}>
            {props.children}
        </Context.Provider>
    )
}
