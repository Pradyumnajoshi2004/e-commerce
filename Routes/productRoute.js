const {getProduct,postProduct,updateProduct, deleteProduct} = require("../Controller/productController")
const admin = require("../middleware/admin")
const auth = require("../middleware/auth")

const route = require("express").Router()

route.get("/",getProduct)

route.post("/",postProduct)

route.put("/:id",updateProduct)

route.delete("/:id",deleteProduct)

module.exports = route
