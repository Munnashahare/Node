const {v4} = require('uuid');
var users = [];

module.exports.getUsers = (req,res) => {

    const user = users.find((item) =>{ 
        return item.id === req.params.id
    })
    res.json(user)
    
    //OR
    // let user = users.filter((item)=>{
    //     return (item.name === req.params.name);
    // })
    // res.json(user)

    //OR
    // if(users.length !== 0){
    //     users.forEach((item) =>{ 
    //         if(item.id !== req.params.id){
    //             return res.status(400).send("Id is not valid.")
                
    //          }else{
    //             res.json(item);
    //             }
    //         })
    //     }else{
    //         return res.json(users)
    //     }

}

module.exports.postUser = (req,res) => {
    let {name,email,city} = req.body;
    // validations
    if(!name)
        return res.status(400).send("Name is missing.")
    if(!email)
        return res.status(400).send("Email is missing.");
    if(!city)
        return res.status(400).send("City is missing.");
    const newUser ={
        id: v4(),
        name: req.body.name,
        email: req.body.email,
        city: req.body.city
    }
    users.push(newUser);
    // res.send(`Data saved successfully.`)
    res.json(users);
}

module.exports.putUser = (req,res) => {
    users.forEach((item, index) => {
        if(item.id === req.params.id){
            item.name = req.body.name,
            item.email = req.body.email,
            item.city = req.body.city
        }
    })
    res.json(users)
}

module.exports.deleteUser = (req, res) => {
    users.forEach((item, index) => {
        if(item.id === req.params.id){
            users.splice(index,1);
        }
    })
    res.json(users);
}


