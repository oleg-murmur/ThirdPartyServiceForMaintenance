import axios from "axios";

const FIRST_API_URL = 'http://localhost:5000/api/'


axios.defaults.baseURL = FIRST_API_URL

export const getAllDishes = async () => {
    try {
        let {data} = await axios.get('dishes/allDishes', {
            params: {
                //typeId: id
            }
        })
        if(!data)  data = []

        return data
    } catch (error) {
        console.log(error)
    }
}
export const getOneDishByID = async (id:any) => {
    try {
        const {data} = await axios.get(`dishes/${id}`, {
            params: {
                typeId: id
            }
        })
        return data
    } catch (error) {
        console.log(error)
    }
}
export const createDish = async (type:any) => {
    try {
        const {data} = await axios.post(`api/products`, type)
        return data
    } catch (error) {
        console.log(error, '123123123')
    }
}
////
export const getPopularProducts = async () => {
    try {
        const {data} = await axios.get('products', {
            params: {
                popularSign: true
            }
        })
        console.log(data, 'server')
        return data
    } catch (error) {
        console.log(error)
    }
}
