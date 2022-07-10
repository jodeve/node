const request = require("supertest");
const app = require("./app");

test("It should response the GET method", () => {
    request(app)
        .get("/")
        .then((res) => {
            expect(JSON.stringify(res.body)).toBe(JSON.stringify([
                {
                    name: 'Low Top Sneakers',
                    image: '1.jpg',
                    cost: 30
                },
                {
                    name: 'Chunky Sneakers Shoes',
                    image: '2.jpg',
                    cost: 20
                },
                {
                    name: 'Cool Female Sneakers',
                    image: '3.jpg',
                    cost: 15
                },
            ]));
        })
});
