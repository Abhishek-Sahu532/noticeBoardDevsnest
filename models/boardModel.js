const {DataTypes} = require('sequelize')
const db = require('../config/db');


const noticeBoard = db.define('noticeBoard', {
  id:{
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  author:{
    type: DataTypes.STRING  
  },
  message:{
    type: DataTypes.STRING  
  },
  date:{
    type: DataTypes.STRING  
  },
  likes:{
    type: DataTypes.INTEGER,
    defaultValue : 0
  
  }
})


noticeBoard.sync()

module.exports = noticeBoard