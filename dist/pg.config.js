"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dbConnect = void 0;
// import pgPromise from "pg-promise";
const pgPromise = require("pg-promise")();
const dbConfig = {
    port: 5432,
    host: "localhost",
    database: "postgres",
    username: "postgres",
    password: "1234"
};
exports.dbConnect = pgPromise(dbConfig);
