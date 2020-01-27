import React from 'react';
import { Route , Link } from 'react-router-dom';
import styled from 'styled-components';

import Header from "./components/Header";
import CharacterList from "./components/CharacterList";
import WelcomePage from "./components/WelcomePage";
import SearchForm from "./components/SearchForm";

const StyledDiv = styled.div 
`display: flex;
 flex-direction: column;
 align-items: center;
 background: teal;
 border: solid 10px black
 font-family: cursive;`  

const StyledHeader = styled.h1 
`font-size: 17px;
 font-family: cursive;
 text-align: center;`

const StyledButton = styled.button
  `height: fit-content;
  width: fit-content;
  padding: 6px 10px;,
  margin: 5px;,
  border: none;
  border-radius: 3px;
  color: white;
  align-content: space-between;
  font-family: cursive;
  margin: 10px;
  `

export default function App(props) {

return (
  <main>
    <StyledDiv> 
      <StyledHeader> 
        <Header />
        <SearchForm/>
      </StyledHeader>
      <StyledButton>
        <Link to="/">Welcome</Link>
      </StyledButton>
      <StyledButton>
        <Link to="/CharacterList">Characters</Link>
      </StyledButton>

        <Route path="/" render={(props) => (<WelcomePage{...props}/>)}/>
        <Route path="/CharacterList" render={(props) => (<CharacterList{...props}/>)}/>
      
    </StyledDiv>    
  </main>
  );
}
