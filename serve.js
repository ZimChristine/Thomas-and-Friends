const express = require('express');
const graphqlHTTP = require('express-graphql');
const { schema, root } = require('./buildSchema.js');

const app = express();
app.use('/', graphqlHTTP({
  schema: schema,
  rootValue: root,
  graphiql: true
}));

app.listen(4000);
console.log('Listening on 4000 ...');
