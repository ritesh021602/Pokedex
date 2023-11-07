import React, { useContext, useState } from 'react'
import "./navbar.css"


import { useNavigate } from 'react-router-dom';
export const Navbar = () => {
  const navigate=useNavigate();
    
    const [query,setQuery]=useState("");
    let handle=async(e)=>{
      if(e.key==="Enter"){
        
        navigate(`/description/:${query}`)
    }
    }
   

  return (
    <div className='navbar'>
      <div className='logo' onClick={()=>{
        navigate('/')
      }}>  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSdRKOBteZ27eUR1APw8FistZBxTIv7xIDC8o6Iq-KaYBMif2z1ciouLd49zS3_u3A47k&usqp=CAU"></img>
        <h3 className='title'>POKEDEX</h3></div>
        <input placeholder='Search' 
        onChange={(e)=>{
            setQuery(e.target.value);
        }}
        onKeyDown={(e)=>{
            handle(e);
        }}></input>
       <div className='srcbutton'> <i className="fas fa-search" onClick={()=>{
         navigate(`/description/:${query}`)
       }}></i> </div> 
        <img src='https://pokedex-brenomorim.vercel.app/static/media/pikachu.cb81c8c0d7c92787bb35.png' id='pika'></img>
    </div>
  )
}
