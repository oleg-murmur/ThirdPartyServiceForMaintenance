'use strict';

import { UUIDV4 } from "sequelize";

const {
  Model
} = require('sequelize');

interface DishAttributes {
  id: string,
  name: string;
  price: string;
  rating: number;
  img: string;
  popularSign: boolean;
}

module.exports = (sequelize: any, DataTypes: any) => {
  class dish extends Model<DishAttributes> 
  implements DishAttributes {
    
    id!: string;
    name!: string;
    price!: string;
    rating!: number;
    img!: string;
    popularSign!: boolean;
    timeIntervals!: string;
    cookingTime!: string;
    static associate(models: any) {
      dish.belongsToMany(models.product, {
        through: 'UsedProductsInDish',
      })

      dish.belongsToMany(models.cookingTeam, {
        through: 'CookingTeamCanDish'
      })
      dish.hasMany(models.timeInterval, { 
        as: 'Intervals'
      })
      dish.hasMany(models.backetDish)
    }
  }
  dish.init({
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},  
    name: {type: DataTypes.STRING, unique: true,allowNull:false},
    price: {type: DataTypes.INTEGER, allowNull:false},
    rating: {type: DataTypes.INTEGER, defaultValue: 0},
    img: {type: DataTypes.STRING,allowNull: true},
    popularSign: {type: DataTypes.BOOLEAN, defaultValue:  true},
    cookingTime: {type: DataTypes.STRING, allowNull: true},
  }, {
    sequelize,
    modelName: 'dish',
  });
  return dish;
};