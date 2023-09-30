import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Placeholder from 'react-bootstrap/Placeholder';
import axios from 'axios';
import '../styles/row.css'



function Rows() {

  //MAKE A FETCH REQUEST TO THE SERVER FROM THE CLIENT TO GET DATA AND TO DISPLAY COMPONENTS.



  const [nbaData, setnbaData] = useState(['hello']);

  async function getNbaData() {
    const response = await axios.get('games')
    const result = response.data;
    setnbaData(result)
  }
  // console.log(nbaData)
  useEffect(() => {
    getNbaData();
  }, [])

  console.log('this is the nba data!', nbaData)


  const mappeddata = nbaData.map((game, index) => (
/* <div className="game-row" key={game.id}>
  <div className="game-date">{game.date}</div>
  <div className="team">
    <div className="team-logo">
      <img src={game.homeTeamLogo} alt={`${game.homeTeam} Logo`} />
    </div>
    <div className="team-name">{game.homeTeam}</div>
  </div>
  <div className="team">
    <div className="team-logo">
      <img src={game.visitorTeamLogo} alt={`${game.visitorTeam} Logo`} />
    </div>
    <div className="team-name">{game.visitorTeam}</div>
  </div>
</div> */
<div className='game-row' id={index} key={game.id}>
<Card style={{ width: '18 rem', alignItems: 'center', textAlign: 'center'}}>
        <Card.Img className='team-logo' src={game.homeTeamLogo} />
        <Card.Body>
          <Card.Title>{game.homeTeam}</Card.Title>
        </Card.Body>
      </Card>
      <span>
    {game.date}
      </span>
      <Card style={{ width: '18 rem', alignItems: 'center', textAlign: 'center'}}>
        <Card.Img className='team-logo' src={game.visitorTeamLogo} />
        <Card.Body>
          <Card.Title>{game.visitorTeam}</Card.Title>
        </Card.Body>
      </Card>
      </div>
    
    

  ));



  return (
    <div >
      {mappeddata}
    </div>
  );
}


export default Rows;