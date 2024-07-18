import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { DEFAULT_THEME_MODE, LAYOUT_STORAGE_KEY } from '@/core/constants'
import { ThemeMode, ThemeState } from '@/core/models/Theme.model'
import LocalStorageManager from '@/utils/LocalStorageManager'

const initialState: ThemeState = {
  mode: (LocalStorageManager.get(LAYOUT_STORAGE_KEY) as ThemeState)?.mode ?? DEFAULT_THEME_MODE
}

const ThemeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    changeMode: (state, actions: PayloadAction<ThemeMode>) => {
      state.mode = actions.payload
      LocalStorageManager.set(LAYOUT_STORAGE_KEY, state)
    }
  }
})

export const { changeMode } = ThemeSlice.actions

export const themeReducer = ThemeSlice.reducer
