const mongoose = require("mongoose");

const conn = async () => {
    try {
        const dbConn = await mongoose.connect("mongodb://localhost:27017/ReactGram", {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });

        console.log("✅ Conectado ao MongoDB local!");
        return dbConn;
    } catch (error) {
        console.error("❌ Erro ao conectar ao MongoDB local:", error.message);
    }
};

module.exports = conn;
