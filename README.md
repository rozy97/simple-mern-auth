# SIMPLE APP AUTHENTICATION WITH JWT & PASSPORT

![Final App](https://raw.githubusercontent.com/rozy97/pic/master/img-mern-stack/root.png)
Minimal full-stack MERN app (+ redux)with authentication using passport and JWTs.

This project uses the following technologies:

- [React](https://reactjs.org) and [React Router](https://reacttraining.com/react-router/) for frontend
- [Express](http://expressjs.com/) and [Node](https://nodejs.org/en/) for the backend
- [MongoDB](https://www.mongodb.com/) for the database
- [Redux](https://redux.js.org/basics/usagewithreact) for state management between React components

## Configuration

Make sure to add your own `MONGOURI` from your [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) database in `config/keys.js`.

```javascript
module.exports = {
  mongoURI: "YOUR_MONGO_URI_HERE",
  secretOrKey: "secret"
};
```

## Quick Start

```javascript
// Install dependencies for server & client
npm install && npm run client-install

// Run client & server with concurrently
npm run dev

// Server runs on http://localhost:6000 and client on http://localhost:3000
```

#

![Register](https://raw.githubusercontent.com/rozy97/pic/master/img-mern-stack/register.png)

#

![Login](https://raw.githubusercontent.com/rozy97/pic/master/img-mern-stack/login.png)

#

![Dashboard](https://raw.githubusercontent.com/rozy97/pic/master/img-mern-stack/dashboard.png)

#

For deploying to Heroku, please refer to [this](https://www.youtube.com/watch?v=71wSzpLyW9k) helpful video by TraversyMedia.

#
