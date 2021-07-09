---
slug: 02_devBlog-BE-I
title: Developer Blog - Backend Routes
description: RESTful routing
date: '2021-06-28'
---

## Intro

In my journey to put together a portfolio to show off my work I am going to start by building a simple blog site that will allow users to log in, create posts, view other authors' posts, and edit or delete their own profile and posts. User actions will be restricted to their own post and we will be using Javascript Web Tokens for authentication and authorization. We will also be using MongoDB to store our data and we will be using Node/Express to provide CRUD functionality via RESTful routing.

On the front-end we'll be using React and CSS modules to style our components. I'm also going to use conditional rendering to deal with most of the heavy lifting for reponsive design. I'm not a desginer so forgive my janky styling. I try to aim for minimalism 👨🏿‍💻.

## Project Setup

Since this will be a fullstack app using React on the frontend I'm going to begin by creating a React app using the following command

```bash
npx create-react-app devdiaries
```

After this is done installing I cd into the directory and start removing superfluous folders, files and the code in the remaining files that refer to them. In the end my folder looks like the screenshot below.

![folder-structure](/assets/images/folder.png)

After I have React installed, I'll set up the backend. To start I'll install express, create a folder called **_backend_** and create a file inside called `server.js`. I'll also be installing a program called [`nodemon`](https://www.npmjs.com/package/nodemon) so that while testing my backend I don't have to restart the server on every change.

```bash
npm install express
```

```bash
npm install nodemon --save-dev
```

When we install nodemon we save it as a **_developer dependency_**. If we check our package.json file we'll notice nodemon is listed under devDependencies. devDependecies are only needed by our application during development unlike normal dependencies which are always needed by our application. Here's my [repo](https://github.com/buddafucofibas/devdiaries_II/tree/1435bd513a8c56b0557e71dbfad3006ae88bb786) at this point.

---

## Backend Setup

I'm not sure if this is the best way to go about this but I'm going to start building my app from the backend. `express` is installed which is all we need to get started.

```js
const express = require('express')
const app = express()

const PORT = 8080

app.get('/', (req, res) => {
  res.status(200).json({ message: 'hello, world' })
})

app.listen(PORT, () => {
  console.log(`Listening @ http://localhost:${PORT}`)
})
```

First we import `express` which returns a function, we then call this function returning the `app` object which contains a variety of methods that we will be using to build our backend.

The first method we use, `app.get()`, takes as a parameter a route path and a callback function. `/` is our home route, and we respond to this with a simple JSON object that has a greeting message.

The next method sets up the server to listen for requests on port `PORT` which we set to `8080` earlier. It has an optional callback function that prints a message to the console with the address to our site so we can zip right to it.

## RESTful routing

Next we will be writing the routes using the **RESTful** routing pattern. RESTful routing refers to the matching of **CRUD** functionality (create, read, update and detroy) to corresponding **HTTP verbs** (POST, GET, PUT/PATCH, DELETE) and readable route paths (e.g. /post/new or post/id/edit).

RESTful Routes:

| **_NAME_** |     **_ROUTE_**     | **_HTTP VERB_** |              **_ACTION_**              |
| :--------- | :-----------------: | :-------------: | :------------------------------------: |
| Index      |     /resources      |       GET       |         Display all resources          |
| New        |   /resources/new    |       GET       |    Display form to add new resource    |
| Create     |     /resources      |      POST       |          Create new resource           |
| Show       |   /resources/:id    |       GET       |       Display specific resource        |
| Edit       | /resources/:id/edit |       GET       | Display form to edit specific resource |
| Update     |   /resources/:id    |    PATCH/PUT    |        Update specific resource        |
| Destroy    |   /resources/:id    |     DELETE      |        Delete specific resource        |

Below are our routes. Also note the last route which serves as a catch all. The server will try to match the url to our routes by order of placement in our server file. If it cannot match the url to any of our routes, then it will be caught by our final `app.use` method and a `404` (page not found) message will be displayed.

```js
// Home Page
app.get('/', (req, res) => {
  res.status(200).json({ message: 'Home' })
})

app.get('/posts', (req, res) => {
  res.status(200).json({ purpose: 'Display all posts' })
})

app.get('/posts/new', (req, res) => {
  res.status(200).json({ purpose: 'Display form to create new post' })
})

app.post('/posts', (req, res) => {
  res.status(200).json({ purpose: 'Create new post' })
})

app.get('/posts/:id', (req, res) => {
  res.status(200).json({ purpose: `Display post id:${req.params.id}` })
})

app.get('/posts/:id/edit', (req, res) => {
  res.status(200).json({ purpose: `Display form to edit post id:${req.params.id}` })
})

app.put('/posts/:id', (req, res) => {
  res.status(200).json({ purpose: `Update post id:${req.params.id}` })
})

app.delete('/posts/:id', (req, res) => {
  res.status(200).json({ purpose: `Destroy post id:${req.params.id}` })
})

app.use((req, res) => {
  res.status(404).json({ message: 'Page not found' })
})
```

I think traditionally, people wait until a little later to start refactoring code to clean things up, but I'm going to be proactive and start now. What I'm going to do is put as little code in my `server.js` file as possible. To this end, we'll be moving the routes elsewhere. Specifically a folder aptly name `routes`. Inside this folder we'll create a file named `postRouter.js`.

```js
// /routes/postRouter.js

const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
  res.status(200).json({ purpose: 'Display all posts' })
})

router.get('/new', (req, res) => {
  res.status(200).json({ purpose: 'Display form to create new post' })
})

router.post('/', (req, res) => {
  res.status(200).json({ purpose: 'Create new post' })
})

router.get('/:id', (req, res) => {
  res.status(200).json({ purpose: `Display post id:${req.params.id}` })
})

router.get('/:id/edit', (req, res) => {
  res.status(200).json({ purpose: `Display form to edit post id:${req.params.id}` })
})

router.put('/:id', (req, res) => {
  res.status(200).json({ purpose: `Update post id:${req.params.id}` })
})

router.delete('/:id', (req, res) => {
  res.status(200).json({ purpose: `Destroy post id:${req.params.id}` })
})

module.exports = router
```

These routes should all look familiar. That's becaue they were previously written as `app.<verb>()`. Here we have a **_router_** object provided by express that will handle our requests. Also notice that the word _posts_ is missing from the routes. We'll cover that in a bit. At the end of the file we export our router object.

Back in `server.js` we import this router and then pass it to the `app.use` function.

```js
// ...
const postsRouter = require('./routes/postsRouter')
app.use('/posts', postsRouter)
// ...
```

`app.use()` is a function that provides middleware to be used under certain conditions. Without a _path_ parameter provided, the middleware is mounted when the app starts. When we provide a path, in this instance `/posts`, the `postsRouter` middleware is called to handle requests sent to paths beginning with `/posts`. That's why in `postsRouter.js` `/posts` is missing from the route paths. When the `postsRouter` middleware gets called, the path extension will be `/posts` so repeating it in the `postsRouter` file would mean we're expecting the path `~/posts/posts`.

The other big resource our app will be working with is the author resource. So we'll create a new file in our routes folder, call it `authorsRouter.js` and recreate what we did above in this file but we'll call this router when we get a request for the path `/authors`. In the end our `authorsRouter.js` file will look like this:

```js
const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
  res.status(200).json({ purpose: 'Display all authors' })
})

router.get('/new', (req, res) => {
  res.status(200).json({ purpose: 'Display form to create new author' })
})

router.post('/', (req, res) => {
  res.status(200).json({ purpose: 'Create new author' })
})

router.get('/:id', (req, res) => {
  res.status(200).json({ purpose: `Display author id:${req.params.id}` })
})

router.get('/:id/edit', (req, res) => {
  res.status(200).json({ purpose: `Display form to edit author id:${req.params.id}` })
})

router.put('/:id', (req, res) => {
  res.status(200).json({ purpose: `Update author id:${req.params.id}` })
})

router.delete('/:id', (req, res) => {
  res.status(200).json({ purpose: `Destroy author id:${req.params.id}` })
})

module.exports = router
```

And here's what our `server.js` file looks like.

```js
const express = require('express')
const postsRouter = require('./routes/postsRouter')
const authorsRouter = require('./routes/authorsRouter')
const app = express()

const PORT = 8080

app.get('/', (req, res) => {
  res.status(200).json({ message: 'Hello, world' })
})

app.use('/posts', postsRouter)
app.use('/authors', authorsRouter)

app.use((req, res) => {
  res.status(404).json({ message: 'Page not found' })
})

app.listen(PORT, () => {
  console.log(`Listening @ http://localhost:${PORT}`)
})
```

With our basic routes set up, next we'll have to get our database setup and start actually manipulating data with these routes. But first, we're going to clean things up a bit. If you would like to see the source code for this stage of the project checkout my [repo](https://github.com/buddafucofibas/devdiaries_II/tree/ce83823cb3cfeec39e99e4d64db4d9016a3d5821).
