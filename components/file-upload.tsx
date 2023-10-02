'use client'

import { UploadDropzone } from '@/lib/uploadthing'
import '@uploadthing/react/styles.css'

interface FileUploadProps {
  endpoint: 'messageFile' | 'serverImage'
  value: string
  onChange: (url?: string) => void
}

export const FileUpload: React.FC<FileUploadProps> = ({ endpoint, value, onChange }) => {
  return (
    <UploadDropzone
      endpoint={endpoint}
      onClientUploadComplete={(res) => {
        onChange(res?.[0].url)
      }}
      onUploadError={(error: Error) => console.log(error)}
    />
  )
}
