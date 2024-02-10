import React, { useState } from 'react'
import styles from '@/styles/DishContainer.module.css'
import Image1 from '@/assets/1.jpg'
import Image2 from '@/assets/22.jpg'
import Image3 from '@/assets/33.jpg'
import Image4 from '@/assets/44.jpg'
import FingerTap from '@/assets/fingerTap.svg'
import { backetSlice } from '@/store/reducers/BacketSlice'
import { useAppDispatch } from '@/Hooks/redux/redux'
import { IDish } from '@/models/IBacket'

const images = [Image1,Image2,Image3, Image4]

interface IItemProps {
    item: IDish
}




const AffordableDishItem = ({item}: IItemProps) => {

    const { getAllDishInBacketUser,addDishInBacket,deleteDishInBacket} = backetSlice.actions

    const dispatch = useAppDispatch()

    const obj = {
        status: false
    }

    const openModal = (name: string) => {
        if(obj.status === false) {
            
            dispatch(addDishInBacket(item))
            obj.status= true;
            console.log('add')
        }else{
            dispatch(deleteDishInBacket(item))
            obj.status=false;
            console.log('delete')
        }

    }
    


    return (
        <div className="InfoContainer-second-content-container">

            <div className="InfoContainer-second-content-img-container" onClick={()=> openModal(item.name)}>
                <img src={Image2}/>
                <div className="fingertap">
                    <FingerTap color={"#FFCDD0"} width={50} height={50}/>
                </div>
            </div>

            <div className="InfoContainer-second-content-container-info">
                <div className="InfoContainer-second-content-container-info-text">
                    <div className="InfoContainer-second-content-container-info-text-name">{item.name}</div>
                    <div className="InfoContainer-second-content-container-info-text-price">{item.price} рублей</div>
                </div>
            </div>

        </div>
    )
}

export default AffordableDishItem
