import User from '../models/User.js'

async function createUser(req, res) {
    const { email, name, hierarchy, age, income } = req.body
    const user = await User.create({ email, name, hierarchy, age, income })

    if (user) {
        res.status(201).json(user.toJSON())
    } else {
        res.status(500).json({ message: 'Não foi possível criar o usuário!' })
    }
}

async function getUsers(req, res) {
    const users = await User.findAll()
    
    if (users) {
        res.json(users.map(user => user.toJSON()))
    } else {
        res.status(500).json({ message: 'Não foi possível buscar usuários!' })
    }
}

export default { createUser, getUsers }