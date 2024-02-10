import db from '../../models'
import { TimeInterval } from '../classes/TimeInterval';


 export class TimeIntervalController {

    private interval: TimeInterval = {
        startHours: 0,
        startMinutes: 0,
        endHours: 0,
        endMinutes: 0,
        setStartTime: function (hours: number, minutes: number): void {
            throw new Error('Function not implemented.');
        },
        setEndTime: function (hours: number, minutes: number): void {
            throw new Error('Function not implemented.');
        }
    };
    async createInterval(req: 
        { body: 
            {
                dishId: string,
                cookingTeamId: string,
                startHours: number, 
                startMinutes: number, 
                endHours: number, 
                endMinutes: number, 
            }
        },
            res: any,
            next: any) { 
                
        let {
            startHours,
            startMinutes,
            endHours,
            endMinutes,
            dishId,
            cookingTeamId
        } = req.body
        let data;
        if(dishId) {
            data =  await db.timeInterval.create({
                startHours:startHours,
                startMinutes:startMinutes,
                endHours: endHours,
                endMinutes:  endMinutes,
                dishId: dishId
            })
        }
        if(cookingTeamId) {
            data =  await db.timeInterval.create({
                startHours:startHours,
                startMinutes:startMinutes,
                endHours: endHours,
                endMinutes:  endMinutes,
                cookingTeamId: cookingTeamId
            })            
        }

        return res.json({"createInterval": data})
    }

    async getIntervalsByIdDish(req: any,res: any,next: any) { 
        const {id} = req.body
        let data = await db.timeInterval.findAll({
             where: {dishId: id}
        })
        return res.json({"getIntervalsByIdDishOrIdTeam": data})
    }

    async getInterval(req: any,res: any,next: any) { 
        const {} = req.body
        let {id} = req.params
        console.log(req)
        let data = await db.timeInterval.findOne({
            where: {id},
        })
        return res.json({"getInterval": data})
    }
 }