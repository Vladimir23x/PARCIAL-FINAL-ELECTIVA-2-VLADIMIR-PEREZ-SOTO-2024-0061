const request = require("supertest");
const app = require("../app");

describe("GET /", () => {
    it("Debe responder HOLA MUNDO PARCIAL FINAL VLADIMIR PEREZ SOTO 2024-0061", async () => {
        const res = await request(app).get("/");
        expect(res.text).toBe("HOLA MUNDO PARCIAL FINAL VLADIMIR PEREZ SOTO 2024-0061");
        expect(res.statusCode).toBe(200);
    });
});
