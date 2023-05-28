type Props = {
  children: React.ReactNode
  onClick: () => void
}
export default function Button ({ children, onClick = () => {} }: Props) {
  return (
    <div onClick={onClick}>{children}</div>
  )
}