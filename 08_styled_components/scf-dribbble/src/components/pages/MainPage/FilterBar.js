import React, { useState } from 'react'
import styled from "styled-components"

function FilterBar({ setTag, searchQuery, handleChange }) {
  const allTags = [
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
  const TagsWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    width: 60%;
    flex-wrap: wrap;
    margin-right: 20px;
  `

  const Wrapper = styled.div`
    display: flex;
    justify-content: center;

    input{
      width: 66%;
      margin-bottom: 10px;
    }

  `
  const TagButton = styled.div`
    text-decoration: none;
    background: rgba(12,13,25,0.05);
    border-radius: 5px;

    :hover{
      background: rgba(12,13,25,0.25);
    }

  `

  const buttonTags = allTags.map((name,idx) => <TagButton key={idx+1} onClick={() => name === "All" ? 
                                                                    setTag("") :
                                                                    setTag(name)
                                                                  }>{name}</TagButton> )



  return (
    <Wrapper>
      <TagsWrapper>
        {buttonTags}
      </TagsWrapper>

      <input 
        placeholder="Type in search Query" 
        value={searchQuery} 
        onChange={handleChange}
        /> 
      <br/><br/>
    </Wrapper>
  )
}

export default FilterBar