import { useReducer, createContext, type Dispatch, type ReactNode, useMemo } from "react"
import { budgetReducer, initialState, type BudgetActions, type BudgetState } from "../reducers/budgetReducer"

type BudgetContextProps = {
    state: BudgetState,
    dispatch: Dispatch<BudgetActions>,
    totalExpenses: number,
    available: number
}

type BudgetProviderProps = {
    children: ReactNode
}

export const BudgetContext = createContext<BudgetContextProps>(null!)

export const BudgetProvider = ({children} : BudgetProviderProps) => {

    const [state, dispatch] = useReducer(budgetReducer, initialState)

    const totalExpenses = useMemo(() => state.expenses.reduce((total, expense) => expense.amount + total, 0), [state.expenses])
    
    const available = useMemo(() => state.budget - totalExpenses, [state.budget, totalExpenses])

    return (
        <BudgetContext.Provider
            value={{
                state,
                dispatch,
                totalExpenses,
                available
            }}
        >
            {children}
        </BudgetContext.Provider>
    )
}