import axios from "axios";

const END_POINT_GET = "http://localhost/CORA/api/get-all-user.php"

export const apiGetUsuarios = async () => {

    try {
        const response = await axios.get(END_POINT_GET)
        return (response.data)
    } catch (error) {
        return ("error leyendo ApiRest " + error)
    }
}


const END_POINT_SET = "http://localhost/CORA/api/create-user.php"

export const setUser   =async(objeto) => {

    try {
        const response = await axios.post(END_POINT_SET, objeto)
        return (response.data)
    } catch (error) {
        return ("error leyendo ApiRest " + error)
    }
}