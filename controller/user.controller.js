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
        const {id, name} = req.body
        await db.query(`INSERT INTO users(id, name) values (${id}, '${name}')`, (err, result) => {
            console.log(`INSERT INTO users(id, name) values (${id}, '${name}')`)
            console.log(result)
            res.json(result)
        })
    }
    async updateUser(req, res) {
        const {id, name, money, weight, age, energy, health, hungry, power, intellect, lucky, dirty, drivecategory, profession, created_at} = req.body
        const sql = `UPDATE users set name = '${name}', money=${money}, weight=${weight}, age=${age}, energy=${energy}, health=${health}, hungry=${hungry}, power=${power}, intellect=${intellect}, lucky=${lucky}, dirty=${dirty}, drivecategory='${drivecategory}', profession='${profession}', created_at='${created_at}' where id=${id}`
        await db.query(sql, (err, result) => {
            console.log('sql', sql)
            console.log('result', result)
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