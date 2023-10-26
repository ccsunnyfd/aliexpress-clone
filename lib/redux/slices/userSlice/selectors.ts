/* Instruments */
import type { ReduxState } from '@/lib/redux'

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.counter.value)`
export const selectUserId = (state: ReduxState) => state.user.id
export const selectName = (state: ReduxState) => state.user.name
export const selectBio = (state: ReduxState) => state.user.bio
export const selectImage = (state: ReduxState) => state.user.image
