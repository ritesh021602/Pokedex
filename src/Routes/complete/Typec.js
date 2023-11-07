import React, { useEffect, useState } from 'react'
import { SearchByType } from '../../api/Helper'
import { useParams } from 'react-router-dom';
import { Card } from '../../components/Genrations/Card';
import "./complete.css"
export const Typec = () => {
    const [data,setData]=useState([]);
    let {type}=useParams();
    type=type.split(":")
    type[1]=type[1].toLowerCase();
    console.log(type[1]);
    useEffect(()=>{
        let fetchData=async()=>{
          let response=await SearchByType(type[1]);
          setData(response);
          

        }
        fetchData()
    },[type[1].toLowerCase()])
    console.log(data);
   
  return (
   <>
   <h3 className='typename'>{type[1].toUpperCase()} TYPE POKEMON</h3>
    <div className='container'>
       
        {
       data.map((item,ind)=>{
            return <Card key={ind+1} item={item.pokemon}/>
        })
        }</div>
        </>
  )
}
