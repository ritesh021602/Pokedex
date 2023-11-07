import React, { useEffect, useState } from 'react'
import { SearchByGenration } from '../../api/Helper'
import { Card } from './Card';
import "./card.css"
export const Page = ({number}) => {
    const[data,setData]=useState([]);
    useEffect(()=>{
        const fetchData=async()=>{
          let temp= await SearchByGenration(number);
         setData([temp[0],temp[1],temp[2],temp[3],temp[4]]);
         console.log(data);
        }
       fetchData();
        
    },[])
    useEffect(() => {
      console.log(data);
    }, [data]);
  return (
    <div className='card-container'>
       {
        data.map((item)=>{
          return <Card item={item}/>
        })
       }
    </div>
  )
}
