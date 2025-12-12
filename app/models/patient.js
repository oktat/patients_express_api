import { DataTypes } from 'sequelize'
import sequelize from '../database/database.js'

const Patient = sequelize.define('patient', {
    name: {
      type: DataTypes.STRING
    },
    birthDate: {
      type: DataTypes.DATEONLY
    },
    socialNumber: {
      type: DataTypes.STRING
    },
    phone: {
      type: DataTypes.STRING
    },
})

export default Patient
