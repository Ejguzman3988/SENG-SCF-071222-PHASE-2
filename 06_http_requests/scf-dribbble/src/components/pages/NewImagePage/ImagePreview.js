import React from 'react'
import ImageItem from '../MainPage/ImageItem'

function ImagePreview({formData}) {
  return (
    <div>
      <ImageItem 
        preview={true}
        user={formData.user}
        likes={formData.likes}
        views={formData.views}
        imgUrl={formData.img_url}
      />
    </div>
  )
}

export default ImagePreview