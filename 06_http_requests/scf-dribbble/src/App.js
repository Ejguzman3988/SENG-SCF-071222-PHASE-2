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
  console.log(tag)
  const [searchQuery, setSearchQuery] = useState("")
  // Setter function:
  // Sets the value of images
  // ReRenders the page
  //  setLoading(false)

  // LifeCycle Methods (REACT USED CLASS COMPONENTS)
  // WE USE FUNCTIONAL COMPONENTS SO WE DONT GET THESE
  // SIDE EFFECTS ALLOW US SIMULATE THESE LIFE CYCLE METHODS
  // WHAT IS THE DIFFERENCE BETWEEN FUNCTION AND CLASS COMPONENTS? 
  // WE DONT GET ALL THE THINGS CLASS COMPONENTS GET

  // 1. COMPONENT DID MOUNT (componentDidMount) useEffect(()=>{}, []) - only renders one time when the component mounts
  // 2. COMPONENT DID UPDATE (componentDidUpdate) useEffect(()=>{}, [toggle]) - will do something every time toggle changes
  // 3. COMPONENT WILL UNMOUNT (componentWillUnmount) useEffect(()=>{ return () => cleanUp() }, [toggle]) - Clean up function


  /// MOST IMPORTANT =======================================
  useEffect(() => {
    fetch(`http://localhost:4000/images`)
      .then(r => r.json())
      .then(data => { 
        setImages(data)
        setLoading(false)
      })
  }, [])
  /// MOST IMPORTANT =======================================

  useEffect(()=>{
    setLoading(true)
    if(searchQuery && tag){
      fetch(`http://localhost:4000/images?tags_like=${tag}&q=${encodeURI(searchQuery)}`)
      .then(r => r.json())
      .then(data => { 
        setImages(data)
        setLoading(false)
      })
    }else if (tag){
      fetch(`http://localhost:4000/images?tags_like=${tag}`)
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
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        images={images} 
        setImages={setImages} 
        setTag={setTag}
        /> 
        : 
        <NewImagePage 
          setLoading={setLoading} 
          setImages={setImages} 
        />}
  
    </div>
  )
}

export default App