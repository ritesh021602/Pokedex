import React, { useContext, useEffect, useState } from 'react'
import { AccountContext } from '../../context/AccountContext'
import "./PokemonPage.css"
import { getDescription } from '../../api/Helper';
import { NotFound } from '../NotFound/NotFound';


export const PokemonPage = () => {
  
    
    const {data}=useContext(AccountContext);
    const [about,setAbout]=useState([]);
    
    data.name=data.name.charAt(0).toUpperCase()+data.name.slice(1);
    useEffect(()=>{
      let fetchData=async()=>{
        let response=await getDescription(data.name.toLowerCase());
        console.log(data.name);
        let temp=response.map((item)=>{
          if(item.language.name==='en')return item.flavor_text;
        })
        temp=[...new Set(temp)];
        console.log(temp);
        setAbout(temp);
      }
      fetchData();
    },[data.name])
    
    let temp=data.sprites.front_default;
  console.log(data);
  return (
    <div className='container'>
        <div className='header'>
          <h3 className='about'> #1 {data.name}</h3>
          <div className='middle'>
          <div className='banner'>
           
          <img src={data.sprites.other.home.front_shiny} alt='Pokemon' />
          <img src={data.sprites.other.home.front_default} alt='Pokemon' />

          </div>
          <div className='info'>
            <div className='sub-info'>
                <h4>Types</h4>
                <h4 id='type'>{data.types[0].type.name.toUpperCase()}</h4>
            </div>
            <hr className='hr'></hr>
            <div className='sub-info'>
            <span className='pass'> <p>Measurements</p>
           <li> Weight:{data.weight}</li>
            <li>
                Height:{data.height}
                </li></span>
            </div>
            <hr className='hr'></hr>
            <div className='sub-info'>
           <div id='last'> <p>Skills</p>
            {data.abilities.map((item)=>{
                return <li>{item.ability.name.toUpperCase()}</li>
            })}</div>
            </div>
          </div>
        </div>
        <h3 className='about'>Attributes</h3>
        <div className='sub-attributes'>
         {
            data.stats.map((item)=>{
               return <li>
               {item.stat.name.toUpperCase()}
                  <hr></hr>
                  <span className='black'>{item.base_stat}</span>
                 </li>
            })
         } 
        </div>
        <div className='about' id='about'>
      <h3 >About </h3>
      
        {
         
          about.map((item)=>{
            return item!==undefined ? <p className='about'> {item}</p>:<></>
          })
        }
     
    </div>
    </div>
    
    </div>
  )
}
