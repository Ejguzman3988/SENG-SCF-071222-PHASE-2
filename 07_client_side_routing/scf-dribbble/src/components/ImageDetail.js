import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ImageItem from './pages/MainPage/ImageItem'
import { useHistory } from 'react-router-dom'


function ImageDetail() {
  const { id } = useParams()
  const [image, setImage] = useState({})
  let history = useHistory()

  useEffect(() => {
    if(Number(id) && Number(id) > 0){
      fetch(`http://localhost:4000/images/${id}`)
        .then(r => r.json())
        .then(data => setImage({...data, imgUrl: data.img_url}))
    }
  },[id])

  return (
    <>
      <button onClick={() => history.push("/")}>Go Back</button>
      <ImageItem {...image} />
    </>
  )
}

export default ImageDetail