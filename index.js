const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}))

app.use("/", require("./routes/product.route"));
app.use("/", require("./routes/user.route"));




// app.post("/post/:product_it/:product_name/:product_category", (req,res) => {
//     var obj = {
//         poduct_id: req.params.product_name,
//         product_name: "dettol",
//         product_category: "washing"
//     }
//     users.push(obj);

//     res.send(users);
// });

// app.put("/update", (req,res) => {
//     res.send("put method is called.");
// });

// app.delete("/delete", (req,res) => {
//     res.send("delete mehode called.");
// });

app.listen(4000, ()=> console.log("server is running."))