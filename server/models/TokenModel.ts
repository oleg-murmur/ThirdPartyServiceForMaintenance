'use strict';
import { UUIDV4 } from "sequelize";

const {
  Model
} = require('sequelize');


interface TokenAttributes {
  id: typeof UUIDV4 | undefined,
  user: typeof Model.User.id,
  refrefToken: string;
}



module.exports = (sequelize: any, DataTypes: any) => {
  class Token extends Model<TokenAttributes> 
  implements TokenAttributes {
    id!: typeof UUIDV4;
    user!: typeof UUIDV4;
    refrefToken!: string;


    static associate(models: any) {
        Token.belongsTo(models.User, { foreignKey: 'userId' })
    }
  }
  Token.init({
    id: {type: DataTypes.UUID, primaryKey: true, required: true,defaultValue: DataTypes.UUIDV4},  
    refrefToken: {type: DataTypes.STRING, required: true},
 
  }, {
    sequelize,
    modelName: 'Token',
  });
  return Token;
};