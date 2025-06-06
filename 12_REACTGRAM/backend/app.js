require("dotenv").config();

const express = require("express");
const path = require("path");
const cors = require("cors");

const port = process.env.PORT || 5000;
const app = express();

// Conectar ao banco
const conn = require("./config/db.js");
conn();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(cors({ credentials: true, origin: "http://localhost:3000" }));

app.use("/uploads", express.static(path.join(__dirname, "/uploads")));

const router = require("./routes/Router.js");
app.use(router);

app.listen(port, () => {
    console.log(`App rodando na porta ${port}`);
});
