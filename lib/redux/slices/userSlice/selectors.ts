/* Instruments */
import type { ReduxState } from '@/lib/redux'
import { createSelector } from '@reduxjs/toolkit'

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.counter.value)`
export const selectShowMenuOverlay = (state: ReduxState) => state.user.showMenuOverlay
export const selectCartProducts = (state: ReduxState) => state.user.cart
