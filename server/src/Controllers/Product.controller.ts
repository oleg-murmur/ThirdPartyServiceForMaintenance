import db from '../../models'
import { Product } from '../classes/KitchenClasses';


 export class ProductController {

    private product: Product = { //по умолчанию?
        name: '',
        id: 0,
    };
    private products: Product[] = [];
    
    async createProduct(req: any,res: any,next: any) { 
        const {name} = req.body
        let data = await db.product.create({name})
        return res.json(data)
    }
    async getAllProducts(req: any,res: any,next: any) { 
        const {} = req.body
        let data = await db.product.findAll({
        })
        return res.json(data)
    }

    async getProductByID(req: any,res: any,next: any) { 
        const {} = req.body
        let {id} = req.params
        console.log(req)
        let data = await db.product.findOne({
            where: {id},
            include: db.dish 
        })

        return res.json(data)
    }

    async EditProduct(req: any,res: any,next: any) { 
        return res.json({"notWork": "2"})
    }
    async DeleteProduct(req: any,res: any,next: any) { 
        return res.json({"notWork": "2"})
    }
    async AddProductToDish(req: any,res: any,next: any) {
        return res.json({"notWork": "2"})
    }
}