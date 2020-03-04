// requiring model created for database collection documents
const taskModel = require("../models/task");
// controller for showing task............
module.exports.root = function(req,res,next){
    
    taskModel.find({},function(error,result){
        if(error){
            console.log("Error in creating task",error);
            return;
        }
        console.log(result);
        res.render('home',{title:"TO-DO APP",color:{personal:"red",work:"green",learning:"yellow",physical:"pink",others:"white"},taskList: result});      
    })
    
};
// controller for adding task........
module.exports.addTask = function(req,res,next){
    if(req.body.dueDate==""){
        req.body.dueDate = "No Deadline";
    }
    taskModel.create(req.body,function(error,newTask){
        if(error){
            console.log("Error in creating task",error);
            return;
        }
    });
    res.redirect('/');
    
}
// controller for deleting task.........
module.exports.deleteTask = function(req,res,next){
    console.log(req.query);
    for(let prop in req.query){
        taskModel.findByIdAndDelete({_id:req.query[prop]},function(error,deleteTask){
            if(error){
                console.log("Error in deleting task",error);
                return;
            }
            console.log("deleteTask",deleteTask);
        });
    }

    res.redirect('/');
    
}