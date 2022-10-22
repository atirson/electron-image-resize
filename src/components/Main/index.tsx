import Input from '../Input'
import { InputUpload } from '../InputUpload'
import { Container, Form } from './styles'

const Main = () => {
  return (
    <Container>
      <Form>
        <InputUpload />
        <Input placeholder="Width size in pixels" type='number' min={0} />
        <Input placeholder="Height size in pixels" type='number' min={0} />
      </Form>
    </Container>
  )
}

export default Main
