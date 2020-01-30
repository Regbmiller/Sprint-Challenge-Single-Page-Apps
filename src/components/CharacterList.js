import React, { useEffect, useState } from 'react';
import axios from "axios";
import CharacterCard from './CharacterCard';
import SearchForm from './SearchForm';

export default function CharacterList() {
    const [ filtered, setFiltered ] = useState([])
    const [searchResult, setSearchResult] = useState([])

  useEffect(() => {
    const getCharacter = () => {
    axios
    .get("https://rickandmortyapi.com/api/character/")
    .then((res) => {
      console.log(res.data.results);
      setFiltered(res.data.results);
      
    })
    .catch((err) => {
      console.error(err);
    })
  }

  getCharacter(); 

}, [searchResult]);
console.log('searchResult', searchResult)

  const results = x => {
    setSearchResult(x)
  }

  return (
    <section className="character-list">
      <div>
       <SearchForm filtered={filtered} result={results} />
      </div>
      <div>
      {searchResult.map((character) => (
        <h1> {character.name}, {character.species}</h1>       
      )
      )
    };        
      </div>
 
      <div>
       {filtered.map((character) => (
         <h1><CharacterCard character={character}/></h1> 
         )
        )
      }   
      </div>    
    </section>
  );
}
