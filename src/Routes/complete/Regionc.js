import React, { useEffect, useState } from 'react'
import { SearchByRegion } from '../../api/Helper'
import { useParams } from 'react-router-dom'
import { Card } from '../../components/Genrations/Card';
import "./complete.css"
export const Regionc = () => {
   let {region}=useParams();
    const [data,setData]=useState(null);
    region=region.split(":")[1].toLowerCase();
    useEffect(()=>{
       let fetchData=async()=>{
        let response=await SearchByRegion(region);
        setData(response);
       }
       fetchData()
    },[region])
    if(data===null)return null;
  return (
    <>
     <h3 className='typename'>{region.toUpperCase()} Region Pokemons</h3>
    <div className='container'>
        {
            data.map((item)=>{
                return <Card item={item}/>
            })
        }
    </div>
    </>
  )
}
