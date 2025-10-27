import type { MenuItem, OrderItem } from "../types"


export type OrderActions = 
    {
        type: 'addItem',
        payload: {item : MenuItem}
    } | 
    {
        type: 'removeItem',
        payload: {itemId : MenuItem["id"]}
    } |
    {
        type: 'placeOrder'
    } |
    {
        type: 'addTip',
        payload: {value: Number}
    }

export type OrderState = {
    order: OrderItem[],
    tip: Number
}

export const initialState = {
    order : [],
    tip: 0
}

export const orderReducer = (
    state: OrderState = initialState,
    action: OrderActions
    ) => {

        if(action.type === 'addItem'){
            const itemExists = state.order.find(orderItem => orderItem.id === action.payload.item.id)
            let updatedOrder : OrderItem[] = []
            if (itemExists) {
                updatedOrder = state.order.map(orderItem =>
                    orderItem.id === action.payload.item.id
                        ? {...orderItem, quantity: orderItem.quantity + 1 }
                        : orderItem
                )
            } else {
                const newItem : OrderItem = {...action.payload.item, quantity: 1 }
                updatedOrder = [...state.order, newItem]
            }

            return {
                ...state,
                order: updatedOrder
            }
        }

        if(action.type === 'removeItem'){
            const updatedOrder = state.order.filter(item => item.id !== action.payload.itemId)
            return {
                ...state,
                order: updatedOrder

            }
        }

        if(action.type === 'placeOrder'){
            return {
                ...state,
                order: [],
                tip: 0
            }
        }

        if(action.type === 'addTip'){
            return {
                ...state,
                tip: action.payload.value
            }
        }
        return state
    }