import express from 'express';
import { ApolloServer } from 'apollo-server-express';
import mongoose from 'mongoose';
import dotEnv from 'dotenv';
import cors from 'cors';

import typeDefs from './schema/typeDefs.js';
import resolvers from './schema/resolvers.js';

dotEnv.config();

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

  const DB = process.env.DATABASE.replace(
    '<PASSWORD>',
    process.env.DATABASE_PASSWORD
  );

  //Test
  // app.use('/', (req, res, next) => {
  //   res.send({ message: 'Hello' });
  // });

  // Start server
  try {
    await mongoose.connect(DB);
    console.log('Database successfully connected!');
    app.listen(PORT, () => {
      console.log(`Server listening on PORT: ${PORT}`);
      console.log(`Graphql Endpoint: ${appoloServer.graphqlPath}`);
    });
  } catch (error) {
    console.error('MongoDB connection error:', error);
  }
};

startServer();
