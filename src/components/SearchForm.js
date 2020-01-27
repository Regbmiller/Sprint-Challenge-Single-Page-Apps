import React, { useState } from "react";
// import ReactSearchBox from 'react-search-box'

export default function SearchForm() {
 
  return (
    <section className="search-form">
    <form>
     <label>Search Name:</label>
     <input type="search" placeholder="Search" vaule='find name' />     
    </form>     
   </section>
 );
}
