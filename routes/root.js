const router = require("express").Router();
// acquiring controllers to control the routes
const controller = require("../controller/controller");

//router handler
router.get('/',controller.root);
// handles all the routes which have (/add-task) route
router.post('/add-task',controller.addTask);
// handles all the routes which have (/delete-task) route
router.get('/delete-task',controller.deleteTask);


module.exports = router;