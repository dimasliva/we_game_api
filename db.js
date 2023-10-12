const mysql = require('mysql')
const conn = mysql.createConnection({
    host: "vh424.timeweb.ru",
    user: "ci31289",
    password: "fRb7rZxv",
    port: "3306",
    database: "ci31289_wegame"
})
// host vh424.timeweb.ru
// login ci31289
//почта hibali2012@elixirsd.com
// Database: ci31289_wegame
//fRb7rZxv
module.exports = conn