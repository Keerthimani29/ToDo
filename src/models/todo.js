const mongoose = require('mongoose');

const todoSchema = new mongoose.Schema({
    title : String,
    description : String,
}, {
    timestamps : true //createdAt and updatedAt fields
});

const todoModel = mongoose.model('Todo', todoSchema);

async function createTodo(title, description) {  
    const todo = await todoModel.create({
        title,
        description
    });          
    return todo;

}

async function deleteTodo(_id) {
    const deleteResp = await todoModel.deleteOne({_id}); //find the todo by id and delete it
    return deleteResp;
}

async function updateTodo(_id, title, description) {
    const updated = await todoModel.updateOne({
        _id,
    }, {
        title,
        description
    });
    return updated; //return the updated todo
    
}


//pagination function
async function pageTODO(page, limit) {
    const skip =(page -1)*limit;
    const todo = await todoModel.find().skip(Number(skip)).limit(Number(limit));
    return todo;
}


module.exports = {
    createTodo,
    deleteTodo,
    updateTodo,
    pageTODO
};