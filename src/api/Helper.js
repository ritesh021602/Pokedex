import axios from "axios"
import regionsMap from "../utils/Helper";
export const Search=async(query)=>{
 query=query.toLowerCase();
  try {
    let response=await axios.get(`https://pokeapi.co/api/v2/pokemon/${query}`);
 
    return response.data;
    
  } catch (error) {
    return null;
  }
 
}
export const SearchByGenration=async(query)=>{
    let response=await axios.get(`https://pokeapi.co/api/v2/generation/${query}`);
 
  return response.data.pokemon_species;
}
export const SearchByType = async (query) => {
  try {
    const response = await axios.get(`https://pokeapi.co/api/v2/type/${query}`);
    const data = response.data.pokemon;
    console.log(data);
    return data;
  } catch (error) {
    console.error('Error fetching data:', error);
    return [];
  }
}
 export const SearchByRegion=async(query)=>{
  let temp= regionsMap.get(query);
  let response=await axios.get(`https://pokeapi.co/api/v2/generation/${temp}`);
 
  return response.data.pokemon_species;
 }
 export const getDescription=async(query)=>{
  try {
    let response =await axios.get(`https://pokeapi.co/api/v2/pokemon-species/${query}`);
    return  response.data.flavor_text_entries;
  } catch (error) {
    return [];
  }

 }