const express = require("express");
const mysql = require("mysql2");
const app = express();
const port = 3000;

const db = mysql.createConnection({
    host: "db",
    user: "root",
    password: "password",
    database: "webapp_db"
});

db.connect(err => {
    if (err) {
        console.error("Error connecting to the database:", err);
        return;
    }
    console.log("Connected to the database!");
});

app.get("/", (req, res) => {
    db.query("SELECT * FROM posts", (err, results) => {
        if (err) {
            res.status(500).send("Database error");
        } else {
            res.json(results);
        }
    });
});

app.listen(port, () => {
    console.log(`Backend is running on http://localhost:${port}`);
});
