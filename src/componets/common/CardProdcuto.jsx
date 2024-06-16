import { useEffect, useState } from "react";
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

import PicProducto from './PicProducto';
import Cantidad from './Cantidad';
import Button from '@mui/material/Button';
export default function CardProducto({
  id,
  nombre,
  descripcion,
  precio,
  foto,
  compras
}) {

  const [cantidadProductos , SetCantidadProductos] = useState (0)

  const handleComprar = () => {

  let objeto = {
    id: id,
    nombre: nombre,
    descripcion: descripcion,
    precio: precio,
    foto: foto,
    cantidad: cantidadProductos

  }
  compras (objeto)
   
  }


  const handleCantidad = (valor) => {
    console.log (" Cantidad de productos  " + valor )
    SetCantidadProductos(valor)

   }



  return (
    <Paper elevation={3} sx={{ width: '400px' , margin: '1rem' }}>
      <Typography fontSize={20} textAlign={'center'} fontWeight={600}>
        {nombre}
      </Typography>

      <Box sx={{display: 'flex', width: '100%' , flexDirection: {xs: 'column' , md: 'row'}}}>

      <Box sx={{ width: {xs: '90%' , md: '50%'} , padding: '1rem'}}>
        <PicProducto pic={foto} valor={precio} />
        </Box>

      <Box sx={{ width:  {xs: '90%' , md: '50%'}, padding: '1rem'}}>
        <Typography fontSize={11} textAlign={'justify'}>
          {descripcion}
        </Typography>

     <Box >
        <Cantidad
         getCantidad  = {handleCantidad}
        />

<Button disabled = {cantidadProductos > 0 ? false : true }
 sx={{ width: '90%' }} variant="contained" endIcon={<AddShoppingCartIcon />}
 onClick={handleComprar}

 >
        Comprar
      </Button>

     </Box>


        </Box>

      </Box>
    </Paper>
  );
}
