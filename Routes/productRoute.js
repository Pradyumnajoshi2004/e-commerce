const {getProduct,postProduct,updateProduct, deleteProduct} = require("../Controller/productController")
const admin = require("../middleware/admin")
const auth = require("../middleware/auth")

const route = require("express").Router()

route.get("/",getProduct)

route.post("/",[auth,admin],postProduct)

route.put("/:id",[auth,admin],updateProduct)

route.delete("/:id",[auth,admin],deleteProduct)

module.exports = route