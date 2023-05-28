"use client"
import { useAppSelector, useAppDispatch } from '@/redux/hooks'
import { useEffect } from 'react'
import { addUserName } from '@/redux/actions/basic'
const Profile = () => {
  const userName = useAppSelector(state => state.basic.userName)
  const dispatch = useAppDispatch()
  useEffect(() => {
    dispatch(addUserName('Paul'))
    return () => {}
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  return (
    <div className={'text-center sm:text-left'}>
      Hi,< br/>
      I’m {userName}
    </div>
  )
}

export default Profile