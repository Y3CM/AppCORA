import { useEffect, useState } from 'react'
import { Routes, Route } from "react-router-dom"
import './App.css'
import { MyContext } from './context/myContex.js'
import Productos from './componets/Productos.jsx'
import Registro  from './componets/Registro.jsx'
import Loging from './componets/Login.jsx'
import MenuPrincipal from './componets/MenuPrincipal.jsx'
import Home from './componets/Home.jsx'
import { useApiUsuarios } from './hooks/useApiUsuarios.js'
import { Button, Box } from '@mui/material/';
// import CardUser from './componets/CardUser'
function App() {

  const [user, setUser] = useState(null)


  useEffect(() => {
    console.log(" user  " + JSON.stringify(user))

    let us = JSON.parse(localStorage.getItem("userLogeado"));
    if (us != null) { // si compras vacias es la primera compra .....
      setUser(us);
    } 

  }, [user])

  return (
    <MyContext.Provider value={{ user, setUser }}>
      <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>


        {user ? (<Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
          <MenuPrincipal />
          
          <Routes>
          <Route path="/" element={ <Home /> } />
            <Route path="/productos" element={<Productos />} />
            <Route path="/registro" element={<Registro />} />
          </Routes>

        </Box>) : (
          <Loging />
        )}
      </Box>
    </MyContext.Provider>
  )
}

export default App
