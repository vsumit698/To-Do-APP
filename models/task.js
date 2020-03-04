const mongoose = require("mongoose");
// new mongoose.schema creates a design of all documents inside a collection of database
const taskSchema = new mongoose.Schema({
    task : {
        type : String,
        required : true
    },
    category: {
        type : String,
        required : true
    },
    dueDate : String
});

// mongoose.model return created model on the basis of provided schema
const taskModel = mongoose.model("taskModel",taskSchema);

module.exports = taskModel;