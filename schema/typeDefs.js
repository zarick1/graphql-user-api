import { gql } from 'apollo-server-express';

const typeDefs = gql`
  type User {
    id: ID!
    name: String!
    email: String
  }

  type Query {
    users: [User!]
  }

  type Mutation {
    addUser(name: String!, email: String!): User!
    deleteUser(id: ID!): Boolean
  }
`;

export default typeDefs;
