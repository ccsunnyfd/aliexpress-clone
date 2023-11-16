import { createSlice, type PayloadAction } from '@reduxjs/toolkit'

export interface UserSliceState {
    showMenuOverlay: boolean
    cart: Product[]
    checkout: Product[]
}

const initialState: UserSliceState = {
    showMenuOverlay: false,
    cart: [],
    checkout: [],
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
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