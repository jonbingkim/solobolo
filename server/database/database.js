const mongoose = require('mongoose');

const uri = 'mongodb+srv://bussitdown:<8uuy4lx6J80bAzzb>@cluster0.r50xqor.mongodb.net/?retryWrites=true&w=majority'

mongoose.connect(uri, {
  // options for the connect method to parse the URI
  useNewUrlParser: true,
  useUnifiedTopology: true,
  dbName: 'NBA-DB'
})
  .then(() => console.log('Connected to Mongo DB.'))
  .catch(err => console.log({err: 'Could not start the Mongo DB server'}));

const Schema = mongoose.Schema;

const teamSchema = new Schema({
  Date: String,
  homeTeam: String,
  awayTeam: String,
  Score: Number,
  Logo: String,
})
