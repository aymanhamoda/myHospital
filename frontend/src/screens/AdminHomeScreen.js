import axios from 'axios'
import React, { useState } from 'react'
import Loader from '../components/Loader'
import { Form } from 'react-bootstrap'
import UploadList from './UploadList'

const AdminHomeScreen = () => {
  const [uploading, setUploading] = useState(false)
  const [image, setImage] = useState('')
  const [submit, setSubmit] = useState(false)

  const uploadFileHandler = async (e) => {    
    const file = e.target.files[0]
    const formData = new FormData()
    formData.append('image', file)
    setUploading(true)
       const config = {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      }
      const { data } = await axios.post('/api/upload', formData, config)

      setImage(data)
      setUploading(false)
      setSubmit(true)
  }

  return (
    <> 
    <Form >
  

      <Form.Group controlId='image'>
         
              <Form.Label>Upload File</Form.Label>
              <Form.Control
                type='text'
                value={image}
                onChange={(e) => setImage(e.target.value)}
              ></Form.Control>
              <Form.File
                id='image-file'
                label='Choose File'
                custom
                onChange={uploadFileHandler}
              ></Form.File>
              {uploading && <Loader />}
            </Form.Group>
             
    </Form>
      
            <UploadList submit={submit}/>
            
    </>
  )
}

export default AdminHomeScreen
