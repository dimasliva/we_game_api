const db = require('../db')
class TaskController {
    async getTasks(req, res) {
        await db.query('SELECT * from tasks', (err, result) => {
            if(err) {
                res.json(err)
            } else {
                res.json(result)
            }
        })
    }
    async getTask(req, res) {
        const id = req.params.id
        await db.query(`SELECT * from tasks where id = ${id}`, (err, result) => {
            res.json(result)
        })
    }
    async addTask(req, res) {
        const {name, first_name, phone, email, price, type, product, comment} = req.body
        console.log(req.body)
        await db.query(`INSERT INTO tasks(name, first_name, phone, email, price, type, product, comment) values ('${name}', '${first_name}', ${phone}, '${email}', ${price}, '${type}', '${product}', '${comment}')`, (err, result) => {
            console.log(`\`INSERT INTO tasks(name, first_name, phone, email, price, type, product, comment) values ('${name}', '${first_name}', ${phone}, '${email}', ${price}, '${type}', '${product}', '${comment}'`)
            res.json(result)
        })
    }
    async updateTask(req, res) {
        const {id, name, first_name, phone, email, price, type, product, comment, completed, checked} = req.body
        await db.query(`UPDATE tasks set name = '${name}', first_name = '${first_name}', phone = ${phone}, email = '${email}', price = ${price}, type = '${type}', product = '${product}', comment = '${comment}', completed = ${completed}, checked = '${checked}' where id = ${id}`, (err, result) => {
            console.log(`UPDATE tasks set name = '${name}', first_name = '${first_name}', phone = ${phone}, email = '${email}', price = ${price}, type = '${type}', product = '${product}', comment = '${comment}', completed = ${completed}, checked = '${checked}' where id = ${id}`)
            console.log(result)
            res.json(result)
        })
    }
    async deleteTask(req, res) {
        const id = req.params.id
        await db.query(`DELETE from tasks where id = ${id}`, (err, result) => {
            res.json(result)
        })
    }
}
module.exports = new TaskController()