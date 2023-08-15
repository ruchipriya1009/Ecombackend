const mongoose = require("mongoose");

const connect = async () => {
    try {
        // await mongoose.connect(process.env.db);
        await mongoose.connect("mongodb+srv://ruchipriya1009:EcomApp@cluster0.cnogpof.mongodb.net/")
        console.log("Connected to MongoDB");
    } catch (error) {
        console.error("Failed to connect to MongoDB", error);
    }
};

module.exports = connect;