'use strict';
import { UUIDV4 } from "sequelize";

const {
  Model
} = require('sequelize');


interface UserAttributes {
  id: typeof UUIDV4 | undefined,
  name: string;
  email: string;
  password: string;
  isActivated: boolean;
  activatedLink: string
}



module.exports = (sequelize: any, DataTypes: any) => {
  class User extends Model<UserAttributes> 
  implements UserAttributes {
    id!: typeof UUIDV4;
    email!: string;
    password!: string;
    isActivated!: boolean;
    activatedLink!: string;
    name!: string;

    static associate(models: any) {
        User.hasOne(models.Token)

        User.hasOne(models.Backet)
        User.addHook('afterCreate', (user: { id: any; }, options: any) => {
          return models.Backet.create({ userId: user.id });
        });
    }
  }
  User.init({
    id: {type: DataTypes.UUID, primaryKey: true, required: true,defaultValue: DataTypes.UUIDV4},  
    email: {type: DataTypes.STRING, unique: true,allowNull:false, required: true},
    password: {type: DataTypes.STRING, allowNull:false, required: true},
    isActivated: {type: DataTypes.BOOLEAN, defaultValue: false},
    activatedLink: {type: DataTypes.STRING},
    name: {type: DataTypes.STRING, required: true},
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};