import React from 'react'
import "./downbar.css"
import { useNavigate } from 'react-router-dom'
import { Genrations, Regions, Types } from './utils/Helper'



export const Downbar = () => {
  const navigate=useNavigate();
  let handle=(e)=>{
    console.log(e.target.value)
    navigate(`/completegen/:${e.target.value}`)
  }
  const arr= Genrations.map((item, index) =>{
    return <>
    <option  key={index} value={item} className='option' >
      {item}
    </option>
    <hr></hr>
    </>
  } )
  let handlebyType=(e)=>{
    console.log(e.target.value)
    navigate(`/completetype/:${e.target.value}`)
  }
  let handlebyRegion=(e)=>{
    console.log(e.target.value)
    navigate(`/completeregion/:${e.target.value}`)
  }
  return (
    <div className='downbar'>
    <select name="genrations" id="genrations" onChange={(e)=>{handle(e)}} >
    <option style={{"display":"none"}}>Genration</option>
    {arr}
    </select>
   <select onChange={(e)=>{handlebyType(e)}}>
   <option style={{"display":"none"}}>Type</option>
    {
      Types.map((item,index)=>{
        return <option key={index} value={item}  className='option'>{item}</option>
      })
    }
   </select>
   <select onChange={(e)=>{handlebyRegion(e)}}>
   <option style={{"display":"none"}}>Regions</option>
    {
      Regions.map((item,index)=>{
        return <option key={index} value={item}  className='option'>{item}</option>
      })
    }
   </select>
  

    </div>
  )
}
