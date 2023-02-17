const express = require("express");
const {Product} = require("./models");

var app = express();

app.use(express.static("public"));

app.get("/", async (req, res) => {
    const products = await Product.findAll();
    res.json(products);
});

module.exports = app;