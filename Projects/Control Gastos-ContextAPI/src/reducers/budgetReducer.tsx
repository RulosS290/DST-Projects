import { v4 as uuidv4} from 'uuid'
import type { DraftExpense, Expense } from "../types"

export type BudgetActions = 
    {
        type: 'addBudget',
        payload: {budget: number}
    } |
    {
        type: 'showModal'
    } |
    {
        type: 'closeModal'
    } |
    {
        type: 'addExpense',
        payload: {expense: DraftExpense}
    } |
    {
        type: 'removeExpense',
        payload: {id: Expense['id']}
    } |
    {
        type: 'getExpenseToEdit',
        payload: {id: Expense['id']}
    } |
    {
        type: 'updateExpense',
        payload: {expense: Expense}
    }

export type BudgetState = {
    budget: number
    modal: boolean
    expenses: Expense[]
    editingId: Expense['id']
}

const initialBudget = () : number => {
    const localStorageBudget = localStorage.getItem('budget') 
    return localStorageBudget ? +localStorageBudget : 0
}

const localStorageExpenses = () : Expense[] => {
    const localStorageExpenses = localStorage.getItem('expenses')
    return localStorageExpenses ? JSON.parse(localStorageExpenses) : []
}

export const initialState : BudgetState = {
    budget: initialBudget(),
    modal: false,
    expenses: localStorageExpenses(),
    editingId: ''
}

const createExpense = (draftExpense : DraftExpense) : Expense => {
    return {
        ...draftExpense,
        id: uuidv4()
    }
}

export const budgetReducer = (
        state: BudgetState = initialState,
        action: BudgetActions
    ) => {
        if(action.type === 'addBudget') {
            return {
                ...state,
                budget: action.payload.budget
            }
        }

        if(action.type === 'showModal'){
            return {
                ...state,
                modal: true
            }
        }

        if(action.type === 'closeModal'){
            return {
                ...state,
                modal: false,
                editingId: ''
            }
        }

        if(action.type === 'addExpense'){
            const expense = createExpense(action.payload.expense)
            return {
                ...state,
                expenses: [...state.expenses, expense],
                modal: false

            }
        }

        if(action.type === 'removeExpense'){
            return {
                ...state,
                expenses: state.expenses.filter(expense => expense.id !== action.payload.id)
            }
        }

        if(action.type === 'getExpenseToEdit'){
            return {
                ...state,
                modal: true,
                editingId: action.payload.id
            }
        }

        if(action.type === 'updateExpense'){
            return {
                ...state,
                modal: false,
                editingId: '',
                expenses: state.expenses.map(expense => expense.id === action.payload.expense.id ? action.payload.expense : expense)
            }
        }

        return state
    }

