# Express TypeScript Backend Template

A simple backend starter template built with **Express.js** and **TypeScript**. This project provides a clean structure for building REST APIs with request validation, environment variable support, and logging.

## Tech Stack

* Express.js
* TypeScript
* Node.js
* Zod
* Winston
* Dotenv

## Features

* Express server setup
* TypeScript configuration
* Environment variable management with Dotenv
* Request validation using Zod
* Logging with Winston
* Automatic server restart using Nodemon

## Project Structure

```text
src/
├── config/
├── controllers/
├── middlewares/
├── routes/
├── services/
├── utils/
├── server.ts
```

## Installation

Clone the repository and install dependencies:

```bash
npm install
```

## Run the Development Server

```bash
npm run dev
```

## Start the Server

```bash
npm start
```

## Environment Variables

Create a `.env` file in the project root and add your environment variables.

Example:

```env
PORT=3000
```

## Dependencies

* Express
* Dotenv
* Zod
* Winston
* Winston Daily Rotate File
* UUID

## Development Dependencies

* TypeScript
* ts-node
* Nodemon
* @types/node
* @types/express

## Author

Mrityunjay

## License

This project is licensed under the ISC License.
