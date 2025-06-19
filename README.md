# GraphQL User Management API

A simple GraphQL API for user registration and retrieval, built with Apollo Server, Express.js, Node.js, and MongoDB.

## 🚀 Features

- Register new users
- Retrieve all users
- Filter users by name or email
- Validate email format before saving
- Delete users by ID

## 🛠 Technologies Used

- Node.js
- Express.js
- Apollo Server
- GraphQL
- MongoDB & Mongoose

## 📦 Installation

1. **Clone the repository:**

```bash
git clone https://github.com/zarick1/graphql-user-api.git
```

2. **Install dependencies:**

```bash
npm install
```

3. **Set up environment variables:**
   Create a `.env` file in the root with:

```env
PORT=3001
DATABASE=mongodb+srv://<USERNAME>:<PASSWORD>@<CLUSTER>/<DB_NAME>?retryWrites=true&w=majority
DATABASE_PASSWORD=your_database_password
```

In server code, final connection string is built like this:

```js
const DB = process.env.DATABASE.replace(
  '<PASSWORD>',
  process.env.DATABASE_PASSWORD
);
```

4. **Run the server:**

```bash
npm start
```

5. **Visit GraphQL Playground:**

```
http://localhost:3001/graphql
```

## 🧪 Example Queries

### Add a new user

```graphql
mutation {
  addUser(name: "Krsto Zarić", email: "krstozaric01@gmail.com") {
    id
    name
    email
  }
}
```

### Get all users

```graphql
query {
  users {
    id
    name
    email
  }
}
```

### Filter users by name or email

```graphql
query {
  users(name: "Krsto") {
    id
    name
    email
  }
}
```

### Delete user

```graphql
mutation {
  deleteUser(id: "mongo_object_id")
}
```

## 📹 Video Demonstration

[Link to video here]()
