const config = {
    mongoConnectionString: process.env.MONGO_URL || 'mongodb://admin:<password>@cluster0:27017,<host>.mongodb.net:27017,<host N>.mongodb.net:27017/<database>?ssl=true&replicaSet=<replicasetName>&authSource=admin&retryWrites=true'
};
module.exports = config;


/*
const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://admin:<password>@cluster0.4w9is.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
client.connect(err => {
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  client.close();
});*/
