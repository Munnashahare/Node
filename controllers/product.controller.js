var product = [];

let getProducts =  (req,res) => {
    var mun = product.filter((item) => {
        return item.category ===req.params.category
    })
    res.json(mun);
}
let postProduct =  (req,res) => {
    product.push(req.query);
    res.send("product successfully saved.")
    // res.json(product);
}


module.exports = {getProducts, postProduct}