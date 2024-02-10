import { Dish, Product } from "../classes/KitchenClasses";
import { TimeInterval } from "../classes/TimeInterval";
import db from '../../models'
import {
    Op,
    Sequelize,
    UUIDV4
  } from 'sequelize';
import { RequestHandler } from "express";

export class BacketController {

    async getDishesFromBacketID(req: 
        { body: 
            {
                userID: typeof UUIDV4,
            }
        },res: any,next: any)
    { 
        const {userID} = req.body
        console.log(userID)
        let data = await db.Backet.findAll({
            where: {userId: userID},
            include: [{model: db.backetDish, as: "backetDishes"}]
        })

        return res.json(data)
    }

    async addDishInBacket(req: 
        { body: 
            {
                backetID: typeof UUIDV4,
                dishID: number
            }
        },res: any,next: any) 
    {
        const {backetID,dishID} = req.body
        console.log(req)
        let data = await db.backetDish.create({
            BacketId: backetID,
            dishId: dishID
        })
    
        return res.json(data)
    }

async deleteDishInBacket(req: 
        { body: 
            {
                backetID: typeof UUIDV4,
                dishID: number
            }
        },res: any,next: any) 
    {
        const {backetID,dishID} = req.body
        console.log(req)
        let data = await db.backetDish.destroy({
            where: {dishId: dishID}
        })
    
        return res.json(data)
    }
}