var users = [];

let getUsers = (req,res) => {

    res.json(users.find((item) => item.id === req.params.id))
    // users.forEach((item)=>{
    //     if(item.id === req.params.id){
    //         res.json(item)
    //     }
    // })
    // res.json(users)
}
let postUser = (req,res) => {
    users.push(req.params);
    res.send("user successfully saved.")
    // res.json(users);
}



module.exports = {getUsers, postUser}