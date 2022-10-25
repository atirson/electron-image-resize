import { Container, Input, Image, Text, Label, NameFile } from './styles'
import Icon from '../../../assets/icons/linux/icon.png'
import { InputHTMLAttributes } from 'react'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  details?: File
}

export const InputUpload = (props: InputProps) => {
  return (
    <Container>
      <Label>
        <Input {...props} />
        <Image src={Icon} />
        <Text>Select an image to resize</Text>
        {props.details && <NameFile>{props.details.name}</NameFile>}
      </Label>
    </Container>
  )
}
