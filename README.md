
# Contacts Manager - Node.js and Express.js API

This is a backend project built using Node.js, Express.js, and MongoDB. It allows users to register and log in. Each user can create and manage their own contacts. All routes related to contacts are protected using JWT authentication.

## Features

- User Registration and Login
- JWT-based Authentication
- Each user can manage their own contacts (Create, Read, Update, Delete)
- Secure password handling using bcrypt
- Middleware for token validation and error handling

## Technologies Used

- Node.js
- Express.js
- MongoDB with Mongoose
- bcrypt
- jsonwebtoken
- dotenv

## Project Folder Structure

```
contacts-manager-nodejs-app/
│
├── config/
│   └── dbConnection.js         # MongoDB connection
│
├── controllers/
│   ├── contactController.js    # Handles contact operations
│   └── userController.js       # Handles user registration and login
│
├── middleware/
│   ├── validateTokenHandler.js # Middleware to check JWT token
│   └── errorHandler.js         # Handles errors globally
│
├── models/
│   ├── contactModel.js         # Mongoose schema for contacts
│   └── userModel.js            # Mongoose schema for users
│
├── routes/
│   ├── contactRoutes.js        # Routes for contact operations
│   └── userRoutes.js           # Routes for user authentication
│
├── .env                        # Environment variables
├── contants.js                 # Constant values and messages
├── server.js                   # Entry point of the application
├── package.json
└── README.md
```

## Installation and Setup

1. Clone the repository

```
git clone https://github.com/sai8341/contacts-manager-app.git
cd contacts-manager-nodejs-app
```

2. Install the dependencies

```
npm install
```

3. Create a `.env` file and add the following values:

```
PORT=3000
MONGO_URI=your_mongodb_connection_string
SECRET_ACCESS_TOKEN=your_jwt_secret_key
```

4. Start the server

```
npm start
```

For development with auto-reload (nodemon):

```
npm run dev
```

## API Endpoints

### User Routes (`/api/users`)

| Method | Route        | Description                        |
|--------|--------------|------------------------------------|
| POST   | /register     | Register a new user                |
| POST   | /login        | Log in and receive a JWT token     |
| GET    | /current      | Get current logged-in user info (protected) |

### Contact Routes (`/api/contacts`)

These routes require a valid JWT token in the `Authorization` header.

| Method | Route           | Description                         |
|--------|-----------------|-------------------------------------|
| GET    | /               | Get all contacts of the logged-in user |
| GET    | /:id            | Get a single contact by ID          |
| POST   | /               | Create a new contact                |
| PUT    | /:id            | Update an existing contact          |
| DELETE | /:id            | Delete a contact                    |

## Middleware

- `validateTokenHandler.js` checks and verifies the JWT token. If valid, it adds user data to `req.user`.
- `errorHandler.js` handles errors across the application and sends a structured response.

## License

This project is open-source and free to use.
