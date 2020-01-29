  import React, { useState } from "react";
  // npm startimport ReactDOM from "react-dom";""
  import CharacterList from "./CharacterList"
  
 
  function SearchForm({ CharacterList }) {
    const [searchTerm, setSearchTerm] = React.useState("");
    const [searchResults, setSearchResults] = React.useState([]);
    const handleChange = event => {
    setSearchTerm(event.target.value);
  };

  React.useEffect(() => {
    const results = searchResults.filter(SearchForm =>
      searchResults.toLowerCase().includes(searchTerm)
    );
    setSearchResults(results);
  }, [searchTerm]);

    return (
  
        <section className="search-form">
        <form>
         <label>Search Name:</label>
         <input 
          type="text" 
          placeholder="Search" 
          value={searchTerm}
          onChange={handleChange}
        />     
        <ul>
          {searchResults.map(item => (
            <li>{item}</li>
            ))}
        </ul>   
        </form> 
       </section>
     );
    }
    
  export default SearchForm