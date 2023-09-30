const path = require('path')
require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const cors = require('cors');
app.use(express.json());
app.use(cors());
app.use(bodyParser.json());
const bballRouter = require('./routes/apiRouter');
const port = process.env.PORT;


app.use('/', bballRouter);
app.use('/build',express.static(path.join(__dirname, '../build')));
app.get('/',
(req, res) => {
  
  return res.status(200).sendFile(path.resolve(__dirname, '../index.html'))
}
)







app.use((err, req, res, next)  => {
  const defaultErr =   {
    log: 'Express error handler caught unknown middleware error',
    status: 500,
    message: { err: 'An error occurred' }, 
  };
  const ErrObj = Object.assign(defaultErr, err);
  console.log((ErrObj.log));
  console.error((err));
  return res.status(ErrObj.status).json(ErrObj.message)
});

app.listen(port, () => {
  console.log(port)
  console.log(`server running on port ${port}`)
});