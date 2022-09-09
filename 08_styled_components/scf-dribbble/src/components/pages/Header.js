
import React from 'react'
import { Link } from 'react-router-dom'
import "../../Header.css"
import styled from 'styled-components'

const Header = ({ setPage }) => {

  const Header = styled.header`

   h3{
    display: flex;
    justify-content: space-evenly;
   }

   h3 a{
    text-decoration: none;
    font-weight: 500;
    font-size: 0.875rem;
    line-height: 1.75;
    letter-spacing: 0.02857em;
    text-transform: uppercase;
    min-width: 64px;
    padding: 6px 16px;
    border-radius: 4px;
    color: var(--primary);
    background-color: var(--secondary);
    box-shadow: 0px 2px 10px var(--fontColor);
   }
  `

  return (
    <Header>
      <h3>
        <Link to="/" >Main</Link> 
        <Link to="/images/new">New Image</Link>
        <Link to="/images/1">Go To First Image</Link> 
        <Link to="/images/2">Go To Second Image</Link>
      </h3>
      

    </Header>
  )
}

export default Header