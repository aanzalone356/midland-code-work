const cors = require('cors');
const express = require('express');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const session = require('express-session');
const app = express();
const port = 3006;
const mysql = require("mysql");
const bcrypt = require('bcryptjs');
const saltRounds = 11;

//const {serverQueryResults} = useServerQueryContext();

app.use(cors());
app.use(express.json());
//secret is the secret key (usually in the .env)
//resave saves the session to the storeeven if the session wasn't modifies
//saveUninitialized saves it
app.use(session({ secret: 'secret', resave: false, saveUninitialized: true}));
app.use(passport.initialize());
app.use(passport.session());


const connection = mysql.createConnection({
    host: "127.0.0.1",
    user: 'root',
    password: 'root',
    database: 'giphy_app',
});

connection.connect((err) => {
    if(err){
        console.error("error: " + err.stack);
    }
    console.log("Connected as: " + connection.threadId);
});

passport.use(
    new LocalStrategy(function (username, password, done) {
      connection.query(
        "SELECT * FROM users WHERE username = ?",
        [username],
        function (err, user) {
            console.log(`hit: ${user[0]}`);
            if (err) {
            return done(err);
          }
          if (!user[0]) {
            return done(null, false, { message: "Incorrect username." });
          }
          if (!bcrypt.compareSync(password, user[0].password)) {
            return done(null, false, { message: "Incorrect password." });
          }
          console.log(`hit: ${user[0]}`);
          return done(null, user[0]);
        }
      );
    })
  );

passport.serializeUser(function(user, done) {
    console.log(user);
    done(null, user.id);
});

passport.deserializeUser(function(id, done) {
    console.log(id);
    connection.query("SELECT * FROM users WHERE id = ?", [id], function (err, user) {
        done(err, user[0]);
    });
  });

app.post('/login', passport.authenticate('local'), (req,res) => {
    console.log('hit');
    res.status(200).send({success: "User logged in"});
    // const username = req.body.username;
    // connection.query("SELECT * FROM users WHERE users.username = ? ", [username],
    // (err, results, feilds) => {
    //     const match = bcrypt.compareSync(req.body.password, results[0].password);
    //     if(err) {
    //         res.status(500).send({error: err});
    //     }
    //     if(match && results.length > 0){
    //         res.status(200).send("Success");
    //     } else{
    //         res.status(400).send("Failed to Login");
    //     } 
    // })
});

app.post('/register', (req,res) => {
    const username = req.body.username;
    const password = bcrypt.hashSync(req.body.password, saltRounds);
    const userId = Math.floor(Math.random() * 1111) + 1;

    connection.query('INSERT INTO users SET ? ', {userId: userId, password: password, username: username},
    (error, results, fields) => {
        if(error) {
            res.status(500).send({error: error});
            return;
        }
        res.status(200).send({success: 'User Loggin in'});
    })
});

app.get('/FavoritesPage', (req,res) => {
    connection.query(`SELECT favorites.gif_id FROM favorites JOIN gifs ON gifs.gif_id = favorites.gif_id`,
    (err, results, feilds) => {
        if(err) {
            res.status(500).send({error: err});
            return;
        }
        res.status(200).send({gif_id: results.gif_id, title: results.title, url: results.url});
    })
});

app.get('/userDBFinder', (req,res) => {
    const username = req.body.username;
    connection.query("SELECT * FROM users WHERE users.username = ? ", [username],
    (err, results, feilds) => {
        const match = bcrypt.compareSync(req.body.password, results[0].password);
        if(err) {
            res.status(500).send({error: err});
        }
        if(match && results.length > 0){
            res.status(200).send({username: results.username, password: "Verified"});
        } else{
            res.status(400).send("Failed to find info");
        } 
    })
})

app.listen(port, () => {
    console.log(`Server is running on ${port}`)
});

//connection.end();

// export const setQuery = (database) => {
//     connection.connect((err) => {
//         if(err){
//             console.error("error: " + err.stack);
//         }
//         console.log("Connected as: " + connection.threadId);
//     });

//     app.post('/login', (req,res) => {
//         const username = req.body.username;
//         const password = bcrypt.hashSync(req.body.password, saltRounds);
//         const userId = Math.floor(Math.random() * 1111) + 1;

//         connection.query('INSERT INTO users SET ?', {userId: userId, password: password, username: username},
//         (error, results, fields) => {
//             if(error) {
//                 res.status(500).send({error: error});
//                 return;
//             }
//             res.status(200).send({success: 'User Loggin in'});
//         })
//     })

//     connection.end();
// };

