import React,{ useState } from 'react'
import Header from './components/pages/Header'
import MainPage from './components/pages/MainPage/MainPage'
import NewImagePage from './components/pages/NewImagePage/NewImagePage'
import ImagesArray from './data/ImagesData'

import './App.css'

function App() {
  const [page, setPage] = useState('main')
  const [images, setImages] = useState([...ImagesArray])

  return (
    <div>
      <h2>APP</h2>
      <Header setPage={setPage} />
      {page === 'main' ? <MainPage images={images} setImages={setImages} /> : <NewImagePage setImages={setImages} />}
  
    </div>
  )
}

export default App