import { Sequelize } from 'sequelize'

import database from '../db/database.js'

const User = database.define('users', {
    email: {
        type: Sequelize.STRING,
        allowNull: false
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    hierarchy: {
        type: Sequelize.STRING,
        allowNull: false
    },
    age: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    income: {
        type: Sequelize.INTEGER,
        allowNull: false
    }
})

export default User