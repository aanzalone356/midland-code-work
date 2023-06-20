require("dotenv").config();
const express = require('express');
const cors = require('cors');
const authRoutes = require("../server/routes/auth");
const app = express();
const port = process.env.DB_PORT;

app.use(cors());
app.use(express.json());
app.use('/auth', authRoutes);

app.listen(port, () => {
    console.log("App is Listening at: " + port);
});