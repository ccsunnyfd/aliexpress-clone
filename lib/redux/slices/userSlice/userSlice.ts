import { createSlice, type PayloadAction } from '@reduxjs/toolkit'

export interface UserSliceState {
    id: string
    name: string
    bio: string
    image: string
}

const initialState: UserSliceState = {
    id: '',
    name: '',
    bio: '',
    image: ''
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        resetUser: (state) => {
            state.id = ''
            state.name = ''
            state.bio = ''
            state.image = ''
        },
    },
})