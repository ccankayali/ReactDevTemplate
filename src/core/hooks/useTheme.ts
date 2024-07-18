import { changeMode } from '@/redux/slices/Theme.slice'

import { useAppDispatch, useAppSelector } from './useRedux'

export const useTheme = () => {
  const { mode } = useAppSelector(state => state.theme)

  const dispatch = useAppDispatch()

  const onDarkModeToggle = () => {
    dispatch(changeMode(mode === 'light' ? 'dark' : 'light'))
  }

  return {
    mode,
    onDarkModeToggle
  }
}
