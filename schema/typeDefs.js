import { gql } from 'apollo-server-express';

const typeDefs = gql`
  type User {
    id: ID!
    name: String!
    email: String
  }

  type Query {
    users(name: String, email: String): [User!]
  }

  type Mutation {
    addUser(name: String!, email: String!): User!
    deleteUser(id: ID!): Boolean
  }
`;

export default typeDefs;
