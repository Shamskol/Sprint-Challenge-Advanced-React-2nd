import React from "react";
import styled from "styled-components";

const WrapperDiv = styled.div`
  width: 600px;
  margin: 0 auto;
  border: 1px solid black;
  border-radius: 15px;
  background-color: blueviolet;
  text-align: center;
  padding: 20px;
  color: white;
  margin-bottom: 5px;
`;

export default function PlayerCard(props) {
  return (
    <WrapperDiv>
      
      <h2 className="name">Name: {props.name}</h2>
      <h3 className="country">Country: {props.country}</h3>
      <h3 className="searches">Searches: {props.searches}</h3>
      <h3 className="id">id: {props.id}</h3>
    </WrapperDiv>
  );
}
