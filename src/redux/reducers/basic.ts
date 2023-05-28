import { BASIC_ADD_NAME } from '../types'
const initialState =  {
  userName: ''
}
const reducer = function (state = initialState, action: any) {
  const { type } = action
  switch (type) {
    case BASIC_ADD_NAME:
      return {
        ...state,
        userName: action.payload.userName
      }
    default:
      return state
  }
  
}

export default reducer