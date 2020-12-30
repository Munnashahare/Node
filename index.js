const express = require('express');
const app = express();

app.get("/", (req,res) => {
    res.send("get method.");
});

// get method with req.params
app.get("/:name", (req,res) => {
    res.send(req.params.name);
});

// get method with req.query
app.get("/", (req,res) => {
    res.send(req.query.name+" "+req.query.email);
});

app.post("/post", (req,res) => {
    res.send("post method is called.");
});

app.put("/update", (req,res) => {
    res.send("put method is called.");
});

app.delete("/delete", (req,res) => {
    res.send("delete mehode called.");
});

app.listen(4000, ()=> console.log("server is running."))