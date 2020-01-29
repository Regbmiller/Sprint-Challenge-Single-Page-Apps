import React, { useEffect, useState } from 'react';
import axios from "axios";
import CharacterCard from './CharacterCard';
import SearchForm from './SearchForm';

export default function CharacterList() {
  const [ character, setCharacter ] = useState([])
  const [ filtered, setFiltered ] = useState([])

  useEffect(() => {
    const getCharacter = () => {
    axios
    .get("https://rickandmortyapi.com/api/character/")
    .then((res) => {
      console.log(res.data.results);
      setCharacter(res.data.results);
      setFiltered(res.data.results);
      
    })
    .catch((err) => {
      console.error(err);
    })
  }

  getCharacter(); 

}, []);

  const filter = (input) => {
    setFiltered(character.filter(char => {
      char.name.includes(input)
    }))
  }

  return (
    <section className="character-list">
      <SearchForm filtered={filtered} />
       {filtered.map((character) => (
        <h1><CharacterCard character={character}/></h1> 
         )
        )
      }       
    </section>
  );
}
