const db = require('../db')
const {validationResult} = require('express-validator');

class ItemController {
    async getItems(req, res) {
        await db.query('SELECT * from items', (err, result) => {
            if(err) {
                res.json(err)
            } else {
                console.log('result', result)
                res.json(result)
            }
        })
    }
    async getItem(req, res) {
        const id = req.params.id
        await db.query(`SELECT * from items where id = ${id}`, (err, result) => {
            res.json(result)
        })
    }
    async addItem(req, res) {
        const errors = validationResult(req)
        if(!errors.isEmpty()) {
            return res.status(400).json({errors: errors.array()})
        }
        const {name} = req.body
        const sql = `INSERT INTO items(name) values ('${name}')`

        await db.query(sql, (err, result) => {
            console.log(sql)
            res.json(result)
        })
    }
    async updateItem(req, res) {
        const errors = validationResult(req)
        if(!errors.isEmpty()) {
            return res.status(400).json({errors: errors.array()})
        }
        const {id, name} = req.body
        const sql = `UPDATE items set name = '${name}' where id=${id}`
        await db.query(sql, (err, result) => {
            console.log('sql', sql)
            console.log('result', result)
            res.json(result)
        })
    }
    async deleteItem(req, res) {
        const id = req.params.id
        await db.query(`DELETE from items where id = ${id}`, (err, result) => {
            res.json(result)
        })
    }
}
module.exports = new ItemController()