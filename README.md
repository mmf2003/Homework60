# Express.js MVC Server — Homework60

A REST-style HTTP server built with **Node.js and Express.js**, using a modular MVC-inspired architecture.

The project demonstrates HTTP routing, controllers, dynamic route parameters, request handling, error handling, and automated API testing.

## Features

- Express.js HTTP server running on port 3000
- Modular MVC architecture
- Separate route and controller modules
- GET, POST, PUT, and DELETE request handling
- Dynamic route parameters (`userId` and `articleId`)
- Plain-text HTTP responses
- JSON request body parsing
- Custom 404 Not Found handler
- Centralized 500 Internal Server Error handler
- Automated API tests using the built-in Node.js test runner

## Technologies

- Node.js
- JavaScript (ES Modules)
- Express.js
- npm
- Node.js Test Runner (`node:test`)
- Node.js Assertions (`node:assert/strict`)

## Project Structure

```text
Homework60/
├── src/
│   ├── controllers/
│   │   ├── rootController.js
│   │   ├── usersController.js
│   │   └── articlesController.js
│   ├── routes/
│   │   ├── rootRoutes.js
│   │   ├── usersRoutes.js
│   │   └── articlesRoutes.js
│   └── app.js
├── server.js
├── test.js
├── package.json
├── package-lock.json
├── .gitignore
└── README.md
```

## Installation

### 1. Clone the repository

```bash
git clone https://github.com/mmf2003/Homework60.git
```

### 2. Navigate to the project directory

```bash
cd Homework60
```

### 3. Install dependencies

```bash
npm install
```

## Running the Server

Start the server:

```bash
npm start
```

Expected console output:

```text
Server running at http://localhost:3000
```

The server is available at:

http://localhost:3000

### Development Mode

Run the server with automatic restart when files change:

```bash
npm run dev
```

This uses the Node.js `--watch` option.

## API Endpoints

### Root Route

| Method | Endpoint | Response       |
| ------ | -------- | -------------- |
| GET    | `/`      | Get root route |

### Users Routes

| Method | Endpoint         | Response                          |
| ------ | ---------------- | --------------------------------- |
| GET    | `/users`         | Get users route                   |
| POST   | `/users`         | Post users route                  |
| GET    | `/users/:userId` | Get user by Id route: {userId}    |
| PUT    | `/users/:userId` | Put user by Id route: {userId}    |
| DELETE | `/users/:userId` | Delete user by Id route: {userId} |

### Articles Routes

| Method | Endpoint               | Response                                |
| ------ | ---------------------- | --------------------------------------- |
| GET    | `/articles`            | Get articles route                      |
| POST   | `/articles`            | Post articles route                     |
| GET    | `/articles/:articleId` | Get article by Id route: {articleId}    |
| PUT    | `/articles/:articleId` | Put article by Id route: {articleId}    |
| DELETE | `/articles/:articleId` | Delete article by Id route: {articleId} |

All successful route handlers return HTTP status `200 OK` with plain-text responses.

## API Usage Examples

The following commands can be executed in a terminal while the server is running.

### GET Root

```bash
curl http://localhost:3000/
```

Response:

```text
Get root route
```

### GET Users

```bash
curl http://localhost:3000/users
```

Response:

```text
Get users route
```

### POST User

```bash
curl -X POST http://localhost:3000/users
```

Response:

```text
Post users route
```

### GET User by ID

```bash
curl http://localhost:3000/users/123
```

Response:

```text
Get user by Id route: 123
```

### PUT User

```bash
curl -X PUT http://localhost:3000/users/123
```

Response:

```text
Put user by Id route: 123
```

### DELETE User

```bash
curl -X DELETE http://localhost:3000/users/123
```

Response:

```text
Delete user by Id route: 123
```

### GET Articles

```bash
curl http://localhost:3000/articles
```

Response:

```text
Get articles route
```

### POST Article

```bash
curl -X POST http://localhost:3000/articles
```

Response:

```text
Post articles route
```

### GET Article by ID

```bash
curl http://localhost:3000/articles/456
```

Response:

```text
Get article by Id route: 456
```

### PUT Article

```bash
curl -X PUT http://localhost:3000/articles/456
```

Response:

```text
Put article by Id route: 456
```

### DELETE Article

```bash
curl -X DELETE http://localhost:3000/articles/456
```

Response:

```text
Delete article by Id route: 456
```

### Unknown Route

```bash
curl -i http://localhost:3000/unknown
```

Response:

```text
HTTP/1.1 404 Not Found

Route not found
```

## MVC Architecture

The project uses a modular MVC-inspired architecture to separate responsibilities.

**Routes**

Define HTTP endpoints and connect them to controller functions.

**Controllers**

Handle incoming requests, access route parameters, and generate responses.

**Application**

`src/app.js` initializes Express, registers middleware, mounts routes, and configures error handling.

**Server**

`server.js` starts the HTTP server on port 3000.

**Models**

Not implemented because this assignment uses static text responses without a database or persistent data.

### Request Flow

```text
Client HTTP Request
        |
        v
   Express App
        |
        v
      Router
        |
        v
    Controller
        |
        v
   Text Response
        |
        v
      Client
```

## Error Handling

The application includes:

- `404 Not Found` for unknown routes.
- `500 Internal Server Error` for unexpected application errors.

Example 404 response:

```text
Route not found
```

Example 500 response:

```text
Internal Server Error
```

## Automated Testing

The project uses the built-in Node.js test runner to verify API endpoints.

Run:

```bash
npm test
```

The test suite checks all 11 required route handlers and the 404 response.

### Test Results

Latest local test run:

```text
tests 12
pass 12
fail 0
cancelled 0
skipped 0
duration_ms 293.4812
```

All 12 automated tests passed successfully.

## Limitations

- No database integration.
- No persistent user or article storage.
- No authentication or authorization.
- POST and PUT routes return predefined messages without saving data.
- No input validation for route parameters.
- Designed for educational purposes and future backend development.

## Available Scripts

| Command       | Description              |
| ------------- | ------------------------ |
| `npm start`   | Start the Express server |
| `npm run dev` | Start in watch mode      |
| `npm test`    | Run automated API tests  |

## Repository

https://github.com/mmf2003/Homework60.git
