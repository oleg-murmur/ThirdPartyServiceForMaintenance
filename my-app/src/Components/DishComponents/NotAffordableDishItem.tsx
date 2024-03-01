import React from 'react'
import Image3 from '@/assets/33.jpg'

import button from '@/styles/buttons/Button_1.module.css'


interface IItemProps {
    item: {
        id: string,
        name: string,
        price: string
    }
}


const NotAffordableDishItem = ({item}: IItemProps) => {
    return (
        <div className="InfoContainer-second-content-container">

            <div className="InfoContainer-second-content-img-container">
            <div className="container-not">
                <div className="container-not-text">Сейчас не доступно</div>
                <button className={button.ButtonOpenModalByDish}>Расписание блюда</button>
            </div>
                <img src={Image3}/>
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

export default NotAffordableDishItem

                    {/* <div className="container-not">    
                    <div className=""></div>
                    </div>
                    <div className="container-not-text" >Не доступно к заказу</div>
                    <div className="container-not-text" style={{
                        width: '100%',
                        height: '100%',
                        backgroundColor: '#a3a3a3c5'}}>123</div>
                    <div className="">{item.name}</div>
                    <div className="">{item.price} рублей</div>  */}