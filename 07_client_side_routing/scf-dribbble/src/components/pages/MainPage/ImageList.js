import React from 'react'
import ImageItem from './ImageItem'

function ImageList({ handleDeleteClick, handleEditClick, setPage, images, setImages }) {
  // [{},{},{}]
  // [I, I, I]
  // Give imageItem them the username
  const Images = images.map((imgObj, index) => {
    return <ImageItem 
              handleDeleteClick={handleDeleteClick}
              setPage={setPage}
              key={index}  
              id={imgObj.id}
              user={imgObj.user}
              likes={imgObj.likes}
              views={imgObj.views}
              imgUrl={imgObj.img_url}
              tags={imgObj.tags}
              handleEditClick={handleEditClick}
              setImages={setImages}
            />
  })
  return (
    <div className="cards">
      {Images}
    </div>
  )
}

export default ImageList