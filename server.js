const express = require('express');
const app = express();
const port = 8000;
// configure mongodb via mongoose library
const db = require("./dataBase Connector/mongoose");

// app.set changes default behaviour of express server
app.set('views','./views');
app.set('view engine','ejs');



// middlewares.....
app.use(express.static('./staticFiles'));
app.use(express.urlencoded());
app.use('/',require("./routes/root"));// handles all the routes (localhost:8000/)



app.listen(port,function(error){
    if(error) {
        console.log("Error in firing a server",error);
        return;
    }
    console.log("server is running via port",port);
});