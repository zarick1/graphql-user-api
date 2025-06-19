import User from '../models/User.js';

const resolvers = {
  Query: {
    users: async () => {
      try {
        return await User.find();
      } catch (error) {
        throw new Error('Error fetching users');
      }
    },
  },

  Mutation: {
    addUser: async (_, { name, email }) => {
      try {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!emailRegex.test(email)) {
          throw new Error('Invalid email format');
        }

        const user = await User.create({ name, email });
        return user;
      } catch (error) {
        throw new Error('Error adding user:' + error.message);
      }
    },

    deleteUser: async (_, { id }) => {
      try {
        const result = await User.findByIdAndDelete(id);
        return !!result;
      } catch (error) {
        throw new Error('Error deleting user: ' + error.message);
      }
    },
  },
};

export default resolvers;
