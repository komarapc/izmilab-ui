import { DEBUG } from '@/config/app'
import {configureStore} from '@reduxjs/toolkit'
import themeReducer from './reducer/themeReducer'

export const store = configureStore({
  reducer:{
    theme: themeReducer
  },
  devTools: DEBUG
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
