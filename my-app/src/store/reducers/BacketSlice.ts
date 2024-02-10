import { IDish } from "@/models/IBacket";
import { PayloadAction, StateFromReducersMapObject, createSlice } from "@reduxjs/toolkit";

interface BacketState {
    id: number;
    dishes: IDish[];
    count: number;
    isLoading: boolean;
    error: string;
}


const initialState: BacketState = {
    id: 0,
    dishes: [],
    isLoading: false,
    error: '',
    count: 0
}


export const backetSlice = createSlice({
    name: 'Backet',
    initialState,
    reducers: {
        getAllDishInBacketUser(state,action: PayloadAction<IDish>) {
            // let userDishes = getDishInUserBacket(iduser)
            let userDishes: IDish[] = []
            state.dishes = userDishes

        },

        addDishInBacket(state,action: PayloadAction<IDish>) {
            state.dishes.push(action.payload)

            // req to db for add
        },
        deleteDishInBacket(state: any,action: PayloadAction<IDish>) {
           console.log(state)
           state.dishes.filter((dish: { id: number; }) => {
                dish.id !== action.payload.id

            })
            // console.log(before)
            // console.log(result)
            // req to db for delete
        },


        getCountDish(state,action: PayloadAction<IDish>) {
            state.count = state.dishes.length
            // req to db for delete
        }
    }
})


export default backetSlice.reducer;