const {getCatogory,postCatogory} =require("../Controller/catogoryController")

const route = require("express").Router()

route.get("/",getCatogory)

route.post("/",postCatogory)

module.exports = route

