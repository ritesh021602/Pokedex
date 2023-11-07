import React from 'react'
import { useNavigate } from 'react-router-dom'
import "./notfound.css"
export const NotFound = ({name}) => {
    const navigate=useNavigate();
    let handle=()=>{
        navigate("/")
    }
  return (
    <div className='not'>
        <h2>Oops! an error occurred ....</h2>
        <img src='https://wallpapers.com/images/featured/psyduck-pictures-3k6qpj8g4r8s4s5l.jpg' alt='loading'></img>
        <p className='para'>
            The Pokemon "{name}" was not found did you spell its name wrong ?
        </p>
        <button onClick={handle}>Return to home page </button>
    </div>
  )
}
