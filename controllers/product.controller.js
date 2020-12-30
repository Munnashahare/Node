const {v4} = require('uuid');
const { getUsers } = require('./user.controller');
var product = [];

module.exports.getProducts =  (req,res) => {
    var mun = product.filter((item) => {
        return item.category ===req.params.category;
    })
    res.json(mun);
}
module.exports.postProduct =  (req,res) => {
    let {name, category} = req.body;
    //validations
    // if(!id)
    //     return res.status(400).send("Product Id is missing.");
    if(!name)
        return res.status(400).send("Product Name is missing.");
    if(!category)
        return res.status(400).send("Product Category is mising.");

    const newProduct = {
        id: v4(),
        name: req.body.name,
        category: req.body.category
    }
    product.push(newProduct);
    // res.send("product saved successfully.")
    res.json(product);
}

module.exports.putProduct = (req, res) => {
    product.forEach((item) => {
        if(item.id === req.params.id){
            item.name = req.body.name,
            item.category = req.body.category
        }
    })
    res.send("Product successfully updated.")
    // res.json(product);
}

module.exports.deleteProduct = (req, res) => {
    product.forEach((item, index) => {
        if(item.id === req.params.id){
        product.splice(index, 1);
        }
    })
    res.send("Product successfully deleted.")
}


