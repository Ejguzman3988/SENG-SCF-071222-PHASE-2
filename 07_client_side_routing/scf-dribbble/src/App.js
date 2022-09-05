import React,{ useEffect, useState } from 'react'
import Header from './components/pages/Header'
import MainPage from './components/pages/MainPage/MainPage'
import NewImagePage from './components/pages/NewImagePage/NewImagePage'
import { SquareLoader } from 'react-spinners'
import ImagesArray from "./data/ImagesData"

import './App.css'

function App() {
  const [page, setPage] = useState('main')
  const [loading, setLoading] = useState(true)
  const [images, setImages] = useState()
  const [tag, setTag] = useState("")
  const [searchQuery, setSearchQuery] = useState("")
  const [imageToEdit, setImageToEdit] = useState(null)

  useEffect(()=>{
    setLoading(true)
    if(searchQuery && tag){
      fetch(`http://localhost:4000/images?tags_like=${encodeURI(tag)}&q=${encodeURI(searchQuery)}`)
      .then(r => r.json())
      .then(data => { 
        setImages(data)
        setLoading(false)
      })
    }else if (tag){
      fetch(`http://localhost:4000/images?tags_like=${encodeURI(tag)}`)
      .then(r => r.json())
      .then(data => { 
        setImages(data)
        setLoading(false)
      })
    }else if(searchQuery){
      fetch(`http://localhost:4000/images?q=${encodeURI(searchQuery)}`)
      .then(r => r.json())
      .then(data => { 
        setImages(data)
        setLoading(false)
      })
    }else{
      fetch(`http://localhost:4000/images`)
      .then(r => r.json())
      .then(data => { 
        setImages(data)
        setLoading(false)
      })
    }

   
  }, [tag, searchQuery])


  const handleEditClick = (id) => {
    const foundImage = images.find((img) => img.id === id)

    setImageToEdit({
      ...foundImage,
      tags: foundImage.tags.join(",")
    })

    setPage("edit")
  }

  const handleDeleteClick = (id) => {
    setLoading(true)
    fetch(`http://localhost:4000/images/${id}`,{
      method: "DELETE"
    })
      .then(r => {
        setLoading(false)
        return r.json()
      })
      .then((data) => {
        setLoading(false)
        setImages((images) => {
          return images.filter((imgObj) => imgObj.id !== id)
        })
      })
  }


  console.log("render")
  if(loading){
    return(
      <div className="loading">
        <SquareLoader color="red" />
      </div>
    )
  }

  
  return (
    <div>
      
      <h2>APP</h2>
      <Header setPage={setPage} />
      {page === 'main' ? 
        <MainPage 
        handleDeleteClick={handleDeleteClick}
        setImageToEdit={setImageToEdit}
        handleEditClick={handleEditClick}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        images={images} 
        setImages={setImages} 
        setTag={setTag}
        setPage={setPage}
        /> 
        : 
        <NewImagePage 
          setImageToEdit={setImageToEdit}
          imageToEdit={imageToEdit}
          setLoading={setLoading} 
          setImages={setImages} 
          page={page}
          setPage={setPage}
        />}
  
    </div>
  )
}

export default App