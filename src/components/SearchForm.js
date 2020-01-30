import React, { useState, useEffect} from "react";
 
 
  function SearchForm( props ) {
    const [searchTerm, setSearchTerm] = React.useState("");
    
    console.log("filtered #1", props);
    
    const handleChange = event => {
    setSearchTerm(event.target.value);
  };

  
  const submitHandle = e => {
    e.preventDefault();
    let results = props.filtered.filter(character =>
      character.name.toLowerCase().includes(searchTerm)
    );
    props.result(results);
    console.log("filtered #2", results);
    };

    return (
  
        <section className="search-form">
        <form onSubmit={submitHandle}>
         <label htmlFor="search">Search Name:</label>
         <input
          id="name"
          name="search" 
          type="text" 
          placeholder="Search" 
          value={searchTerm}
          onChange={handleChange}
        />     
        <button type="submit">Search</button>
        </form> 
       </section>
     );
    }
    
  export default SearchForm


