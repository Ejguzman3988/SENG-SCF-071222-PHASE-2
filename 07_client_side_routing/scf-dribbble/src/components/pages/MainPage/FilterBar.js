import React, { useState } from 'react'

function FilterBar({ setTag, searchQuery, handleChange }) {
  const allTags = [
    "eri",
    "All",
    'Animation',
    'Branding',
    'Illustration',
    'Mobile',
    'Print',
    'Product',
    'Typography',
    'Web Design',
  ]

  const buttonTags = allTags.map((name,idx) => <button key={idx+1} onClick={() => name === "All" ? 
                                                                    setTag("") :
                                                                    setTag(name)
                                                                  }>{name}</button> )

  return (
    <div className="filterBar">
      <div>
        {buttonTags}
      </div>

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