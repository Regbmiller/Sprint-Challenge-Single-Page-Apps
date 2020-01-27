import React from "react";
import styled from 'styled-components';

const StyledDiv = styled.div 
`display: flex;
 flex-direction: column;
 align-items: center;
 background: teal;
 font-family: cursive;
 text-align:center` 

 export default function CharacterCard(props){
  return <StyledDiv><span>{props.character.name} is a(n) {props.character.species} from {props.character.origin.name}</span></StyledDiv>
  };
