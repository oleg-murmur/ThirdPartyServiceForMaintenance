'use strict';
import {
  Model
} from 'sequelize';

interface TimeCookingIntervalAttributes {
  id: number
  startHours: number
  startMinutes: number;
  endHours: number; 
  endMinutes:  number;
}


module.exports = (sequelize: any, DataTypes: any) => {
  class timeCookingInterval extends Model<TimeCookingIntervalAttributes> 
  implements TimeCookingIntervalAttributes  {
    id!: number
    startHours!: number
    startMinutes!: number;
    endHours!: number; 
    endMinutes!:  number;
    static associate(models: any) {
      
      timeCookingInterval.belongsTo(models.dish)
    }
  }
  timeCookingInterval.init({
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    startHours: {type: DataTypes.INTEGER, allowNull: true},
    startMinutes: {type: DataTypes.INTEGER, allowNull: true},
    endHours: {type: DataTypes.INTEGER, allowNull: true},
    endMinutes: {type: DataTypes.INTEGER, allowNull: true}

  }, {
    sequelize,
    modelName: 'timeCookingInterval',
  });
  return timeCookingInterval;
};