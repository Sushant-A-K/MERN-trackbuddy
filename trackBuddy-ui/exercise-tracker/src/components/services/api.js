import axios from 'axios';
const baseUrl = 'http://localhost:5000'

export const addExercise = async(body) =>{
    let results = await axios.post(`${baseUrl}/exercises/add`,body)
    console.log(results?.data,"ress");
    return results?.data
 }

 export const getUsers = async() =>{
    let results = await axios.get(`${baseUrl}/users/`)
    return results?.data
 }

 export const addUsers = async(body) =>{
   let results = await axios.post(`${baseUrl}/users/add`,body)
    console.log(results?.data,"ress");
    return results?.data
}
