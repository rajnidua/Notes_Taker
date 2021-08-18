const express = require('express');

const notesRouter = require('./notes');

const app= express();

//import modular routers for /notes
app.use('/notes',notesRouter);

module.exports = app;