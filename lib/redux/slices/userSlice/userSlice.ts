import { createSlice, type PayloadAction } from '@reduxjs/toolkit'

export interface UserSliceState {
    showMenuOverlay: boolean
    cart: Object[]
    checkout: Object[]
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
    },
})