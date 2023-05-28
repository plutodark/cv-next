import { USER_LOGIN } from '../types'
const initialState =  {
  isLoggedIn: false,
  email: ''
}
const reducer = function (state = initialState, action: any) {
  const { type } = action
  switch (type) {
    case USER_LOGIN:
      return {
        ...state,
        isLoggedIn: action.payload.isLoggedIn,
        email: action.payload.email
      }
    default:
      return state
  }
  
}

export default reducer