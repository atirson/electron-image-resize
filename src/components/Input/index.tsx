import { InputHTMLAttributes } from 'react'
import { Input as InputRoot, Label } from './styles'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string
}

export function Input(props: InputProps) {
  return (
    <>
      {props.label && <Label>{props.label}</Label>}
      <InputRoot aria-label={props.label} {...props} />
    </>
  )
}