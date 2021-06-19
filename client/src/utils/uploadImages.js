import axios from 'axios'

//subir un array de File y retornar un array de {URL, key}
export const uploadImages = async (arrayFiles = []) => {

  if(arrayFiles.length === 0) return [] 

  const promiseImagesUploaded = arrayFiles.map(file => {
    const formData = new FormData()
    formData.append('file', file)
    return axios({
      method: 'post',
      url: '/api/files',
      data: formData,
      headers: { "Content-Type": "multipart/form-data" }
    })
  })

  const responses = await Promise.all(promiseImagesUploaded)

  return responses.map(({ data }) => data.body)
}