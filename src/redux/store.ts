import { configureStore } from '@reduxjs/toolkit'
import { combineReducers } from 'redux'

import { themeReducer } from './slices/Theme.slice'

const rootReducer = combineReducers({
  theme: themeReducer
})

export const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware => getDefaultMiddleware({ serializableCheck: false })
})

export default store

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
