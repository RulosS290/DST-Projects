import { db } from "../data/db"
import type { CartItem, Guitar } from "../types"

export type CartActions = 
    {
        type: 'addToCart'
        payload: {item: Guitar}
    } |
    {
        type: 'removeFromCart',
        payload: {guitarId: Guitar["id"]}
    } |
    {
        type: 'increaseQuantity',
        payload: {guitarId: Guitar["id"]}
    } |
    {
        type: 'decreaseQuantity',
        payload: {guitarId: Guitar["id"]}
    } |
    {
        type: 'clearCart'
    }

export type CartState = {
    data: Guitar[],
    cart: CartItem[]
}

const initialCart = () : CartItem[] => {
    const localStorageCart =  localStorage.getItem('cart')
    return localStorageCart ? JSON.parse(localStorageCart) : []
}

export const initialState : CartState = {
    data: db,
    cart: initialCart()
}

    const MAX_ITEMS = 5
    const MIN_ITEMS = 1

export const cartReducer = (
        state: CartState = initialState,
        action: CartActions
    ) => {
        if (action.type === "addToCart") {
            const itemExist = state.cart.find(guitar => guitar.id === action.payload.item.id)
            let updatedCart : CartItem[] = []
            if (itemExist) {
                updatedCart = state.cart.map(item => {
                    if(item.id === action.payload.item.id) {
                        if(item.quantity < MAX_ITEMS) {
                            return {...item, quantity: item.quantity + 1}
                        } else {
                            return item
                        }
                    } else {
                        return item
                    }
                })
            } else {
                const newItem : CartItem =  {...action.payload.item, quantity : 1 }
                updatedCart = [...state.cart, newItem]
            }

            return {
                ...state,
                cart: updatedCart
            }
        }

        if (action.type === "removeFromCart") {

            return {
                ...state,
                cart: state.cart.filter(guitar => guitar.id !== action.payload.guitarId)
            }
        }

        if (action.type === "increaseQuantity") {
                const updateCart = state.cart.map(item => {
                    if (item.id === action.payload.guitarId && item.quantity < MAX_ITEMS) {
                        return {...item,
                        quantity: item.quantity + 1
                        }
                    }
                    return item
                })
            return {
                ...state,
                cart: updateCart
            }
        }

        if (action.type === "decreaseQuantity") {
            const updateCart = state.cart.map(item => {
                if (item.id === action.payload.guitarId && item.quantity > MIN_ITEMS) {
                    return {...item,
                    quantity: item.quantity - 1
                    }
                }
                return item
            })
            
            return {
                ...state,
                cart: updateCart
            }
        }

        if (action.type === "clearCart") {

            return {
                ...state,
                cart: []
            }
        }

        return state
    } 