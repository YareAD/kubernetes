'use strict'

require('dotenv').config()

const{ makeExecutableSchema} = require('@graphql-tools/schema')
const express = require('express')
const cors = require('cors');

const { graphqlHTTP } = require('express-graphql')// Middleware de graphql
//require('dotenv').config();
const { readFileSync } = require('fs')
const { join } = require('path')
const resolvers = require('./lib/resolvers')
const app = express()
app.use(cors());
const port = process.env.PORT || 3000;

// definiendo el esquema
const typeDefs = readFileSync(
  join(__dirname, 'lib', 'schema.graphql'),
  'utf-8'
)
//* Nos traemos el schema desde donde se encuentra
//* Configurar los resolvers para que la query sí regrese información
const schema = makeExecutableSchema({ typeDefs, resolvers })
app.use('/api', graphqlHTTP({
  schema,
  rootValue: resolvers,
  graphiql: true
}));

app.listen(port, () => {
  console.log(`Server running on port ${port}/api`);
});