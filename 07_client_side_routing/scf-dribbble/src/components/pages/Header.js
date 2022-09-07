
import React from 'react'
import { Link } from 'react-router-dom'

const Header = ({ setPage }) => {



  return (
    <div>
      <h3>
        <Link to="/" >Main</Link>  -  -  - 
        <Link to="/images/new">New Image</Link> -  -  -
        <Link to="/images/1">Go To First Image</Link> -  -  -
        <Link to="/images/2">Go To Second Image</Link> -  -  -
      </h3>
      

    </div>
  )
}

export default Header