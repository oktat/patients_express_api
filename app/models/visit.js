import { DataTypes } from 'sequelize'
import sequelize from '../database/database.js'

const Visit = sequelize.define('visit', {
    date: {
      type: DataTypes.DATEONLY
    },
    diagnosis: {
      type: DataTypes.STRING
    },
    doctor: {
      type: DataTypes.STRING
    },
    patientId: {
      type: DataTypes.INTEGER
    },
})

export default Visit
