import Resizer from 'react-image-file-resizer'
// import { readFileSync } from 'fs'


export interface ResizerProps {
  file: any 
  maxWidth?: number
  maxHeight?: number
  compressFormat?: string
  quality?: number
  rotation?: number
  responseUriFunc?: (
    value: string | Blob | File | ProgressEvent<FileReader>
  ) => void
  outputType?: string
  minWidth?: number
  minHeight?: number
}

export function resizer({
  file,
  minHeight = 0,
  minWidth = 0,
  compressFormat = 'JPEG',
  quality = 100,
  rotation = 0,
  outputType = 'base64'
}: ResizerProps) {
  console.log('file', file)
  const res = Resizer.imageFileResizer(
    file,
    minWidth,
    minHeight,
    compressFormat,
    quality,
    rotation,
    uri => {
      console.log('uri', uri)
    },
    outputType
  )
  console.log('res', res)
  return res
}


export function convertFileToBlob(file: string): Blob {
  const blob = new Blob([file], { type: 'image/png' })
  return blob
}
