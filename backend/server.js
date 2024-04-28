const express = require('express');
const cors = require('cors');
const mysql = require('mysql');
const app = express();
const port = 8081;

app.use(cors())
app.use(express.json())
const db = mysql.createConnection({
    host: process.env.DB_HOST || "localhost",
    user: process.env.DB_USER || "root",
    password: process.env.DB_PASSWORD || "",
    database: process.env.DB_NAME || "ocp"
});



app.post('/',(req,res)=>{
    console.log(req.body)
    const sql = 'INSERT INTO reclamations (nom, prenom, matricule, email, message) VALUES (?, ?, ?, ?, ?)';
    const values = [
        req.body.nom,
        req.body.prenom,
        req.body.matricule,
        req.body.email,
        req.body.message,
    ];
    
    db.query(sql, values, (err,result)=>{
        if(err) return res.json('you have an error in insert');
        return res.json(result);
    });
});

app.listen(port,()=>{
    console.log(`listinig at localhost:${port}`)
})