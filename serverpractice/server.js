const express = require('express');
const app = express();
const port = 5000;

const posts = require('./posts.json');
const loggerMiddleware = require('./middleware/loggerMiddleware');

const mysql = require("mysql");

app.get("/", (req,res)=> {
    res.send("Hello World");
});

app.use(loggerMiddleware);

app.get('/users/:userId', (req,res) => {
    //We grab the Number(..) from the req
    const userId = Number(req.params.userId);

    const userPosts = posts.filter(post => post.userId === userId);

    res.json(userPosts);
});

app.get('*',(req, res) => {
    res.redirect('/');
})

app.listen(port, () => {
    console.log(`Server is running on ${port}`)
});

const connection = mysql.createConnection({
    host: "127.0.0.1",
    user: "root",
    password: "root",
    database: "practice_database",
});

connection.connect((err) => {
    if(err) {
        console.error("error :" + err.stack);
    }
    console.log("connected as:" + connection.threadId);
});

connection.query("SELECT * FROM users",
    function(err, results, fields) {
        if (err) throw err;
        console.log(results);
        console.log(fields);
    }    
);

connection.end();