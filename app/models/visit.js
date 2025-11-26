import { DataTypes } from 'sequelize'
import sequelize from '../database/database.js'

const Visit = sequelize.define('visit', {
    name: { type: DataTypes.STRING,  allowNull: false  }
})

export default Visit
