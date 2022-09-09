import React, {useEffect, useState} from 'react'
import { useHistory } from "react-router-dom"
import styled from 'styled-components'

function ImageItem({ tags=[], preview, setImages, handleDeleteClick, handleEditClick, id, user, likes, views, imgUrl }) {
  const [loves, setLoves] = useState(likes)
  const [deLoves, setDeLoves] = useState(likes)
  let history = useHistory()

  const Card = styled.div`
    border: var(--secondary) double;
    width: 250px;
  `

  const Tags = styled.div`
    display: flex;
    flex-wrap: wrap;
  `
  
  useEffect(() =>{
    if(!preview && (loves !== likes)){
      fetch(`http://localhost:4000/images/${id}`,{
        method: "PATCH",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ likes: loves})
      })
        .then((r) => r.json())
        .then((newImage) => setImages((images) => images.map((img) => {
          if(img.id === newImage.id){
            return newImage
          }
          return img
        })))
    }
  }, [loves]) 

  useEffect(() => {
    const timerId = setTimeout(() => setLoves(deLoves), 500)

    return () => clearInterval(timerId)
  }, [deLoves])

  
  const handleLikeClick = (id) => {

    setDeLoves((loves) => loves + 1)
  }
  
  const tagSpans = tags.map((tag) => <span key={`${tag}-${id}`}> [ {tag} ]</span>)

  return (
    <Card>
      <figure>
        <img onClick={() => history.push(`/images/${id}`)}src={imgUrl} alt={user} width="100px" height="133px"/>
      </figure>
      <section>
        <div>
          <strong>{user}</strong>
        </div>
        <div>Likes: {deLoves}</div>
        <div>Views: {views}</div>
        <span>
          <button onClick={() => handleLikeClick(id)}>likes</button>
          <button onClick={()=>handleEditClick(id)}>edit</button>
          <button onClick={()=>handleDeleteClick(id)}>delete</button>
        </span>
      </section>
      <Tags>
        {tagSpans}
      </Tags>
    </Card>
  )
}

export default ImageItem

// {
//   "user": "Bonnie.Kerluke",
//   "img_url": "https://loremflickr.com/1234/2345/abstract?48167",
//   "tags": [
//       "Product",
//       "Mobile",
//       "Branding",
//       "Illustration",
//       "Web Design",
//       "Animation"
//   ],
//   "views": 294,
//   "likes": 88
// }