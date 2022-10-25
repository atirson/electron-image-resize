import { ButtonHTMLAttributes } from 'react'
import { Button as ButtonRoot } from './styles'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {}

export function Button(props: ButtonProps) {
  return (
    <ButtonRoot {...props}>
      {props.children}
    </ButtonRoot>
  )
}
