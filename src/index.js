const express = require("express");
const app = express();
const porta = 3000;

app.get("/naipe", (req, res) => {
    res.send("get naipe")
})

app.listen(porta, () => {
    console.log(`Executar quando o servidor iniciar.`)
})