const Sequelize = require('sequelize')
const sequelize = new Sequelize('blogdb','root','',{
    host:'localhost:8080',
    dialect:'mysql'
})