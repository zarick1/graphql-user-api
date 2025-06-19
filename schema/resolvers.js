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

        const user = new User({ name, email });
        await user.save();
        return user;
      } catch (error) {
        throw new Error('Error adding user:' + error.message);
      }
    },
  },
};

export default resolvers;
