const routes = require('./routes/index');
// const project = require('./models/Project');

const cors = require('cors');
const express = require('express');
const mongoose = require('mongoose');

const app = express();
const port = process.env.port || 2000;

app.use(express.json());
app.use(cors());
app.use(routes);


mongoose.connect("mongodb://127.0.0.1:27017/ProjectShare")
.then(() =>{
    console.log("Mongodb Connected!")
    app.listen( port  , (err) => {
        if(err) {
            console.log("Error occured ==>" ,err)
        } else{
            console.log(`Port running ${port}`);
        }
    })
})
.catch((err) => console.log("error occur" ,  err))


