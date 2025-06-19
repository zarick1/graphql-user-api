import express from 'express';
import { ApolloServer, gql } from 'apollo-server-express';
import dotEnv from 'dotenv';
import cors from 'cors';

dotEnv.config();

const typeDefs = gql`
  type Query {
    greetings: String
  }
`;
const resolvers = {};

const startServer = async () => {
  const app = express();

  // Global middlewares
  app.use(cors());

  app.use(express.json());

  const appoloServer = new ApolloServer({
    typeDefs,
    resolvers,
  });

  await appoloServer.start();
  appoloServer.applyMiddleware({ app, path: '/graphql' });

  const PORT = process.env.PORT || 3000;

  //Test
  app.use('/', (req, res, next) => {
    res.send({ message: 'HEllo' });
  });

  // Start server
  app.listen(PORT, () => {
    console.log(`Server listening on PORT: ${PORT}`);
    console.log(`Graphql Endpoint: ${appoloServer.graphqlPath}`);
  });
};

startServer();
