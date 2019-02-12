
var mongoose = require('mongoose');
var config = require('../../config/bd')
mongoose.Promise = global.Promise;

let dbPrincipal = 'dev';

let mongoUrl = `mongodb://${config[dbPrincipal].MONGO_USER}:${config[dbPrincipal].MONGO_PWD}@${config[dbPrincipal].MONGO_HOST}:${config[dbPrincipal].MONGO_PORT}/${config[dbPrincipal].MONGO_DB}?authSource=${config[dbPrincipal].MONGO_DB}&authMechanism=SCRAM-SHA-1`;

let options = {
    useNewUrlParser: true
};

mongoose.connect(mongoUrl, options)
  .then(() =>  console.log('connection succesfull in BD', dbPrincipal))
  .catch((err) => console.error(err));