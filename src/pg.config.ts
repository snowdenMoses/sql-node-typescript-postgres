// import pgPromise from "pg-promise";
const pgPromise = require("pg-promise")();

const dbConfig = {
    port: 5432,
    host: "localhost",
    database:"postgres",
    username:"postgres",
    password:"1234"
}

export const dbConnect = pgPromise(dbConfig)