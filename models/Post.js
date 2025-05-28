import { Sequelize } from 'sequelize'

import database from '../db/database.js'

const Post = database.define('movimentacao', {
    category:{
        type: Sequelize.STRING,
		allowNull: false
    },
    title:{
        type: Sequelize.STRING,
		allowNull: false
    },
    value:{
        type: Sequelize.INTEGER,
		allowNull: false
    },
    type:{
        type: Sequelize.STRING,
		allowNull: false
    }
})

export default Post