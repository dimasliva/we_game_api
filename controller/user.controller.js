const db = require('../db')
class UserController {
    async getUsers(req, res) {
        const users = await db.query('SELECT * from users', (err, result) => {
            res.json(result)
        })
    }
}
module.exports = new UserController()