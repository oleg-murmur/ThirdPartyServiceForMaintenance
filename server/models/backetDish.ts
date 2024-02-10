'use strict';
import { UUIDV4, Sequelize } from "sequelize";

const {
  Model
} = require('sequelize');


interface BacketDishAttributes {
  id: typeof UUIDV4 | undefined,
}



module.exports = (sequelize: any, DataTypes: any) => {
  class BacketDish extends Model<BacketDishAttributes> 
  implements BacketDishAttributes {
    id!: typeof UUIDV4;

    static associate(models: any) {

        BacketDish.belongsTo(models.Backet)
        BacketDish.belongsTo(models.dish)


    }
  }
  BacketDish.init({
    id: {type: DataTypes.UUID, primaryKey: true, required: true,defaultValue: DataTypes.UUIDV4},  
    // user: {type: Model.User.id.type, ref: 'User'},
  }, {
    sequelize,
    modelName: 'backetDish',
  });
  return BacketDish;
};