export const Genrations = [
    "Generation-I",
    "Generation-II",
    "Generation-III",
    "Generation-IV",
    "Generation-V",
    "Generation-VI",
    "Generation-VII",
    "Generation-VIII",
   
  ];
  export const Types = [
    "Normal",
    "Fire",
    "Water",
    "Electric",
    "Grass",
    "Ice",
    "Fighting",
    "Poison",
    "Ground",
    "Flying",
    "Psychic",
    "Bug",
    "Rock",
    "Ghost",
    "Steel",
    "Dragon",
    "Dark",
    "Fairy"
  ];
  
  export const Regions = [
    "Kanto",
    "Johto",
    "Hoenn",
    "Sinnoh",
    "Unova",
    "Kalos",
    "Alola",
    "Galar",
   
  ];
  const regionsMap = new Map();

Regions.forEach((region, index) => {
  regionsMap.set(region.toLocaleLowerCase(),index+1);
});

export default regionsMap;