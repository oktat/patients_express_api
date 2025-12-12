import User from './user.js';
// import sequelize from '../database/database.js'
import Visit from './visit.js';
import Patient from './patient.js';

const db = {};

db.User = User;
db.Visit = Visit;
db.Patient = Patient;

// await sequelize.sync({
//     alter: true
// })

export default db;
