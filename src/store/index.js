import { configureStore } from '@reduxjs/toolkit'
import session from './session'
import userReducer from './user';

export default configureStore({
  reducer: {
    session,
    user: userReducer,
  },
})
