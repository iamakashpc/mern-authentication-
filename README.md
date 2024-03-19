# MERN Authentication Project

This project is a full-stack MERN (MongoDB, Express.js, React.js, Node.js) application that provides authentication functionality.

## Features

- User registration
- User login
- Authentication using JSON Web Tokens (JWT)
- Protected routes for authenticated users
- User profile management
- Logout functionality

## Technologies Used

- MongoDB: A NoSQL database used for storing user data.
- Express.js: A Node.js web application framework used for building the backend APIs.
- React.js: A JavaScript library used for building the frontend user interface.
- Node.js: A JavaScript runtime environment used for building the server-side logic.
- JSON Web Tokens (JWT): Used for secure authentication.
- bcrypt.js: A library used for hashing passwords.
- React Router: Used for client-side routing.
- Redux (optional): Used for state management

  1. Clone the repository:
     git clone https://github.com/iamakashpc/mern-authentication-.git

  
  2. Navigate to the project directory:
     cd mern-authentication-
  
  3. Install dependencies for both server and client:
     cd client
     npm install
     cd ..
     npm install
  
  4. Set up environment variables:

   Create a `.env` file in the root directory and add the following variables:
  PORT=5000
  MONGODB_URI=your_mongodb_connection_string
  JWT_SECRET=your_jwt_secret_key
  
 Replace `your_mongodb_connection_string` and `your_jwt_secret_key` with your MongoDB connection string and a secret key for JWT.

5. Start the server:
   npm start

   
6. Navigate to `http://localhost:5000` in your browser to view the application.

## Usage

- Register a new user by providing a username and password.
- Login with the registered credentials.
- Access protected routes (e.g., user profile) after successful login.
- Update or delete the user profile as needed.
- Logout to end the session.

## Folder Structure

mern-authentication-/
│
├── client/ # Frontend React application
│ ├── public/ # Static files
│ └── src/ # React components and assets
│
├── server/ # Backend Node.js application
│ ├── config/ # Configuration files (e.g., database connection)
│ ├── controllers/ # Request handlers
│ ├── middleware/ # Middleware functions (e.g., authentication)
│ ├── models/ # Mongoose models
│ ├── routes/ # API routes
│ └── server.js # Express server setup
│
└── README.md # Project documentation


## Contributing

Contributions are welcome! Feel free to open an issue or submit a pull request for any improvements or additional features.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.











