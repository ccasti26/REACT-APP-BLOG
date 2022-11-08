# React-App-Blog
 A blog using React framework
---
## Setting up work environment

### Install React-Router-Dom
`npm install react-router-dom`

## Starting up the devlopment environment

### Start up the front end
CD into the front-end folder
`cd my-blog`

`npm start`

or 

`npm run start`

### Starting up the back end and MongoDB
CD into the back-end folder

`cd my-blog-backend`

Start the Mongo Daemon
`mongod --dbpath ./mongo-db-data`

Leave the terminal running and open another terminal to start the back end server
Go back to back-end directory with CD

`cd my-blog-backend`

`npm run dev`