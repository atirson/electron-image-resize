import { Container } from './styles'

interface ImagePreviewProps {
  imageToResizeUri: string | undefined;
}

export const ImagePreview = ({ imageToResizeUri }: ImagePreviewProps) => {
  return (
    <>
      {imageToResizeUri ? (
        <Container>
          <h2>Resized Image</h2>
          <img alt="Resize Img" src={imageToResizeUri} />
        </Container>
      ) : (
        null
      )}
    </>
  )
}