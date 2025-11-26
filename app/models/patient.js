import { DataTypes } from 'sequelize'
import sequelize from '../database/database.js'

const Patient = sequelize.define('patient', {
    name: { type: DataTypes.STRING,  allowNull: false  }
})

export default Patient
