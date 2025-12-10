const express = require("express");
const app = express();

app.get("/", (req, res) => {
    res.send("HOLA MUNDO PARCIAL FINAL VLADIMIR PEREZ SOTO 2024-0061");
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log("Servidor en puerto " + port));

module.exports = app;
