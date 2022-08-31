import React, { useState } from 'react'

function ImageForm({ setImages, formData, handleChange, setLoading }) {



  const handleSubmit = (e) => {
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
      })
      
    }else{
      alert("PLEASE FILL OUT SOME INFO")
    }
  }


  
  return (
    <form onSubmit={handleSubmit} >
      <div>
        <label htmlFor="user">User: </label>
        <input 
          name="user" 
          id="user" 
          type="text" 
          value={formData.user}
          onChange={handleChange} 
        />
      </div>
      <div>
        <label htmlFor="img_url">Image Url: </label>
        <input 
          name="img_url" 
          id="img_url" 
          type="text" 
          value={formData.img_url}
          onChange={handleChange} 
        />
      </div>
      <div>
        <label htmlFor="tags">Tags: </label>
        <input 
          name="tags" 
          id="tags" 
          type="text" 
          value={formData.tags}
          onChange={handleChange} 
        />
      </div>
      <div>
        <button>Submit</button>
      </div>
    </form>
  )
}

export default ImageForm