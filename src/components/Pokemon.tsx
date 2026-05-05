import { useState } from "react";


export default function Pokemon() {

    const [pokeId, setPokeid] = useState();
    const [pokeImage, setPokeimage] = useState();

    const handleClick = async () => {
        

    try {
        const randomInt = Math.floor(Math.random() * (1349 - 0 + 1)) + 0;
        const allPokemon = await fetch("https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0");
        
        if(!allPokemon.ok){
            throw new Error("");
        }

        const newAllPokemon = await allPokemon.json();
        const pokeId = newAllPokemon.results[randomInt].name;
        const pokeInfo = newAllPokemon.results[randomInt].url;
        const response = await fetch(`${pokeInfo}`);
        const pokeData = await response.json();
        const pokemonSprite = pokeData.sprites.front_default;

        //1342

        setPokeid(pokeId);
        

        setPokeimage(pokemonSprite);
        

    }
    catch (error) {
        console.error(error);
    }

    // console.log(pokeInfo);
    // console.log(pokeId);
    // console.log(randomInt);
    // console.log(pokeData);

}
  return (
    <>
      <h1>Pokemon Gacha</h1> 
      <button onClick={handleClick}>Roll</button>
      <br />
      {pokeId && <h1>you got: {pokeId}</h1>}
      <br />
      {pokeImage && <img src={pokeImage} alt="pokemonPic"></img>}
    </>
  );
}
