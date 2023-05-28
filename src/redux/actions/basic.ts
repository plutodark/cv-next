import { BASIC_ADD_NAME } from "../types";

export const addUserName = (userName: string) => ({
  type: BASIC_ADD_NAME,
  payload: {
    userName
  }
})