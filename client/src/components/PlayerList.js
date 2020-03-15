import React from "react";
import axios from "axios";
import styled from "styled-components";
import PlayerCard from "./PlayerCard";
import Navbar from "./Navbar";
class PlayerList extends React.Component {
  constructor() {
    super();
    this.state = {
      players: []
    };
  }

  componentDidMount() {
    axios
      .get("http://localhost:5000/api/players")

      .then(response => {
        this.setState({ players: response.data });
      })
      .catch(error => {
        alert(error.message);
      });
  }

  render() {
    return (
      <StyledDiv>
           <Navbar />
        <div className="player-list">
          {this.state.players.map(player => {
            return (
               <div key={player.id}>
                <h2>Name: {player.name}</h2>
                <h2>Country: {player.country}</h2>
                <h2> Searches: {player.searches}</h2>
                <h2>id: {player.id}</h2>
              </div>
            );
          })}
        </div>
      </StyledDiv>
    );
  }
}

const StyledDiv = styled.div`
  width: 800px;
  margin: 0 auto;
  border: 1px solid black;
  border-radius: 15px;
  background-color: blueviolet;
  text-align: center;
  padding: 20px;
  color: white;
  margin-bottom: 5px h2, h1 {
    text-align: center;
    color: white;
  }
`;

export default PlayerList;
