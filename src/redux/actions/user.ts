import { USER_LOGIN } from "../types";

export const login = ({ isLoggedIn = false, email = '' }) => ({
  type: USER_LOGIN,
  payload: {
    isLoggedIn,
    email
  }
})