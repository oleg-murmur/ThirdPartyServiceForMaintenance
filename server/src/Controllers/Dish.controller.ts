import { Dish, Product } from "../classes/KitchenClasses";
import { TimeInterval } from "../classes/TimeInterval";
import db from '../../models'
import {
    Op,
    Sequelize
  } from 'sequelize';
export class DishController {


    async getAllbacket(req: any,res: any,next: any) { 
        const {email,password,isActivated,activatedLink,name} = req.body
        console.log(req)
        let data = await db.User.create({
            email: '12',
            password: 123,
            isActivated: false,
            activatedLink: 'string',
            name: 'string22',
        })
       
        return res.json(data)
    }


async getAllDish(req: any,res: any,next: any) { 
    const {} = req.body
    console.log(req)
    let data = await db.dish.findAll({
        include: [db.product, db.cookingTeam,
            {model: db.timeInterval,as: 'Intervals',}]
    })
   
    return res.json(data)
}

async getDishByID(req: any,res: any,next: any) { 
    const {} = req.body
    const {id} = req.params
    console.log(req)
    let data = await db.dish.findOne({
        where: {id: id},
        include: [{model: db.timeInterval,as: 'Intervals',}]
    })
    
    return res.json(data)
}

async CreateDish(req: 
    { body: 
        {
            name: string,
            price: string,
            cookingTime: number, //timeCookingInterval one-to-one
            productsList:[],
            timeForLetOrder: TimeInterval[], //timeInterval many-to-many
        }
    },
        res: any,
        next: any) { 

    let {
        name,
        price,
        cookingTime, //время приготовления
        productsList,
        timeForLetOrder, // периоды доступа еды
    } = req.body

    const dataDish = await db.dish.create({
        name,
        price,
        cookingTime:cookingTime,
    })

    if(timeForLetOrder) {
        //timeForLetOrder = JSON.parse(timeForLetOrder)
        let data: unknown[]= []
        timeForLetOrder.forEach(async (i:TimeInterval) => {
            let res =  await db.timeInterval.create({
                        startHours: i.startHours,
                        startMinutes: i.startMinutes,
                        endHours: i.endHours,
                        endMinutes:  i.endMinutes,
                        dishId: dataDish.id
                    })
                });
                data.push(res)
    }

    return res.json({
        "dish created": dataDish,
        "timeintervals": timeForLetOrder
        })
    }
}