import React, {useEffect, useState} from 'react'
import ImageForm from './ImageForm'
import ImagePreview from './ImagePreview'

function NewImagePage({ setImageToEdit, page,setPage, setLoading, setImages, imageToEdit }) {
  const [formData, setFormData] = useState({
    user: "",
    img_url: "",
    tags: [],
    views: 0,
    likes: 0
  })

  useEffect(() => {
    setFormData({...imageToEdit})
  }, [imageToEdit])

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

  const handlePostSubmit = (e) => {
    // REMEMBER TO SPLIT TAGS BY COMMA WHEN WE SUBMIT!!!!
    e.preventDefault();
    if(formData.user !== "" && formData.img_url !== "" && formData.tags !== ""){
      setLoading(true)
      fetch("http://localhost:4000/images", {
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({...formData, tags: formData.tags.split(',')})
      })
      .then(r => r.json())
      .then(imageObj => { 
        setLoading(false)
        setImages((images) => [imageObj, ...images ])
        setPage('main')
      })
      
    }else{
      alert("PLEASE FILL OUT SOME INFO")
    }
  }

  const handlePatchSubmit = (e) => {
    e.preventDefault();
    if(formData.user !== "" && formData.img_url !== "" && formData.tags !== ""){
      setLoading(true)
      fetch(`http://localhost:4000/images/${imageToEdit.id}`, {
        method: "PATCH",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({...formData, tags: formData.tags.split(',')})
      })
      .then(r => r.json())
      .then(newImage => { 
        setLoading(false)
        setImages((images) => images.map((img) => {
          if(img.id === newImage.id){
            return newImage
          }
          return img
        }))
        setImageToEdit(null)
        setPage('main')
      })
      
    }else{
      alert("PLEASE FILL OUT SOME INFO")
    }
  }


  return (
    <div>
      <h3>NewImagePage</h3>
      <ImageForm 
        handleSubmit={page === "edit" ? handlePatchSubmit : handlePostSubmit} 
        setLoading={setLoading} setImages={setImages} 
        formData={formData} 
        handleChange={handleChange}
        />
      <ImagePreview formData={formData} />
    </div>
  )
}

export default NewImagePage