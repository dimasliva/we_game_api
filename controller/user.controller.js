const db = require('../db')
class UserController {
    async getUsers(req, res) {
        await db.query('SELECT * from users', (err, result) => {
            if(err) {
                res.json(err)
            } else {
                res.json(result)
            }
        })
    }
    async getUser(req, res) {
        const id = req.params.id
        await db.query(`SELECT * from users where id = ${id}`, (err, result) => {
            res.json(result)
        })
    }
    async addUser(req, res) {
        const {username, password} = req.body
        await db.query(`INSERT INTO users(username, password) values (${username}, ${password})`, (err, result) => {
            res.json(result)
        })
    }
    async updateUser(req, res) {
        const {id, username, password} = req.body
        await db.query(`UPDATE users set username = ${username}, password = ${password}) where id = ${id}`, (err, result) => {
            res.json(result)
        })
    }
    async deleteUser(req, res) {
        const id = req.params.id
        await db.query(`DELETE from users where id = ${id}`, (err, result) => {
            res.json(result)
        })
    }
}
module.exports = new UserController()