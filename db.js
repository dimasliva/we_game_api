const mysql = require('mysql')
const conn = mysql.createConnection({
    host: "sql11.freesqldatabase.com",
    user: "sql11652852",
    password: "9Pyhh76xZS",
    port: "3306",
    database: "sql11652852"
})

module.exports = conn