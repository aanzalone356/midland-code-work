const {v4: uuidv4} = require('uuid');
const bcrypt = require('bcryptjs');
const connection = require('../config/dbEnv');
const saltRounds = 11;

exports.user = (req,res) => {
    const username = req.body.username;
};

exports.login = (req,res) => {
    const username = req.body.username;
    const password = bcrypt.hashSync(req.body.password, saltRounds);

    connection.query("SELECT * FROM users WHERE username = ?", [username, password], (error, results) => {
        if(error) {
            res.status(500).send({error: error});
            return;
        }

        if(results.length === 0) {
            res.status(400).send({error: "Username doesn't exist in the system"});
            return;
        }

        const hashedPassword = results[0].password;
        const match = bcrypt.compareSync(password, hashedPassword);

        if(match && results.username === username){
            res.status(200).send({success: "User loggin in"});
            return;
        } else {
            res.status(400).send({error: "Incorrect username or password"});
            return;
        }
    });
};

exports.register = (req,res) => {
    const username = req.body.username;
    const password = bcrypt.hashSync(req.body.password, saltRounds);

    const id = uuidv4();

    connection.query("SELECT * FROM users WHERE username = ?", [username], (error, results) => {
        if(error) {
            res.status(500).send({error: error});
            return;
        }

        if(results.length > 0){
            res.status(400).send({error: "Username already in use"});
            return;
        }
    });

    connection.query("INSERT INTO users SET ?", {id: id, username: username, password: password}, 
    (error, results, feilds) => {
        if(error){
            res.status(500).send({error: error});
            return;
        }
        
        res.status(200).send({success: "User Registered"});
    });
};

exports.animeList = (req,res) => {
    const username = req.body.username;
    const userId = "";

    connection.query("SELECT users.userId AS currentId FROM users JOIN user_lists ON user_lists.userId = users.userId JOIN animes ON animes.animeId = user_lists.animeId HAVING currentId = ?", [username], (error, results) => {
        if(error) {
            res.status(500).send({error: error});
            return;
        }

        if(results.length === 0){
            res.status(400).send({error: "Error retreving user list"});
            return;
        }
        res.status(200).send({success: "Anime list recieved"});
    })
};

exports.addAnime = (req,res) => {
    //
};

exports.removeAnime = (req,res) => {
    //
};

exports.getAnime = (req,res) => {
    //
};