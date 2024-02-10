'use strict';
import {
  Model, UUIDV4
} from 'sequelize';

interface ProductAttributes {
  id: string,
  name: string
}


module.exports = (sequelize: any, DataTypes: any) => {
  class product extends Model<ProductAttributes> 
  implements ProductAttributes {

    id!: string;
    name!: string;
    static associate(models: any) {
      // define association here
      product.belongsToMany(models.dish, {
        through: 'UsedProductsInDish',

      })
    }
  }
  product.init({
id: {type: DataTypes.STRING, primaryKey: true, autoIncrement: true},    
name: {type: DataTypes.STRING, unique: true, allowNull: false},
  }, {
    sequelize,
    modelName: 'product',
  });
  return product;
};