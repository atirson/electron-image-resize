import { InputHTMLAttributes } from 'react'
import { Input as InputRoot } from './styles'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {}

const Input = (props: InputProps) => {
  return (
    <InputRoot {...props} />
  )
}

export default Input
