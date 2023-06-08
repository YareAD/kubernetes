'use strict';
const { MongoClient } = require('mongodb');
//Atlas
const { DB_USER, DB_PASSWD, DB_HOST, DB_NAME } = process.env;
//local
//const {DB_HOST, DB_PORT, DB_NAME} = process.env
const mongoUrl = `mongodb+srv://${DB_USER}:${DB_PASSWD}@${DB_HOST}/${DB_NAME}?retryWrites=true&w=majority`;
//const mongoUrl = `mongodb://${DB_HOST}:${DB_PORT}/${DB_NAME}`
//const mongoUrl = `mongodb://localhost:27017/graphql`
const client = new MongoClient(mongoUrl);

async function connectDB() {
  try {
    await client.connect();
    console.log('MongoDB connected');
    return client.db(DB_NAME);
  } catch (error) {
    console.error("Couldn't connect to db", mongoUrl, error);
    process.exit(1);
  }
}

module.exports = { connectDB };
