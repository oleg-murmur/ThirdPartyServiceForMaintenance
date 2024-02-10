import db from "../../models"


export class BindDataController {

    async bindData(req: 
        { body: 
            {
                // dishId: string,
                // startHours: number, 
                // startMinutes: number, 
                // endHours: number, 
                // endMinutes: number, 

                idInterval: string,
                idDish: string,
                idCookingTeam: string,
                idProduct:string,
            }
        },
            res: any,
            next: any) { 

                let {idInterval, idDish,idCookingTeam, idProduct} = req.body
                    
                // console.log(req.body)
                if(idDish && idCookingTeam) {
                    let dish = await db.dish.findOne({
                             where: {id: idDish},
                           })
                    let team = await db.cookingTeam.findOne({
                            where: {id: idCookingTeam},
                          })
                          const response = await dish.addCookingTeam(team)
                          return res.json({"bind dish and cooking team done": response})
                }

                if(idDish && idProduct) {
                    let dish = await db.dish.findOne({
                        where: {id: idDish},
                      })
                    let product = await db.product.findOne({
                       where: {id: idProduct},
                     })
                    const response =  await dish.addProduct(product)
                    res.json({"bind dish and product done": response})
                }


                // let dish = await db.dish.findOne({
                //     where: {id: idDish},
                //   })
                //   console.log()
                //   console.log(dish)
                //     await dish.addProduct(data)
                //     let productInDidh = await dish.getProducts()
                //     let dishwithProducts = await data.getDishes()
                //     console.log(productInDidh, 'ищем продукты')
                //     console.log(dishwithProducts, 'ищем блюда')   
                


            }
            async getBindDataByID(req: 
                { body: 
                    {
                        idInterval: string,
                        idDish: string,
                        idCookingTeam: string,
                        idProduct:string,
                    }
                },
                    res: any,
                    next: any)  {

                        let {idDish,idCookingTeam, idProduct} = req.body

                        if(idDish) { //все блюда которые привязаны к команде
                            let allDish = await db.dish.findOne({
                                     where: {id: idDish},
                                     include: [db.product, db.cookingTeam] 
                                   })
                                  return res.json({"allDish that the cookingTeam can prepare CookingTeam": allDish})
                        }
                        
                        if(idCookingTeam) { //все блюда которые привязаны к команде
                            let allDish = await db.cookingTeam.findOne({
                                     where: {id: idCookingTeam},
                                     include: db.dish 
                                   })
                                  return res.json({"allDish that the cookingTeam can prepare CookingTeam": allDish})
                        }
                        if(idProduct) { //все продукты, которые привязаны к блюду
                            let allProduct = await db.product.findAll({
                                where: {id: idProduct},
                                include: db.dish 
                              })
                            res.json({"all product in dish": allProduct})
                        }
        
                    }
}