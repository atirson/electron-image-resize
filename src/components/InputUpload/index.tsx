import { Container, Input, Image, Text, Label } from './styles'
import Icon from '../../../assets/icons/linux/icon.png'

export const InputUpload = () => {
  return (
    <Container>
      <Label>
        <Input type="file" />
        <Image src={Icon} />
        <Text>Select an image to resize</Text>
      </Label>
    </Container>
  )
}
