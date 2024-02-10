import { useAppDispatch, useAppSelector } from "@/Hooks/redux/redux"
import { useSelector } from "react-redux"
import React from 'react'
import { backetSlice } from "@/store/reducers/BacketSlice"
import styles from '@/styles/backet/BacketStyles.module.css'
import { IDish } from "@/models/IBacket"
const BacketContainer = () => {

    const {dishes} = useAppSelector(state => state.backetReducer)

    const { getAllDishInBacketUser,addDishInBacket} = backetSlice.actions

    const dispatch = useAppDispatch()

    let dish = {
        id: Date.now(),
        name: 'he12312311231232132312312llo',
        price: 500,
        productList: [{id: 1, name: ''}]
    }
    const redirect = (paymentMethod: string) => {
        if(paymentMethod === 'SBP') {
            console.log('redirect to SBP')
        }
        if(paymentMethod === 'upon receipt') {
            console.log('upon receipt')
        }
    }

    return (
        <div style={{marginTop: '100px'}} className={styles.backetContainer}>
            <div onClick={_e => dispatch(addDishInBacket(dish))} className="">Корзина</div>
            {/* <div onClick={e => console.log('test')} className="backet-news">backet-news</div> */}
            <div className={styles.DishOrderContainer}>
            <div className={styles.DishList}>
                <div className="">Блюда</div>
                {dishes.length ? 
                    (dishes.map((dish: IDish) => 
                        <div key={dish.id} className={styles.DishListItem}>
                            <div className={styles.DishListItemName}>{dish.name}</div>
                            <div  className="">{dish.price} р</div>
                        </div>
                    ))
                    
                    : 
                    <div >Блюда не выбраны!</div>
                }
                <div className={styles.resultPrice}>
                    <div className="">Итого:</div>
                    <div className="">{dishes.reduce((accumulator: number, currentValue: IDish) => currentValue.price + accumulator, 0)} Р</div>
                </div>
                </div>
            <div className={styles.payOrder}>
                {dishes.length > 0 ? 
                    <>
                        <div onClick={st=>redirect('SBP')} className={styles.payOrderSBP}>Оплатить СБП</div>
                        <div onClick={et=>redirect('upon receipt')} className={styles.payOrderAnother}>При получении</div>
                    </>
                    :
                    <><div >Оплатить СБП</div>
                    <div >При получении</div></>
                }

                {/* <div className=""></div> */}
            </div>
            </div>

        </div>
    )
}

export default BacketContainer
