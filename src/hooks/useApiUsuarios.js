import { useEffect, useState } from "react";
import { apiGetUsuarios} from '../services/apiUsuario.js'

export function useApiUsuarios () {

    const [usuario , setUsuario ] = useState( {})

    useEffect(() => {

        apiGetUsuarios().then ((response) => {
            let datos = response.results[0]

            let objeto = {
                 "foto": datos.picture.large,
                "datos": [
                    {
                        "key": "1",
                        "etiqueta": "id",
                        "valor": datos.location.postcode
                    },
                    {
                        "key": "2",
                        "etiqueta": "nombre",
                        "valor": datos.name.first + " " + datos.name.last
                    },
                    {
                        "key": "3",
                        "etiqueta": "mail",
                        "valor": datos.email
                    },
                    {
                        "key": "4",
                        "etiqueta": "telefono",
                        "valor": datos.phone
                    },
                    {
                        "key": "5",
                        "etiqueta": "ciudad",
                        "valor": datos.location.city + " " + datos.location.country
                    }
                ]
            }




            setUsuario(objeto)
        })
        .catch ((error) => {
            console.log ("Error Hook Usuario " + error)
        })

    }, [])


  return (usuario)
 
}