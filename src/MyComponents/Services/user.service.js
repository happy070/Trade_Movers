import { publicAxios } from "./axios.service"

export const registerUser = (userData) =>{
 return publicAxios.post('',userData).then((Response)=>Response.data);
}