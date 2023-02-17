require('iconv-lite').encodingExists('foo')
const request = require("supertest");
const app = require("./app");

test("It should response the GET method", () => {
    request(app)
        .get("/")
        .then((res) => {
            console.log(res.body);
            expect(JSON.stringify(res.body)).toBe(JSON.stringify([
                {
                    name: 'Low Top Sneakers',
                    image: '1.jpg',
                    price: 30
                },
            ]));
        })
});
