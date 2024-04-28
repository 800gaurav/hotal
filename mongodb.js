const {MongoClient} = require('mongodb');
const url = "mongodb://localhost:27017/mydb";
const database = 'E-com';
const client = new MongoClient(url);

async function dbconnect(){
    const result = await client.connect();
     const db = result.db(database);
      return db.collection('product');
    //  const response = await collactio.find({}).toArray()
    //  console.log(response);
 };

module.exports = dbconnect;