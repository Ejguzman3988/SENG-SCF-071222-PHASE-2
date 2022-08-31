import React, { useEffect, useState } from "react"
import FilterBar from "./FilterBar"
import ImageList from "./ImageList"



function MainPage({ searchQuery, setSearchQuery, setTag, images, setImages }){


  const [deSearch, setDeSearch] = useState("")

  // DEBOUNCING
  useEffect(() => {
    
    const timerId = setTimeout(() => setSearchQuery(deSearch), 500)

    return () => clearInterval(timerId)

  }, [deSearch])



  const handleChange = (e) => {
    console.log(e.target.value)

    
    setDeSearch(e.target.value)
  }
  
  // const filteredImages = images.filter((img) => img.user.toLowerCase().startsWith(searchQuery.toLowerCase()))

  console.log(images)

  return(
    <div>
      <h3>MainPage</h3>
      <FilterBar setTag={setTag} searchQuery={deSearch} handleChange={handleChange} />
      <ImageList images={images} setImages={setImages} />
    </div>
  )
}

export default MainPage