import React from 'react'
import { Genrations } from '../utils/Helper'
import { Page } from '../components/Genrations/Page'
import { useNavigate } from 'react-router-dom'

export const EachGen = () => {
    const navigate=useNavigate();
    let convert=(val)=>{
        const romanNumerals = ["I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"];
          return romanNumerals[val-1];
    }
  return (
    <div>
        <div className='image'>
   <img src='https://e0.pxfuel.com/wallpapers/250/389/desktop-wallpaper-misty-pokemon-full-pokemon-scenery.jpg' alt='loading'></img>
   </div>
        {
   Genrations.map((item,index)=>{
    return <>
    <h3 id='gen'>Genration {index+1}</h3>
    <Page number={index+1} />
    <button onClick={()=>{
        let val=convert(index+1);
        console.log(val);
       navigate(`/completegen/:Genration-${val}`)
    }}>See More Pokemon from this genration</button>
    </>

   })
  }
 
    </div>
  )
}
