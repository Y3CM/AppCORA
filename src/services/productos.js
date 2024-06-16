import axios from "axios";

const END_POINT = "http://localhost/CORA/api/get-all-products.php"

export const getProductos  = async () => {

    try {
        const response = await axios.get(END_POINT)
       //console.log (" response servicio   " + JSON.stringify(response))
        return (response)
    } catch (error) {
        return ("error leyendo ApiRest " + error)
    }
}