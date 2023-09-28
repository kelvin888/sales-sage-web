import React from "react"
import { DropzoneOptions, useDropzone } from "react-dropzone"
import UploadIcon from "../../assets/icons/upload-doc.svg"

interface Props {
  acceptedFileTypes: {
    [key: string]: string[]
  }
  onDrop: (acceptedFiles: File[]) => void
}

const Dropzone: React.FC<Props> = ({ acceptedFileTypes, onDrop }) => {
  const dropzoneOptions: DropzoneOptions = {
    accept: acceptedFileTypes,
    onDrop: (acceptedFiles) => onDrop(acceptedFiles),
    multiple: false,
  }
  const { getRootProps, getInputProps } = useDropzone(dropzoneOptions)

  return (
    <div
      className="bg-gray-200 custom-border h-[7rem] cursor-pointer p-3"
      {...getRootProps()}
    >
      <input {...getInputProps()} />

      <div className="flex flex-col items-center justify-center">
        <UploadIcon />
        <p>
          <span className="font-semibold text-primary-default">
            Upload a file
          </span>{" "}
          or drag and drop
        </p>
        <p className=" text-black-default/50">PNG, JPG, PDF up to 10MB</p>
      </div>
    </div>
  )
}

export default Dropzone
