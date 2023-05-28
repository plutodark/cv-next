'use client'
import { useAppSelector } from '@/redux/hooks'
import useLogin from '@/hooks/login'
import { useEffect } from 'react'
const Login = () => {

  const {
    checkUser,
    loginUser,
    logoutUser
  } = useLogin()
  const isLoggedIn = useAppSelector(state => state.user.isLoggedIn)
  useEffect(() => {
    checkUser()
    return () => {}
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  const onLogin = () => {
    loginUser('plutodark@gmail.com')
  }
  const onLogout = () => {
    logoutUser()
  }
  const LoginButton = () => (<div onClick={onLogin}>Login</div>)
  const LogoutButton = () => (<div onClick={onLogout}>Logout</div>)
  return isLoggedIn ? <LogoutButton /> : <LoginButton />
}

export default Login

