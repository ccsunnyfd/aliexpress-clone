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
            state.cart.push(action.payload)
        }
    },
})