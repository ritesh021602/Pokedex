import React, { useEffect, useState } from 'react'
import "./card.css"
import { Search } from '../../api/Helper'
import { useNavigate } from 'react-router-dom'
export const Card = ({item}) => {
  const navigate=useNavigate()
  const [card,setCard]=useState(null);
  useEffect(()=>{
     let fetchData=async()=>{
      let temp=await Search(item.name);
      setCard(temp);
     
       
     }
     fetchData();
  },[item])
  let handle=()=>{
navigate(`/description/:${item.name}`)
  }
  if(card===null)return null;
  return (
    
    <div className='card' onClick={handle}>
     
     <img src={ card.sprites.other.home.front_default}></img>
        <h5 id='name'>{card.name.toUpperCase()}</h5>
    </div>
    
  )
}
