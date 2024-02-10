import axios from "axios";

const FIRST_API_URL = 'http://localhost:5000/api/'


axios.defaults.baseURL = FIRST_API_URL

export const getAllTeams = async () => {
    try {
        const {data} = await axios.get('cookingteam/allTeams', {
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
export const getOneTeamByID = async (id:any) => {
    try {

    } catch (error) {
        console.log(error)
    }
}
export const createTeam = async (type:any) => {
    try {

    } catch (error) {
        console.log(error)
    }
}
////
export const getPopularProducts = async () => {
    try {

    } catch (error) {
        console.log(error)
    }
}
