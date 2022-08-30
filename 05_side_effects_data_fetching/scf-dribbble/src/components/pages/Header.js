
import React from 'react'

const Header = ({ setPage }) => {
  return (
    <h3>
      <a 
        href="_" 
        onClick={(e) => {
          e.preventDefault();
          setPage('main')
        }}
      >
          Main
      </a> 
      <br/>
      <a 
        href="_"
        onClick={(e) => {
          e.preventDefault();
          setPage('new')
        }}
      >
        New Image
      </a>
    </h3>
  )
}

export default Header