# Simple Reddit

A simple Reddit-like application built with Node.js, Express, MongoDB, and React. This application allows users to create and manage subreddits, submit posts, comment on posts, and upvote/downvote posts.

## Table of Contents

- [Description](#description)
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Contributing](#contributing)
- [License](#license)

## Description

Simple Reddit is a web application that mimics the core functionalities of Reddit. Users can create accounts, subscribe to subreddits, create posts, comment, and upvote/downvote posts. The backend is built with Node.js, Express, and MongoDB, while the frontend is developed using React.

## Features

- User authentication with JWT
- Create and manage subreddits
- Submit posts to subreddits
- Comment on posts
- Upvote and downvote posts
- View user profiles with subscribed subreddits and upvoted posts

## Installation

### Prerequisites

- Node.js and npm installed
- MongoDB installed and running

### Backend Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/narucalo/simple-reddit.git
   cd simple-reddit
2. Install backed dependencies:
   npm install
3. Create a .env file in the root directory and add the following environment variables:
   JWT_SECRET=your_jwt_secret
   MONGO_URI=mongodb://localhost:27017/simple-reddit
4. mongod
5. npm start

##Frontend Setup
1. cd simple-reddit-client
2. npm install
3. npm start

Usage
Open your browser and navigate to http://localhost:3000.
Register a new user or log in with an existing account.
Create and manage subreddits, submit posts, comment, and upvote/downvote posts.
   

