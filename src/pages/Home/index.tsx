/* eslint-disable no-new */
import { ChangeEvent, useMemo, useState } from 'react'
import { Button } from '../../components/Button'
import { Input } from '../../components/Input'
import { InputUpload } from '../../components/InputUpload'
import { Container, Form } from './styles'

import { saveAs } from 'file-saver'
import Resizer from 'react-image-file-resizer'
import { ImageResize } from '../../components/ImageResize'
import { ImagePreview } from '../../components/ImagePreview'

export function Main() {
  const [file, setFile] = useState<File>()
  const [imageToResizeUri, setImageToResizeUri] = useState<
    string | ArrayBuffer | null
  >()

  const [imageToResizeWidth, setImageToResizeWidth] = useState<number>()
  const [imageToResizeHeight, setImageToResizeHeight] = useState<number>()
  const [imageResultFinalUri, setImageResultFinalUri] = useState()

  const onUploadFile = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]

    if (file) {
      setFile(file)
    }
  }

  useMemo(() => {
    if (file) {
      const reader = new FileReader()

      reader.addEventListener('load', () => setImageToResizeUri(reader.result))

      reader.readAsDataURL(file)
    }
  }, [file])

  useMemo(() => {
    if (file && imageToResizeWidth && imageToResizeHeight) {
      Resizer.imageFileResizer(
        file,
        imageToResizeWidth,
        imageToResizeHeight,
        'JPEG',
        80,
        0,
        (uri: any) => {
          setImageResultFinalUri(uri)
        },
        'base64'
      )
    }
  }, [file, imageToResizeWidth, imageToResizeHeight])

  const handleDownload = (): void => {
    if (imageResultFinalUri) {
      saveAs(imageResultFinalUri, 'resizedImage.jpg')
    }
  }

  return (
    <Container>
      <Form>
        <InputUpload
          details={file}
          type="file"
          accept="image/*"
          onChange={e => onUploadFile(e)}
        />
        <Input
          label="Width:"
          placeholder="Width size in pixels"
          type="number"
          min={1}
          onChange={e => setImageToResizeWidth(Number(e.target.value))}
        />
        <Input
          label="Height:"
          placeholder="Height size in pixels"
          type="number"
          min={1}
          onChange={e => setImageToResizeHeight(Number(e.target.value))}
        />
        <Button
          disabled={!imageToResizeUri}
          onClick={handleDownload}
          type="button"
        >
          Resize
        </Button>
      </Form>

      <ImageResize
        imageToResizeUri={imageToResizeUri}
        setImageToResizeWidth={setImageToResizeWidth}
        setImageToResizeHeight={setImageToResizeHeight}
      />

      <ImagePreview imageToResizeUri={imageResultFinalUri} />
    </Container>
  )
}

// Add Label = OK ; Icon Clean File ; Style Preview
