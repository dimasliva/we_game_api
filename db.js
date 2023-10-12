const mysql = require('mysql')
const conn = mysql.createConnection({
    host: "dpg-ckf5qsmafg7c73fvd0mg-a.frankfurt-postgres.render.com/laravel_wwrp",
    user: "laravel_wwrp_user",
    password: "i91QQQpISJ8qnshaUUp0C33xXapQS7fn",
    port: "5432",
    database: "laravel_wwrp"
})

module.exports = conn