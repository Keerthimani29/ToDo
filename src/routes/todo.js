const express = require('express');
const { createTodo,deleteTodo,updateTodo,pageTODO,signup,loginID } = require('../models/todo'); //importing createTodo function from models/todo.js
const router = express.Router();

router.post('/',async (req, res) => {
   
    const {title, description} = req.body; //destructuring the body
    const todo = await createTodo(title, description); //createTodo function is called from models/todo.js
   res.send(todo);
});         

router.delete('/:id', async (req, res) => {
    const _id = req.params.id; //destructuring the params
    const resp = await deleteTodo(_id); //deleteTodo function is called from models/todo.js
    res.send(resp); //send the response back to the client
    
});

router.put('/:id', async (req, res) => {
    const _id = req.params.id; //destructuring the params
    const {title, description} = req.body; //destructuring the body
    const resp = await updateTodo(_id, title, description); //updateTodo function is called from models/todo.js
    res.send(resp); //send the response back to the client
    
});


//pagination
router.get('/page', async (req, res) => {
    const { page, limit} = req.body;
    const todo = await pageTODO(page, limit);
    res.send(todo);
});

module.exports = router;


//user authentication 
router.post('/signup',async(req, res)=>{
    const {username,password} = req.body;
    // console.log({body: req.body});  //after JSON edit in Thunder
    const todo =await signup(username,password);
    res.send(todo);
});



router.post('/login',async(req, res)=>{
    const {username,password} = req.body;
    // console.log({body: req.body});  //after JSON edit in Thunder 
    const login =await loginID(username,password);
    if (login.length<=0){
        res.json("invalid credentials");
    }
    else{
        res.json("Good!!")
    }
});