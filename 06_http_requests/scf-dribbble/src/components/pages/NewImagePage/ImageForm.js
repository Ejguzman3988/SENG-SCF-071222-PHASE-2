import React, { useState } from 'react'

function ImageForm({ 
  handleSubmit, 
  formData, 
  handleChange, 
}) {

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