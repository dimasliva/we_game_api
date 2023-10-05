const mysql = require('mysql')
const conn = mysql.createConnection({
    host: "sql8.freesqldatabase.com",
    user: "sql8651326",
    password: "n6xAyLB5T6",
    port: "3306",
    database: "sql8651326"
})

module.exports = conn