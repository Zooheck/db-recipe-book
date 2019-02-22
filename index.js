const express = require('express');
const helmet = require('helmet');
const knex = require('knex')

const dishesRouter = require('./routers/dishesRouter.js')

const server = express();

server.use(helmet());
server.use(express.json());

server.use('/api/dishes', dishesRouter)

server.listen(4000, () => {
    console.log('Server listening on port 4000')
})