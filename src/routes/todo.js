const express = require('express');
const { createTodo } = require('../models/todo'); //importing createTodo function from models/todo.js
const router = express.Router();

router.post('/',async (req, res) => {
   
    const {title, description} = req.body; //destructuring the body
    const todo = await createTodo(title, description); //createTodo function is called from models/todo.js
   res.send(todo);
});
module.exports = router;