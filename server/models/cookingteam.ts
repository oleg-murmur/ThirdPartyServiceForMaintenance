'use strict';
import {
  Model
} from 'sequelize';

interface CookingTeamAttributes {
  id: string,
  name: string;
  rating: number;
  img: string;
}


module.exports = (sequelize: any, DataTypes: any) => {
  class cookingTeam extends Model<CookingTeamAttributes> 
 implements CookingTeamAttributes{
    id!: string;
    name!: string;
    rating!: number;
    img!: string;
    static associate(models: any) {
      cookingTeam.belongsToMany(models.dish, {
        through: 'CookingTeamCanDish'

      }) 
      
      cookingTeam.hasMany(models.timeInterval, { 
        as: 'Intervals'
      })
    }
  }
  cookingTeam.init({
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},  
    name: {type: DataTypes.STRING, unique: true,allowNull:false},
    rating: {type: DataTypes.INTEGER, defaultValue: 0},
    img: {type: DataTypes.STRING,allowNull: true},
  }, {
    sequelize,
    modelName: 'cookingTeam',
  });
  return cookingTeam;
};