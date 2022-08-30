import React, { useState } from 'react'

function FilterBar({ searchQuery, handleChange }) {
  

  return (
    <div className="filterBar">
      <input 
        placeholder="Type in search Query" 
        value={searchQuery} 
        onChange={handleChange}
        /> 
      <br/><br/>
    </div>
  )
}

export default FilterBar