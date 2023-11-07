import React, { useEffect,useState } from 'react'
import { SearchByGenration } from '../../api/Helper'
import { Card } from '../../components/Genrations/Card'
import { useParams } from 'react-router-dom'
import "./complete.css"
function romanToNumber(roman) {
    const romanNumerals = {
        I: 1,
        II: 2,
        III: 3,
        IV: 4,
        V: 5,
        VI: 6,
        VII: 7,
        VIII: 8,
        IX: 9,
      };
    return romanNumerals[roman];
}
  
export const Genc = () => {
    const [data,setData]=useState([])
    let {gen}=useParams();
    gen=gen.split(":")[1];
    let temp=romanToNumber(gen.split("-")[1]);
useEffect(()=>{
    console.log(temp);
    let fetchData=async()=>{
     let response=await   SearchByGenration(temp);
     
     setData(response);
     console.log(data)
    }
    fetchData();
},[gen])
  return (
    <>
    <h3 className='typename'>{gen} Pokemon</h3>
    <div className='container'>{
        data.map((item)=>{
        return <Card item={item}/>
        })
        }</div>
        </>
  )
}
