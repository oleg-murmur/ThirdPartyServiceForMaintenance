import { Dish, Product } from "../classes/KitchenClasses";
import { TimeInterval } from "../classes/TimeInterval";
import db from '../../models'

export class TeamController {

    private team = {
        name: "",
        rating: 0,

    }

async getTeamByID(req: any,res: any,next: any) { 
    const {id} = req.params

    let data = await db.cookingTeam.findOne({
        where: {id},
        include: [db.dish
            // ,{model: db.timeInterval,as: 'Intervals',}
        ]
    })
    return res.json(data)
}

async createTeam(req: any,res: any,next: any){
    const {name, rating,intervals} = req.body
    //img (from req.files)
    let team = {
        name, rating
    }
    let dataCookingTeam = await db.cookingTeam.create(team)
    console.log(team)

    if(intervals) {
        intervals.forEach(async (i:any) => {
           let data =  await db.timeInterval.create({
                        startHours: i.startHours,
                        startMinutes: i.startMinutes,
                        endHours: i.endHours,
                        endMinutes:  i.endMinutes,
                        teamId: dataCookingTeam.id
                    })
                });
    }


    return res.json({"team created": dataCookingTeam})
}

async getAllTeams(req: any,res: any,next: any){
    let data = await db.cookingTeam.findAll({
        include: [db.dish ,{model: db.timeInterval,as: 'Intervals',}
        ]
    })
    
    return res.json(data)
}

 
async getAllTeamsWithParams(req: 
    { body: 
        {
            name: string,
            rating: boolean,
        }
    },
        res: any,
        next: any) { 
    let {
        name,
        rating,
    } = req.body

    const data = await db.cookingTeam.getAll({
        include: [db.dish,
            {model: db.timeInterval,as: 'Intervals',}]
    })
    res.json(data)
}
}