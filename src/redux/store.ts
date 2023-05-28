import { configureStore } from '@reduxjs/toolkit'
import basic from './reducers/basic'
import user from './reducers/user'
const store = configureStore({
  reducer: {
    basic,
    user
  },
})
export default store
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
