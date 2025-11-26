import { DataTypes } from 'sequelize';

async function up({context: QueryInterface}) {
  await QueryInterface.createTable('visits', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
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
    createdAt: { type: DataTypes.DATE },
    updatedAt: { type: DataTypes.DATE }
  });
}

async function down({context: QueryInterface}) {
  await QueryInterface.dropTable('visits');
}

export { up, down }
