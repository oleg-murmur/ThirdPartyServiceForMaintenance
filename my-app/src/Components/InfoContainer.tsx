import React, { useEffect, useState } from 'react'
import '@/styles/global.css'
import '@/styles/InfoContainer.styles.css'
import { getAllDishes } from '@/http/DishAPI';
import { getAllTeams } from '@/http/TeamAPI';
import { ManagementSystem } from '@/Hooks/compilateDish';
import { CustomError } from '@/CustomErrors/customErrorData';
import TypeContainer from './TypeContainer';
import AllDishContainer from '@/Components/DishComponents/AllDishContainer';
import LoaderDish from './Loader/LoaderDish';


const DEFAULT_DISHES = [
    {
        id: 'test1',
        name: 'test1',
        price: 'test1'
    }]



const InfoContainer = () => {

    const [dishes,setDish] = useState<[]>([])
    const [statusData, setStatusData] = useState<Boolean>(false)
    
    const [typeDish, setTypeDish] = useState<Number>(0)

    

 useEffect(() => {
    async function fetchdata() {
        setStatusData(false)
        let dataTeams = await getAllTeams()
        let DataDishes = await getAllDishes()

        if(!DataDishes) DataDishes = DEFAULT_DISHES

        if(!dataTeams) dataTeams = []

        setDish(DataDishes)

        const managementSystem = new ManagementSystem(DataDishes,dataTeams);
        
        let now = new Date();
        let hours = now.getHours();
        let minutes = now.getMinutes();
        try {
            const readyDish =  managementSystem.getAvailableDishesForavailableTeams(15,minutes)     
            if(readyDish['можно заказать'].length === 0) {
                throw new CustomError(1, 'В данный момент нет доступных блюд')
            }      
        } catch (error) {
            if(error instanceof CustomError){
                console.log(error, '1')
            }else{
                console.log(error, '2')
            }
        }
        setStatusData(true)
        return
        
      }
      fetchdata()
    },[])

    return (
        <div className='univercal-settings main-InfoContainer'>
            <TypeContainer/>
        <div className='InfoContainer '>
            {statusData ? 
            <AllDishContainer dishes={dishes}/>            
            :
            <LoaderDish/>
            }
        </div>
        </div>
    )
}
export default InfoContainer
