import React, { useState } from "react"
import FilterBar from "./FilterBar"
import ImageList from "./ImageList"



function MainPage({ images, setImages }){

  const [searchQuery, setSearchQuery] = useState("")

  const handleChange = (e) => {
    console.log(e.target.value)
    setSearchQuery(e.target.value)
  }
  
  const filteredImages = images.filter((img) => img.user.toLowerCase().startsWith(searchQuery.toLowerCase()))

  console.log(images)

  return(
    <div>
      <h3>MainPage</h3>
      <FilterBar searchQuery={searchQuery} handleChange={handleChange} />
      <ImageList images={filteredImages} setImages={setImages} />
    </div>
  )
}

export default MainPage