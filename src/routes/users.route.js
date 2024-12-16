const express = require('express');
const app = express.Router();
const users = require('../controllers/users.controller');

// define routes here
app.get("/", users.get);
app.get("/:id",users.getById);
app.post("/", users.create);
app.put("/:id", users.update);
app.delete("/:id", users.delete);

module.exports = app;
