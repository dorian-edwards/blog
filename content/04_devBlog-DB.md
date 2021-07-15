---
slug: 04_devBlog-DB
title: Developer Blog - Database Setup
description: Configuring an online database with MongoDB Atlas
date: '2021-07-14'
---

## Intro

Now that we have our routes and controllers, we have to make them work. But before we can do that, and see the fruits of our labor, we have to connect to a database. You can connect to a database [locally](https://docs.mongodb.com/guides/server/install/) but I usually use Atlas. More detailed instructions can be found [here](https://docs.atlas.mongodb.com/getting-started/).

## MongoDB Atlas

To begin, [sign up](https://www.mongodb.com/cloud/atlas/register) for an account and select the shared option (unles of course you have cash to blow, then by all means!)

![Atlas signup screen](/assets/images/01.png)

Next, select a Cloud Provider and Region. I'm not entirely certain what effect this has, but I usually select the region closest to me.

![Create cluster screen](/assets/images/02.png)

After a few minutes Atlas will create a cluster for you. From here, select the _Connect_ button to get started.

![Home screen](/assets/images/03.png)

On this screen you have the option to configure access to your database. If you whitelist your current IP address, you'll only be able to access your database from whatever computer you are working on. If you want to be able to access the database from anywhere you can select _Allow Access from Anywhere_.

You also need to create a _Database User_, the first of which will have administrative access to the project. Remember the username and password, we'll need it later. Once you're done, go on to _Choose a connection method_.

![Database access screen](/assets/images/04.png)

On the next screen select _Connect your application_. It will prompt you for your driver (Node.js) and version (3.7 or later at the time of this post). It will the give you a string that starts with like `mongodb+srv://<username>:<password>@cluster0.ajy1j...`, except you'll use the database username and password you set up earlier. This string can be accessed later by selecting _Connect_ from the _Deployment_ screen.

![Application connection string  ](/assets/images/05.png)

## Connecting to our database

We now have access to our online database, next we'll need our app to connect to it. In our project we'll install two dependencies to get things working: [dotenv](https://www.npmjs.com/package/dotenv), and [mongoose](https://www.npmjs.com/package/mongoose). **_dotenv_** loads environment variables from a `.env` file into `process.env` so we can keep potentially sensitive information out of our source code, e.g. the username and password for the database. **_mongoose_** is an object modeling tool which I think is a fancy way of saying it's a tool we'll use in express to work with our database.

```bash
npm install dotenv mongoose
```

In our **root** directory, _not_ the backend directory, create a file called `.env`. This is where we'll store the connection string from earlier, the one that we've put our database username and password into. You can give the variable a name, usually all caps, and store your connection string in it. Make sure you add `.env` to your `.gitignore` file. It contains sensitive information and as such shouldn't be pushed to a publically visible repo.

```env
ATLAS_PUBLIC_URI = mongodb+srv://<username>:<password>@cluster0.ajy1j.mongodb.net/eventManagement?retryWrites=true&w=majority
```

In our backend, create a directory called `database` and inside create a file called `dbSetup.js`. In here, we're going to write a function that connects to our database and then export this function for use in our `server.js` file.

```js
// /database/dbSetup.js

const mongoose = require('mongoose')

const uri = process.env.ATLAS_PUBLIC_URI

module.exports = () => {
  mongoose.connect(
    uri,
    {
      useUnifiedTopology: true,
      useFindAndModify: false,
      useNewUrlParser: true,
      useCreateIndex: true,
    },
    err => {
      if (err) throw err
      console.log('Connected to MongoDB via ATLAS\nhttps://www.mongodb.com/cloud/atlas')
    }
  )
}
```

First we import [mongoose](https://mongoosejs.com/docs/guide.html), then we store our connection string or `URI` (uniform resource identifier) in a variable aptly named _uri_. We then call a mongoose method called `connect` which takes as a parameter our `uri`, optional parameters, and a callback function. These optional parameters pretty much stop mongoose from [screaming](https://mongoosejs.com/docs/deprecations.html) at us when we connect to our database. I also usually log a message to the console when the database connects.

Next we're going to import this into our `server.js` file and configure our `.env` file as well.

```js
// server.js
require('dotenv').config()
const express = require('express')
const dbSetup = require('./database/dbSetup')
const postsRouter = require('./routes/postsRouter')
const authorsRouter = require('./routes/authorsRouter')
const app = express()

dbSetup()

// ...
```

The documentation for `dotenv` suggests that we call its config method as close to the top of our file as possible. I've found that if this is done after we import `dbSetup` it doesn't work, so I just put mine at the top. When we run our server we should see our connection message if everything has been done properly. See the project up to this point [here](https://github.com/buddafucofibas/devdiaries_II/tree/225446cd691286f71f1c78e3441057b7c177a9c2).

![Successful connection](/assets/images/06.png)
