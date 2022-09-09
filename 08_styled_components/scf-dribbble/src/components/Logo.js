import React from 'react'
import styled from "styled-components"
import logo from "../Logo.png"

function Logo() {

  const Logo = styled.h2`
    text-align: center;
    color: var(--fontColor);

    div{
      margin-top: -43px;
    }
  `

  return (
    <Logo><img src={logo} alt="scf logo" /><div>Dribbble</div></Logo>
  )
}

export default Logo