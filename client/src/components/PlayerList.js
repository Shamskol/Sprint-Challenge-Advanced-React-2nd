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
              <PlayerCard
                key={player.id}
                name= {player.name}
                country= {player.country}
                 searches= {player.searches}
                id={player.id}
              />
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
  background-color: violet;
  text-align: center;
  padding: 20px;
  color: white;
  margin-bottom: 5px h2, h1 {
    text-align: center;
    color: white;
  }
`;

export default PlayerList;
