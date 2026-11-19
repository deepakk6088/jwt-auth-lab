# JWT Authentication System

A user authentication system built using **Node.js, Express.js, Prisma ORM, PostgreSQL, bcrypt, and JSON Web Tokens (JWT)**.

## Features

- User registration with email and password
- Password hashing using bcrypt
- User login with credential verification
- JWT generation with a unique token ID (`jti`)
- JWT expiration after 1 hour
- Authentication middleware for protected routes
- Protected user profile and dashboard endpoints
- Input validation and error handling

## Tech Stack

- **Runtime:** Node.js
- **Backend:** Express.js
- **Database:** PostgreSQL
- **ORM:** Prisma 7
- **Password Hashing:** bcrypt
- **Authentication:** JSON Web Token (JWT)

## Project Structure

```text
jwt-auth-lab/
├── prisma/
│   ├── migrations/
│   └── schema.prisma
├── src/
│   ├── config/
│   │   └── prisma.js
│   ├── middleware/
│   │   └── requireAuth.js
│   └── routes/
│       └── auth.js
├── .env.example
├── .gitignore
├── package.json
├── package-lock.json
├── prisma7.config.js
└── server.js
```

## Installation and Setup

### 1. Clone the repository

```bash
git clone https://github.com/deepakk6088/jwt-auth-lab.git
