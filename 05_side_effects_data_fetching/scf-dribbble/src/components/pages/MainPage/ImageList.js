import React from 'react'
import ImageItem from './ImageItem'

function ImageList({ images }) {
  // [{},{},{}]
  // [I, I, I]
  // Give imageItem them the username
  const Images = images.map((imgObj, index) => {
    return <ImageItem 
              key={index}  
              user={imgObj.user}
              likes={imgObj.likes}
              views={imgObj.views}
              imgUrl={imgObj.img_url}
            />
  })
  return (
    <div className="cards">
      {Images}
    </div>
  )
}

export default ImageList