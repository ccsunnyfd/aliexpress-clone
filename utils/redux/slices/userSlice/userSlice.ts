import { createSlice, type PayloadAction } from '@reduxjs/toolkit'

export interface UserSliceState {
    isLoggedIn: boolean
    showMenuOverlay: boolean
    cart: Product[]
    checkout: Product[]
}

const initialState: UserSliceState = {
    isLoggedIn: false,
    showMenuOverlay: false,
    cart: [],
    checkout: [],
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setIsLoggedIn: (state, action: PayloadAction<boolean>) => {
            state.isLoggedIn = action.payload
        },
        switchMenuOverlay: (state, action: PayloadAction<boolean>) => {
            state.showMenuOverlay = action.payload
        },
        addToCart: (state, action: PayloadAction<Product>) => {
            state.cart.forEach((prod) => {
                if (prod.id === action.payload.id) {
                    // add amount on previous product
                    prod.amount!++
                    return
                }
            })
            state.cart.push({ amount: 1, ...action.payload })
        },
        deleteFromCart: (state, action: PayloadAction<Number>) => {
            state.cart = state.cart.filter((prod) => prod.id !== action.payload)
        }
    },
})