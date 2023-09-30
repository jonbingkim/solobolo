import React, {useState, useEffect} from 'react';
import axios from 'axios';

//CREATE A DROP DOWN LIST WITH KEYS OF THE TEAM AND VALUE OF THE ID
//AND FETCH DATA BASED ON THE ID

// const [teamGameData, setTeamGameData] = useState(['whats up'])



function Footer() {
  const [teamId, setTeamIdData] = useState(['this is the team id'])


async function getTeamData () {
  const response = await axios.get('FavTeamID')
  const result = response.data
  setTeamIdData(result)
}

useEffect(() => {
  getTeamData();
}, [])
console.log(teamId)

const teamIds = teamId.map((teams, index) => (
  <option key={index} value={teams.id}>{teams.name}</option>
));


  return (
    <div className="footer">
     <div>
        <label>Choose your favorite team!</label>
        <select>
          {teamIds}ß
        </select>
      </div>
    </div>
  );
}

export default Footer;