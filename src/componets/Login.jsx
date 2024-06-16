import React from 'react';
import {useEffect , useState} from 'react'
import {TextField , Button, Box} from '@mui/material/';

import {getLogin} from '../services/apiLogin.js'

import { useContext } from 'react';
import { MyContext } from "../context/myContex.js";


export default function Loging() {

        const { user, setUser } = useContext(MyContext)

        const [userName, setUserName] = useState(null)
        const [userPass, setUserPass] = useState(null)

     useEffect(() => { 
       
     }, [userName, userPass])

  
     const handleSubit = (e) => {
        e.preventDefault()
        console.log (` usuario ${userName}  clave ${userPass}`)

        let objeto = JSON.stringify({
            "email": userName,
            "contraseña": userPass
            })
           
            console.log (" objeto    " + JSON.stringify(objeto))

          getLogin(objeto).then ((response) => {
           //console.log (" response    " + JSON.stringify(response))

           if (response.status) {
            console.log (" usuario logueado  " )
               setUser(response.alldata[0])
               let us = JSON.stringify(response.alldata[0]);
               localStorage.setItem("userLogeado", us);


           } else {
            console.log (" usuario NO logueado  " )
            localStorage.removeItem("userLogeado")
            setUser(null)
        }
             
         })
         .catch ((error) => {
             console.log ("Error leer usuarios  " + error)
         })

     }

    return (
        <form className="form" onSubmit={handleSubit}>
        <Box sx={{ display: 'flex', flexDirection: 'column', padding: '2rem', border: "1px solid #ccc", borderRadius: "10px" }}>
     
            <TextField sx={{ margin: '1rem' }}
                id="outlined-disabled"
                label="Usuario"
                onChange={(e) => setUserName(e.target.value)}

            />
            <TextField sx={{ margin: '1rem' }}
                id="outlined-password-input"
                label="Contreseña"
                type="password"
                autoComplete="current-password"
                onChange={(e) => setUserPass(e.target.value)}
            />

            <Button sx={{ margin: '1rem' }} variant="contained" onClick={handleSubit} >Logiin </Button>
           
        </Box>
        </form> 


    )
}   