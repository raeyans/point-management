# point-management-system

> Backend code for Point Management System

## About

This project uses Node-JS and [Feathers Framework](http://feathersjs.com). An open source web framework for building modern real-time applications.

## Getting Started

Getting up and running is as easy as 1, 2, 3.

1. Make sure you have [NodeJS](https://nodejs.org/) and [npm](https://www.npmjs.com/) installed.
2. Install your dependencies

    ```
    cd path/to/point-management
    npm install
    ```

3. Start your app

    ```
    npm start
    ```

## Testing

Simply run `npm test` and all your tests in the `test/` directory will be run.

## Getting API Documentation

1. Make sure you have [Postman] (https://www.postman.com/) application installed.
2. Import this [API Collection] (https://www.getpostman.com/collections/684ba93cf74d21963ac6) with choose Link tab.
3. Press button Continue.

## API Documentation

#### API Create UserPoint
Call API `Create UserPoint` to create user and point data together.
API `Create UserPoint` need `email` and `name` to create User and Point.
Below is an example of the parameters when calling API `Create UserPoint`.

```
{
    "email": "raeyans@gmail.com",
    "name": "Raymond Sihotang"
}
```

#### API Manage Points
Call API `Manage Points` to add and reduce user points.
API `Manage Points` need `email`, `action`, and `point` to add and reduce user points.
This API only accept `shop` and `redeem` for `action` parameter.
Parameter `shop` to add user points and `redeem` to reduce user points.
Below is an example of the parameters when calling API `Manage Points`.

```
{
    "email": "raeyans@gmail.com",
    "action": "shop",
    "point": 10
}
```

OR

```
{
    "email": "raeyans@gmail.com",
    "action": "redeem",
    "point": 5
}
```

#### API Get List of Users
Call API `Get List of Users` to see all user data.

#### API Get List of Points
Call API `Get List of Points` to see all point data.

#### API Get List of Transactions
Call API `Get List of Transactions` to see all transaction data.

## Scaffolding

Feathers has a powerful command line interface. Here are a few things it can do:

```
$ npm install -g @feathersjs/cli          # Install Feathers CLI

$ feathers generate service               # Generate a new Service
$ feathers generate hook                  # Generate a new Hook
$ feathers help                           # Show all commands
```

## Help

For more information on all the things you can do with Feathers visit [docs.feathersjs.com](http://docs.feathersjs.com).
# point-management-system
