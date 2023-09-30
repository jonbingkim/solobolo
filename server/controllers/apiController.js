const axios = require('axios');
const { parse } = require('path-browserify');

function formatDate(inputDateString) {
  const date = new Date(inputDateString);
  const day = date.getDate();
  const month = date.toLocaleString('default', { month: 'long' });
  const year = date.getFullYear();
  const time = date.getHours();
  return `${month} ${day}, ${year}   ${time}`;
}

const NBAcontroller  = {
async getTeamID() {
  const options = {
    method: 'GET',
    url: 'https://api-nba-v1.p.rapidapi.com/teams',
    headers: {
      'X-RapidAPI-Key': '097316c9d1msh04ceb947e1d0e06p19ee9ajsn76120645d0d1',
      'X-RapidAPI-Host': 'api-nba-v1.p.rapidapi.com'
    }
  };
  
  try {
    const response = await axios.request(options);
    const data = response.data.response;

    return data;
    
  } catch (error) {
    console.error(error);
  }
},
async getFavTeamGames(teamId) {
  //fetch data from the end point for the team
  const options = {
    method: 'GET',
    url: 'https://api-nba-v1.p.rapidapi.com/games',
    params: {
      season: '2023',
      team: teamId
    },
    headers: {
      'X-RapidAPI-Key': '097316c9d1msh04ceb947e1d0e06p19ee9ajsn76120645d0d1',
      'X-RapidAPI-Host': 'api-nba-v1.p.rapidapi.com'
    }
  };
  
  try {
    const response = await axios.request(options);
    const data = response.data.response;
    
    console.log(data)
  
    // const start = formatDate(data.date.start);
    
    const parsedData = data.map((game, index) => {
      const {
        id : id,
        date: { start },
        teams: { home, visitors },
        scores: { home: homeScores, visitors: visitorScores },
      } = game;
  
      return {
        id: id,
        date: formatDate(start),
        homeTeam: home.name,
        homeTeamLogo: home.logo,
        visitorTeam: visitors.name,
        visitorTeamLogo: visitors.logo,
        homeScores: homeScores.points,
        visitorScores: visitorScores.points,
      };
    });
    // console.log('this is the parsed data', parsedData);
    return parsedData;
  } catch (error) {
    console.error(error);
  }
},



async getNBAGames () {
const options = {
  method: 'GET',
  url: 'https://api-nba-v1.p.rapidapi.com/games',
  params: {
    season: '2023'
  },
  headers: {
    'X-RapidAPI-Key': '097316c9d1msh04ceb947e1d0e06p19ee9ajsn76120645d0d1',
    'X-RapidAPI-Host': 'api-nba-v1.p.rapidapi.com'
  }
};
try {
	const response = await axios.request(options);
  const data = response.data.response;
  
  // console.log(data)

  // const start = formatDate(data.date.start);
  
  const parsedData = data.map((game, index) => {
    const {
      id : id,
      date: { start },
      teams: { home, visitors },
      scores: { home: homeScores, visitors: visitorScores },
    } = game;

    return {
      id: id,
      date: formatDate(start),
      homeTeam: home.name,
      homeTeamLogo: home.logo,
      visitorTeam: visitors.name,
      visitorTeamLogo: visitors.logo,
      homeScores: homeScores.points,
      visitorScores: visitorScores.points,
    };
  });
  // console.log('this is the parsed data', parsedData);
  return parsedData;
} catch (error) {
	console.error(error);
}
},



async NbaGames (req, res, next) {
  try {
    const arr = [];
  const games = await NBAcontroller.getNBAGames();
  // console.log('these are the games', games)
    for (const game of games) {
      if (arr.length <= 10) {
        arr.push(game)
      }
    }
  
  res.locals.games = arr;
  return next();
} catch(err) {
  return next(err)
}
},

async FavTeamData(req, res, next) {
  try {
    const teamId = req.id;
    const arr = [];
  const games = await NBAcontroller.getFavTeamGames(teamId);
  // console.log('these are the games', games)
    for (const game of games) {
      if (arr.length <= 10) {
        arr.push(game)
      }
    }
  
  res.locals.games = arr;
  return next();
} catch(err) {
  return next(err)
}
},
async TeamId(req, res, next) {
  try  {
    const teamArr = [];
  const teams = await NBAcontroller.getTeamID();
  // console.log(teams.nbaFranchise)
  for (const team of teams) {
    if (team.nbaFranchise === true && team.name !== "Home Team Stephen A") {
      teamArr.push(team)
    }
  }
  res.locals.data = teamArr;
  return next();
  } catch (err) {
    return next(err)
  }
} 
}
module.exports = NBAcontroller;