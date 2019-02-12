# CRUD NodeJS with MongoDB

## Introduction!
This is a basic CRUD design using NodeJS and MongoDB. We will use the **Express** library to manipulate MongoDB and the **EJS** engine to build the visual layer of our application.

## Preparation

You need to install [node](http://nodejs.org/), [git](https://git-scm.com/) and [MongoDB](https://www.mongodb.com/download-center/community) locally.

## Folder Structure

``` bash
├───config
│   └───bd
└───src
    ├───bin
    ├───connection
    ├───controllers
    │   └───company
    ├───public
    │   ├───images
    │   ├───javascripts
    │   └───stylesheets
    ├───repository
    │   └───company
    ├───routes
    │   └───company
    ├───schema
    │   └───company
    └───views
        ├───company
        └───partials
```

## Getting started

```bash
# clone the project
git clone https://github.com/vitorric/crud_nodejs.git

# install dependency
npm install

# install nodemon
npm install -g nodemon

# develop
nodemon
```

Open your browser and enter the URL [localhost:3000](http://localhost:3000)

## Connections

Open the **config/bd/index.js** folder, you will see the following JSON:
```js
module.exports = {
    dev: {
        'PORT': 3000,
        'MONGO_HOST': '127.0.0.1',
        'MONGO_PORT': '27017',
        'MONGO_USER': '',
        'MONGO_PWD': '',
        'MONGO_DB': 'yourDB',
        'MONGO_AUTH_SOURCE': ''
    },
    ...
};
```

You can configure multiple environments, and to connect to one, just go to the file **src/connection/index.js** and search for the line: 
```js
let dbPrincipal = 'dev';
```

Change the value **'dev'** to your new environment.

## Demonstration
