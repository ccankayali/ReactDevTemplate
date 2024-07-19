import { combineReducers, configureStore } from '@reduxjs/toolkit'

import { authReducer } from '@/modules/auth/redux/Auth.slice'

import { themeReducer } from './slices/Theme.slice'

const rootReducer = combineReducers({
  theme: themeReducer,
  auth: authReducer
})

export const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware => getDefaultMiddleware({ serializableCheck: false })
})

export default store

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch