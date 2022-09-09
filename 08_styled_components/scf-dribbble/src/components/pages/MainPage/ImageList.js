import React from 'react'
import ImageItem from './ImageItem'
import styled from "styled-components"

function ImageList({ handleDeleteClick, handleEditClick, setPage, images, setImages }) {
  // [{},{},{}]
  // [I, I, I]
  // Give imageItem them the username

  const Cards = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
  `

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
    <Cards>
      {Images}
    </Cards>
  )
}

export default ImageList