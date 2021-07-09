---
slug: 03_devBlog-BE-I-rf
title: Developer Blog - Backend Routes Refactor
description: Cleaning up our routes
date: '2021-07-09'
---

## Intro

Right now all of the heavy lifting for the backend of our application is set to be done in our routes. We're going to instead make `controllers` that will handle the bulk of our code. We'll keep the routes files focued on just that, routing.

## MVC

This is inspired by a software design pattern called **_MVC_** or **_Model View Controller_** which seeks to separate an application into three main parts. The _model_, which is the data of our application, the _view_, which is what the user sees, and the _controller_, which is interface between the two.

In our case, our _model_ is our database models because they comprise all the data that we'll need to make our app work. Our _view_ is our frontend which we'll get to and our _controller_ will be the files that contain the functions that perform the CRUD operations on our models.

## Controller

For now our routes look like this.

```js
router.get('/', (req, res) => {
  res.status(200).json({ purpose: 'Display all authors' })
})
```

Currently our code is written in a callback function that is called when a request is sent to the specified route. Instead we're going to take this code and put it in a separate file. First we'll make a directory called `controllers`. Then we'll make a file called `authorController.js`. In this file we'll export all the functions that are currently written in the routes.

```js
// authorRouter.js

router.get('/', (req, res) => {
  res.status(200).json({ purpose: 'Display all authors' })
})

// becomes ...

// authorController.js
exports.index = (req, res) => {
  res.status(200).json({ purpose: 'Display all authors' })
}
```

In authorController, module.exports is an object that we've assigned a key, `index`, whose value is the function that will handle requests to show all authors. We import this in `authorRouter.js` and call this when we get a GET request to the `/` route.

```js
const authorController = require('../controllers/authorController')

router.get('/', authorController.index)
```

Following suit for the rest of our routes, our `authorController.js` should look like this:

```js
exports.index = (req, res) => {
  res.status(200).json({ purpose: 'Display all authors' })
}

exports.new = (req, res) => {
  res.status(200).json({ purpose: 'Display form to create new author' })
}
exports.create = (req, res) => {
  res.status(200).json({ purpose: 'Create new author' })
}
exports.read = (req, res) => {
  res.status(200).json({ purpose: `Display author id:${req.params.id}` })
}
exports.edit = (req, res) => {
  res.status(200).json({ purpose: `Display form to edit author id:${req.params.id}` })
}
exports.update = (req, res) => {
  res.status(200).json({ purpose: `Update author id:${req.params.id}` })
}
exports.destroy = (req, res) => {
  res.status(200).json({ purpose: `Destroy author id:${req.params.id}` })
}
```

And our `authorRouter.js` should look like this:

```js
const express = require('express')
const router = express.Router()
const authorController = require('../controllers/authorController')

router.get('/', authorController.index)

router.get('/new', authorController.new)

router.post('/', authorController.create)

router.get('/:id', authorController.read)

router.get('/:id/edit', authorController.edit)

router.put('/:id', authorController.update)

router.delete('/:id', authorController.destroy)

module.exports = router
```

Next we'll actually fill out the skeleton functions and breath some life into our CRUD functions. The repo at this point can be seen [here](https://github.com/buddafucofibas/devdiaries_II/tree/ce83823cb3cfeec39e99e4d64db4d9016a3d5821).
