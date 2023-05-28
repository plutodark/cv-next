import { Magic } from 'magic-sdk'
import { useAppDispatch } from '@/redux/hooks'
import { login } from '@/redux/actions/user'

const Login = () => {
  const dispatch = useAppDispatch()
  const checkUser = async () => {
    const magic = new Magic('pk_live_0DF96D9E5EC9BFD8')
    const isLoggedIn = await magic.user.isLoggedIn()
    if (isLoggedIn) {
      const user = await magic.user.getMetadata()
      return dispatch(login({isLoggedIn: true, email: user.email || '' }))
    }
    return dispatch(login({ isLoggedIn: false }))
  }
  
  const loginUser = async (email: string) => {
    const magic = new Magic('pk_live_0DF96D9E5EC9BFD8')
    const result = await magic.auth.loginWithMagicLink({ email })
    console.log('login result', result)
    checkUser()
  };
  
  const logoutUser = async () => {
    const magic = new Magic('pk_live_0DF96D9E5EC9BFD8')
    const result = await magic.user.logout()
    console.log('logout result', result)
    checkUser()
  }
  return {
    checkUser,
    loginUser,
    logoutUser
  }
}

export default Login