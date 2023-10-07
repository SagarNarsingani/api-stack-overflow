
# Stack Overflow Clone

created a basic clone of Stack overflow as a part of interview process at Shipmnts.



## 🚀 Features

The requirements of this project were as mentioned below,

- Basic login with username only
- Users can post a question
- A question should have Title, Body, Relevant tags to the question to make it more searchable
- Once the community starts answering Users can mark an answer as accepted
- Users can edit a question

- Another User can answer the question

## 📈 Optimizations

This project is created in only few hours and hence it has many scopes of improvement. 

- The UI can be more better
- There can be many more features. 
## Tech Stack

- **Framwork:** NodeJs, ExpressJs
- **Packages**: Bcrypt, Moongose



## Run Locally

Clone the project

```bash
  git clone https://github.com/SagarNarsingani/api-stack-overflow.git
```

Go to the project directory

```bash
  cd api-stack-overflow
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  node app.js
```

**Server will start and will be connected to database.**

## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

`API_KEY`

`SALT_ROUNDS` - You need to mention number of salt roundes, that needs to be performed while encrypting the password.

`MONGODB_URI` - You need to create a cluster on MongoDB Atlas (or local instance will work too), and mention the connection URI here. Don't forget to add your password in URI.

