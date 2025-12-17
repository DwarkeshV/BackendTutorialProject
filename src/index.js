// require("dotenv").config({path: "./.env"});

import dotenv from "dotenv";
import mongoos from "mongoose";
import { DB_NAME } from "./constants.js";
import express from "express";
import connectDB from "./db/index.js";

dotenv.config({ path: "./.env" });
const PORT = process.env.PORT || 8000;

connectDB()

    .then(() => {
        const server = app.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}`);
        });

        server.on("error", (error) => {
            console.error("Server error:", error.message);
            process.exit(1);
        });
    })
    .catch((error) => {
        console.error("Error connecting to the database:", error);
        process.exit(1);
    });



/*
const app = express();
(async () => {
    try {
        await mongoos.connect(`${process.env.MONGODB_URI}` / $`{ DB_NAME }`)

        app.on("error", (error) => {
            console.error("Database connection error:", error);
            throw error;
        })

        app.listen(process.env.PORT || 3000, () => {
            console.log(`Server is running on port ${process.env.PORT || 3000}`);
        });

    } catch (error) {
        console.error("Error connecting to the database:", error);
        throw error;
    }
})()
*/