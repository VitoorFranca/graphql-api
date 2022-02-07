const { ApolloServer } = require("apollo-server");

module.exports = ({ resolvers, typeDefs }) => {
  const server = new ApolloServer({ resolvers, typeDefs });
  server
    .listen()
    .then(({ url }) => console.log("Servidor online na url: " + url))
    .catch((error) =>
      console.log("Não foi possivel inicializar oo servidor\nError: " + error)
    );
};
