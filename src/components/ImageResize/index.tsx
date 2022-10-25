import { Dispatch, SetStateAction } from "react";

interface ImageResizeProps {
  imageToResizeUri: string | ArrayBuffer | null | undefined;
  setImageToResizeWidth: Dispatch<SetStateAction<number | undefined>>;
  setImageToResizeHeight: Dispatch<SetStateAction<number | undefined>>;
}

export const ImageResize = ({imageToResizeUri, setImageToResizeWidth, setImageToResizeHeight}: ImageResizeProps) => {
  return (
    <>
      {
        imageToResizeUri ? (
          <img
            style={{ display: 'none'}}
            src={typeof imageToResizeUri === 'string' ? imageToResizeUri : ''}
            alt="Img to Resize"
            onLoad={(e) => {
              const { width, height } = e.currentTarget;
              setImageToResizeWidth(width);
              setImageToResizeHeight(height); 
            }}
            crossOrigin="anonymous" // to avoid CORS-related problems
          />
        ) : (
          null
        )
      }
    </>
  )
}