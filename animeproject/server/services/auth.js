const {v4: uuidv4} = require('uuid');
const bcrypt = require('bcryptjs');
const connection = require('../config/dbEnv');
const { response } = require('express');
const saltRounds = 11;
const inputVerifier = require('../config/userInfoAuth');

// if(inputVerifier({type: "username", data: req.body.username,}) && inputVerifier({type: "password", data: req.body.password })){
//     //
// }else{
//     console.log("Error with user Verification");
// }

exports.user = (req,res) => {
    const username = req.body.username;
};

exports.login = (req,res) => {
    if(inputVerifier({type: "username", data: req.body.username,}) && inputVerifier({type: "password", data: req.body.password })){
        //
        console.log('Hit Login');
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
    }else{
        console.log("Error with user Verification");
    }
};

exports.register = (req,res) => {
    if(inputVerifier({type: "username", data: req.body.username,}) && inputVerifier({type: "password", data: req.body.password })){
        //
        console.log('Hit Register');
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
    }else{
        console.log("Error with user Verification");
    }
};

exports.googleSignOn = (req,res) => {
    if(inputVerifier({type: "username", data: req.body.username,}) && inputVerifier({type: "password", data: req.body.password })){
        //
        const username = req.body.username;
        const password = req.body.password;
        if(password){
            connection.query("SELECT * FROM users WHERE username = ?", [username], (error, results) => {
                if(error) {
                    res.status(500).send({error: error});
                    return;
                }
                if(results.length === 0){
                    res.status(400).send({error: "User could not be found"});
                    return;
                }
                if(password && results[0].length > 0){
                    res.status(200).send({success: "User logged in"})
                }
            })
        } else {
            password = uuidv4();
            const userId = uuidv4();
            connection.query("SELECT * FROM users WHERE username = ?", [username], (error, results) => {
                if(error) {
                    res.status(500).send({error: error});
                    return;
                }
                if(results.length > 0){
                    res.status(400).send({error: "User already in use"});
                    return;
                }
            });
            connection.query("INSERT INTO users SET ?", {userId: userId, username: username, password: password}, (error, results) => {
                if(error) {
                    res.status(500).send({error: error});
                    return;
                }
                res.status(200).send({success: "User logged in"});
            });
        }    
    }else{
        console.log("Error with user Verification");
    }
}

exports.animeList = (req,res) => {
    if(inputVerifier({type: "username", data: req.body.username,})){
        //
        const username = req.body.username;
        const userId = "";
        connection.query("SELECT * FROM users WHERE username = ?", [username], (error, results) => {
            if(error) {
                res.status(500).send({error: error});
                return;
            }
            if(results.length === 0){
                res.status(400).send({error: "Error retreiving userID"});
                return;
            }
            userId = results[0].userId;
        })

        connection.query("SELECT users.userId AS currentId FROM users JOIN user_lists ON user_lists.userId = users.userId JOIN animes ON animes.animeId = user_lists.animeId HAVING currentId = ?", [userId], (error, results) => {
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
    }else{
        console.log("Error with user Verification");
    }
};

exports.addAnime = (req,res) => {
    //
    if(inputVerifier({type: "username", data: req.body.username,}) && inputVerifier({type: "general", data: req.body.title})){
        //
        const username = req.body.username;
        const userId = "";
        const animeId = req.body.animeId;
        const listId = uuidv4();

        connection.query("SELECT DISTINCT user_lists.userId AS Id FROM user_lists JOIN users ON users.userId = user_lists.userId WHERE users.username = ?", [username], (error, results) => {
            if(error) {
                res.status(500).send({error: error});
                return;
            }
            if(results.length === 0){
                res.status(400).send({error: "Error retreiving userID"});
                return;
            }
            userId = results[0].Id;
            // The line below may need reworked
            const userList = results.animeId;
            if(userList.contains(animeId)){
                res.status(400).send({error: "Anime already added"});
                return;
            };
        });

        connection.query("SELECT * FROM animes WHERE animeId = ?", [animeId], (error, results) => {
            if(error){
                res.status(500).send({error: error});
                return;
            }
            if(results.length === 0){
                //This should then query the API for the animes info and enter it into the database (based on id)
                // HOWEVER
                //If this returns an error due to not finding the TITLE handle the error
                res.status(400).send({error: "Anime not found"});
                return;
            }
            res.status(200).send({success: "Anime added to database"});
        });

        connection.query("INSERT INTO user_lists SET ?", {listId: listId, userId: userId, animeId: animeId}, 
        (error, results, feilds) => {
            if(error){
                res.status(500).send({error: error});
                return;
            }
            res.status(200).send({success: "Anime added"});
        });

    }else{
        console.log("Error with user Verification");
    }
};

exports.removeAnime = (req,res) => {
    // This similar to add anime should find the user's info
    // Then go ahead and remove the anime from the personal list
    // DO NOT REMOVE FROM ANIME DB !!!!!
};

exports.getAnime = (req,res) => {
    // This should just get all info for a single anime
    // For the list functions
};

// TO COME 
//
// .changeRating
// .changeRank
// .updateAnime
// .randomAnime