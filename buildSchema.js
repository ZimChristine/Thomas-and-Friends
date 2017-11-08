const { buildSchema } = require('graphql');

// Use the GraphQL Schema Lenguage (buildSchema) to construct a simple schema
let schema = buildSchema(`
  type Query {
    thomasSays: String,
    percySays: String,
  }
`);

let root = {
  thomasSays: () => {
    return 'Boil my Broilers!';
  },
  percySays: () => {
    return 'Peep peep!';
  }
};

module.exports.schema = schema;
module.exports.root = root;
