const {Client} = require('pg');

const client = new Client({
    host: "localhost",
    user: "postgres",
    port: 5432,
    password: "12345",
    database: "LastTermWeb"
})

client.connect()
    .then(() => console.log("Connected to the database successfully"))
    .catch(err => console.error("Connection error", err.stack));

module.exports = client;