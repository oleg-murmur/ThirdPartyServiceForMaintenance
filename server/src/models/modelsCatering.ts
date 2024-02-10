// import {sequelizeConnection} from '../../config'
// import {DataTypes } from 'sequelize';

// const User = sequelizeConnection.define('user', {
//     id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
//     email: {type: DataTypes.STRING, unique: true},
//     name: {type: DataTypes.STRING,},
//     password: {type: DataTypes.STRING},
//     role: {type: DataTypes.STRING, defaultValue: "User"},
//     haveDeleted: {type: DataTypes.BOOLEAN, defaultValue: false},
// })

// const Backet = sequelizeConnection.define('basket', {
//     id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
// })

// const BacketDish = sequelizeConnection.define('basket_dish', {
//     id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
// })
// const Dish = sequelizeConnection.define('dish', {
//     id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true,},
//     name: {type: DataTypes.STRING, unique: true,allowNull:false},
//     price: {type: DataTypes.INTEGER, allowNull:false},
//     rating: {type: DataTypes.INTEGER, defaultValue: 0},
//     img: {type: DataTypes.STRING,allowNull: true},
//     popularSign: {type: DataTypes.BOOLEAN, defaultValue:  true},

// })

// const Product = sequelizeConnection.define('product', {
//     id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
//     name: {type: DataTypes.STRING, unique: true, allowNull: false},
// })

// const Rating = sequelizeConnection.define('rating', {
//     id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
//     rate: {type: DataTypes.INTEGER, allowNull: false},
// })
// const TimeInterval = sequelizeConnection.define('product_info', {
//     id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
//     startHours: {type: DataTypes.INTEGER, allowNull: true},
//     startMinutes: {type: DataTypes.INTEGER, allowNull: true},
//     endHours: {type: DataTypes.INTEGER, allowNull: true},
//     endMinutes: {type: DataTypes.INTEGER, allowNull: true},
// })
// const TimeCookingInterval = sequelizeConnection.define('product_info', {
//     id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
//     startHours: {type: DataTypes.INTEGER, allowNull: true},
//     startMinutes: {type: DataTypes.INTEGER, allowNull: true},
//     endHours: {type: DataTypes.INTEGER, allowNull: true},
//     endMinutes: {type: DataTypes.INTEGER, allowNull: true},
// })

// User.hasOne(Backet)
// Backet.belongsTo(User)

// User.hasMany(Rating)
// Rating.belongsTo(User)

// Backet.hasMany(BacketDish)
// BacketDish.belongsTo(Backet)

// Dish.hasMany(Rating)
// Rating.belongsTo(Dish)

// Dish.hasMany(BacketDish)
// BacketDish.belongsTo(Dish)




// Dish.hasMany(Product, {as: 'product'})
// Dish.hasOne(TimeCookingInterval, {as: 'cookingTime'})
// Dish.hasMany(TimeInterval, {as: 'timeForLetOrder[]'})
// TimeInterval.belongsTo(Dish)
// TimeCookingInterval.belongsTo(Dish)
// Product.belongsTo(Dish)


// module.exports ={
//     TimeInterval,
//     Dish, 
//     Product,
//     BacketDish,
//     Backet,
//     User,
//     Rating,
//     TimeCookingInterval
//     }