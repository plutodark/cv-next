import type { Metadata } from 'next'
import Image from 'next/image'
import Profile from '@/components/Profile'

export const metadata: Metadata = {
  title: 'Paul Page',
  description: 'Welcome to Next.js',
}
export default function Home() {
  return (
    <div className={'sm:flex justify-around gap-10 items-center'}>
      <Profile />
      <div className={'relative rounded-full overflow-hidden w-64 mx-auto sm:mx-0'}>
        <Image
          src={'/avatar.png'}
          alt={'avatar'}
          height={256}
          width={256}
        />
      </div>
    </div>
  )
}
