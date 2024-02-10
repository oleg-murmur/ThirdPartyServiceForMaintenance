'use strict';
import { UUIDV4 } from "sequelize";

const {
  Model
} = require('sequelize');


interface BacketAttributes {
  id: typeof UUIDV4;
}



module.exports = (sequelize: any, DataTypes: any) => {
  class Backet extends Model<BacketAttributes> 
  implements BacketAttributes {
    id!: typeof UUIDV4;

    static associate(models: any) {
        Backet.belongsTo(models.User, { foreignKey: 'userId' })

        Backet.hasMany(models.backetDish, { as: 'backetDishes'})


    }
  }
  Backet.init({
    id: {type: DataTypes.UUID, primaryKey: true, required: true,defaultValue: DataTypes.UUIDV4},  
    // user: {type: Model.User.rawAttributes.id.type, ref: 'User'},
  }, {
    sequelize,
    modelName: 'Backet',
  });
  return Backet;
};