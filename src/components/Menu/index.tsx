import Link from 'next/link'

const menu = [{
  name: 'About Me',
  href: '/'
}/*, {
  name: 'History',
  href: '/history'
}, {
  name: 'Education',
  href: '/education'
}*/]
export default function Menu ({ className  = '' }) {
  return (<div className={`flex gap-5 ${className}`}>
    {menu.map(({ name, href }, index) => (
      <Link
        className={'-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50'}
        href={href}
        key={`id-${index}`}
      >
        {name}
      </Link>
    ))}
  </div>)
}