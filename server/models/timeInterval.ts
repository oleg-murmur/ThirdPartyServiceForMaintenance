'use strict';
import {
  Model
} from 'sequelize';

interface TimeIntervalAttributes {
  id: number
  startHours: number
  startMinutes: number;
  endHours: number; 
  endMinutes:  number;
}

module.exports = (sequelize: any, DataTypes: any) => {
  class timeInterval extends Model<TimeIntervalAttributes> 
 implements TimeIntervalAttributes {
  id!: number
  startHours!: number
  startMinutes!: number;
  endHours!: number; 
  endMinutes!:  number;
    static associate(models: any) {
      timeInterval.belongsTo(models.dish,{
        foreignKey: {
          name: 'dishId'
        } 
      })
      timeInterval.belongsTo(models.cookingTeam,{
        foreignKey: {
          name: 'cookingTeamId'
        }
      })
    }
  }
  timeInterval.init({
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    startHours: {type: DataTypes.INTEGER, allowNull: true},
    startMinutes: {type: DataTypes.INTEGER, allowNull: true},
    endHours: {type: DataTypes.INTEGER, allowNull: true},
    endMinutes: {type: DataTypes.INTEGER, allowNull: true}

  }, {
    sequelize,
    modelName: 'timeInterval',
  });
  return timeInterval;
};