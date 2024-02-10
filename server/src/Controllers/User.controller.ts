

export class UserController {


    async Registration(req: 
        { body: 
            {
            }
        },res: any,next: any)
    { 

        return res.json()
    }

    async Login(req: 
        { body: 
            {

            }
        },res: any,next: any) {

    
        return res.json()
    }

    async checkStatusAuth(req: 
        { body: 
            {

            }
        },res: any,next: any) 
    {
        res.json('work')
    }
}