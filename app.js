const express = require("express");

const newProduct = (name, image, cost) => ({
    name,
    image,
    cost,
});

var app = express();

app.use(express.static("public"));

const products = [
    newProduct("Low Top Sneakers", "1.jpg", 30),
    newProduct("Chunky Sneakers Shoes", "2.jpg", 20),
    newProduct("Cool Female Sneakers", "3.jpg", 15),
];

app.get("/", (req, res) => {
    res.json(products);
});

module.exports = app;