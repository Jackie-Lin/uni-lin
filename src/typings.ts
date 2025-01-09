type IResData<T> = {
  code: number
  msg: string
  data: T
}

type IUniUploadFileOptions = {
  file?: File
  files?: UniApp.UploadFileOptionFiles[]
  filePath?: string
  name?: string
  formData?: any
}
