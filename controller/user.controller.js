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
        const {id, username, name} = req.body
        await db.query(`INSERT INTO users(id, username, name) values (${id}, '${username}', '${name}')`, (err, result) => {
            res.json(result)
        })
    }
    async updateUser(req, res) {
        const {id, username, name} = req.body
        await db.query(`UPDATE users set username = ${username}, name = '${name}' ) where id = ${id}`, (err, result) => {
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