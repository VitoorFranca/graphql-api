const startServer = require("./startServer");
require("./services/db");
const typeDefs = require("./graphql/typeDefs");
const resolvers = require("./graphql/resolvers");

startServer({ typeDefs, resolvers });
