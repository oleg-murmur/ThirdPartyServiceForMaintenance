import axios from "axios";

const FIRST_API_URL = 'http://localhost:5000/api/'


axios.defaults.baseURL = FIRST_API_URL

export const getProducts = async () => {
    try {
        const {data} = await axios.get('products/allProducts', {
            params: {
                //typeId: id
            }
        })
        // console.log(data, 'API data from server')
        return data
    } catch (error) {
        console.log(error)
    }
}
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

export const getOneProduct = async (id:any) => {
    try {
        const {data} = await axios.get(`products/${id}`)
        return data
    } catch (error) {
        console.log(error)
    }
}
export const createProduct = async (type:any) => {
    try {
        const {data} = await axios.post(`api/products`, type)
        return data
    } catch (error) {
        console.log(error, '123123123')
    }
}