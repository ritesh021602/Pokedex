import React, { useEffect } from 'react'
import { Search } from '../api/Helper'
import { useContext } from 'react'
import { AccountContext } from '../context/AccountContext'
import { PokemonPage } from '../components/PokemonPage/PokemonPage'
import { useParams } from 'react-router-dom'
import { NotFound } from '../components/NotFound/NotFound'



 const Description = () => {
   
  
    
    const {data,setData}=useContext(AccountContext);
    let {name}=useParams();
    const textToRead = "Hello, this is an example of text-to-speech in a React app.";

  

   name=name.split(":")
    console.log(name[1]);
    useEffect(()=>{
        const synth = window.speechSynthesis;
        let fetchData=async()=>{
            let response=await Search(name[1]);
        setData(response);
        }
        fetchData();
    },[name[1]])
  return (
    <div>
         {data ?<PokemonPage/>:<NotFound name={name[1]}></NotFound>}
    </div>
  )
}
export default Description;
