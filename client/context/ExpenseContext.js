import React, { useReducer, useEffect, useContext, Children } from 'react'
import { getData } from '../data/functions'

export const ACTIONS = {
    GET_ALL_EXPENSES: 'get-all',
    ADD_EXPENSE: 'add-expense',
    DELETE_ALL: 'delete-all',
    DELETE_EXPENSE: 'delete-expense'
}

const ExpenseContext = React.createContext()

export function useExpense() {
    return useContext(ExpenseContext)
}

function reducer(expenses, action) {
    switch (action.type) {
        case ACTIONS.GET_ALL_EXPENSES:
            return action.payload
        case ACTIONS.ADD_EXPENSE:
            return [...expenses, action.payload]
        case ACTIONS.DELETE_ALL:
            return []
        case ACTIONS.DELETE_EXPENSE:
            return expenses.filter(expense => expense.id !== action.payload.id)
        default:
            return expenses
    }
}

export function ExpenseProvider({ children }) {
    const [expenses, dispatch] = useReducer(reducer, [])

    useEffect(() => {
        (async () => {
            const getter = await getData()
            dispatch({ type: ACTIONS.GET_ALL_EXPENSES, payload: getter })
        })()
    }, [])

    return (
        <ExpenseContext.Provider value={[expenses, dispatch]}>
            {children}
        </ExpenseContext.Provider>
    )
}