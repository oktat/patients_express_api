import { DataTypes } from 'sequelize';

async function up({context: QueryInterface}) {
  await QueryInterface.createTable('patients', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
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
    createdAt: { type: DataTypes.DATE },
    updatedAt: { type: DataTypes.DATE }
  });
}

async function down({context: QueryInterface}) {
  await QueryInterface.dropTable('patients');
}

export { up, down }
