import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    trim: true,
    unique: [true, 'Provided email is already associated with another account'],
  },
});

const User = mongoose.model('User', userSchema);
export default User;
