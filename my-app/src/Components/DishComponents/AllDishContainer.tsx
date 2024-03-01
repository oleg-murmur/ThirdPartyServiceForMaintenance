import styles from '@/styles/DishContainer.module.css'
import AffordableDishItem from '@/Components/DishComponents/AffordableDishItem'
import NotAffordableDishItem from '@/Components/DishComponents/NotAffordableDishItem'

interface Dish {
    id: string,
    name: string,
    price: string
}

interface IDishProps {
    dishes: Dish[]
}

const AllDishContainer = (props:IDishProps) => {


    return (
        <div className="InfoContainer-second-content">
        {props.dishes.map((item:any) =>
            (item.canOrder === true ? 
                <AffordableDishItem key={item.id} item={item}/> 
            : 
                <NotAffordableDishItem key={item.id} item={item}/>
))}
        </div>
    )
}

export default AllDishContainer
