// Register Page
import Comp1 from "../components/comp1"
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import "./login.css"
import TextField from '@mui/material/TextField';

const Topics = (props) => {
  const navigate = useNavigate()

  const onButtonClick = () => {
    // UPDATE THIS LATER
  }

  return (
    <div className={'mainContainer'}>
      <div className={'titleContainer'}>
        <div>Topics</div>
      </div>
      <br />
      <div className={'inputContainer'}>

      </div>
      <div className={'inputContainer'}>

      </div>
      <div className={'inputContainer'}>

      </div>
      
      <br />
      <div className={'inputContainer'}>
        <input className={'inputButton'} type="button" onClick={onButtonClick} value={'Register'} />
      </div>
    </div>
  )
}

export default Topics