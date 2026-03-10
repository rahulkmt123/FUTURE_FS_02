// Import packages
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const db = require("./db");

// Initialize express app
const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(express.static("public"));


// API 1: Add Lead
app.post("/add-lead", (req, res) => {

  const { name, email, source, status, notes } = req.body;

  const sql = "INSERT INTO leads (name,email,source,status,notes) VALUES (?,?,?,?,?)";

  db.query(sql, [name,email,source,status,notes], (err,result)=>{

    if(err){
      console.log(err);
      res.send("Error inserting lead");
    }else{
      res.send("Lead Added Successfully");
    }

  });

});


// API 2: Get All Leads
app.get("/leads",(req,res)=>{

  const sql = "SELECT * FROM leads";

  db.query(sql,(err,result)=>{

    if(err){
      res.send(err);
    }else{
      res.json(result);
    }

  });

});


// API 3: Update Lead Status
app.put("/update-status/:id",(req,res)=>{

  const id = req.params.id;
  const {status} = req.body;

  const sql = "UPDATE leads SET status=? WHERE id=?";

  db.query(sql,[status,id],(err,result)=>{

    if(err){
      res.send(err);
    }else{
      res.send("Status Updated");
    }

  });

});


// Start Server
app.listen(5000,()=>{

  console.log("Server running on port 5000");

});