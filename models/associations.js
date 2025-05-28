import Post from './Post.js'
import User from './User.js'

Post.belongsTo(User)
User.hasMany(Post)