const mysql = require('mysql2');
const express = require('express');

const PORT = process.env.PORT || 3001;
const app = express();

//add express.js middleware

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

//connect to database

const db = mysql.createConnection(
    {
        host: 'localhost',

        //your mysql username,

        user: 'root',

        // your mysql password

        password: 'asuka',
        database: 'election'
    },
    console.log('connected to the election database.')
);


//get test route

//query database to test connection, code returns data in the candidates table
// db.query(`SELECT * FROM candidates`, (err,rows) => {
//     console.log(rows);
// })


//get single candidate

db.query(`SELECT * FROM candidates WHERE id = 1`, (err,row) => {
    if (err) {
        console.log(err);
    }
    console.log(row);
});

// Default response for any other request (Not Found)
app.use((req, res) => {
    res.status(404).end();
  });

//function that will start express.js server on port 3001

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});