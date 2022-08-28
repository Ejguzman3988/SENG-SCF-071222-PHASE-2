import React, {useState} from 'react'
import ImageForm from './ImageForm'
import ImagePreview from './ImagePreview'

function NewImagePage({ setImages }) {
  const [formData, setFormData] = useState({
    user: "",
    img_url: "",
    tags: [],
    views: 0,
    likes: 0
  })



  const handleChange = (e) => {
    // Whenever you modify state,
    // Make a copy of the new state,
    // Do not directly modify state
    const newObj = { 
      ...formData,
      [e.target.name]: e.target.value
    }

    setFormData(newObj)
    

  }

  return (
    <div>
      <h3>NewImagePage</h3>
      <ImageForm setImages={setImages} formData={formData} handleChange={handleChange} />
      <ImagePreview formData={formData} />
    </div>
  )
}

export default NewImagePage