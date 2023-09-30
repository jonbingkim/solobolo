const express = require('express');
const router = express.Router();
const NBAcontroller = require('../controllers/apiController');

router.get('/games',
NBAcontroller.NbaGames,
(req, res) => {
  console.log(res.locals.games)
  console.log('hi')
  
  res.status(200).json(res.locals.games)
}

)

router.get('/FavTeamID',
  NBAcontroller.TeamId,
  (req, res) => {
    // console.log('hi')
   
    return res.status(200).json(res.locals.data);
  });

module.exports = router;