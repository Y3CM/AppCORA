import { useEffect, useState } from "react";
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

import PicProducto from './PicProducto';
import Cantidad from './Cantidad';
import Button from '@mui/material/Button';
export default function CardCarrito({
  id,
  nombre,
  descripcion,
  precio,
  foto,
  cantidad,
  getIdBorrar
}) {

 const handleBorrar = () => {
 
      getIdBorrar(id);
 }



  return (
    <Paper elevation={3} sx={{ width: '95%' , margin: '1rem', display: 'flex', justifyContent: 'space-around', alignItems: 'center' }}>
      
      <Button sx={{  width: '100px', height: '40px' }}  variant='contained' color= 'error' onClick={()=> handleBorrar()}> Eliminar </Button>


      <Typography sx={{  width: '30%'}} fontSize={18} textAlign={'center'} fontWeight={600}>
        {nombre}
      </Typography>

      
      <Box sx={{  padding: '1rem'}}>
        <img style={{width:'100px'}} src={foto}  />
        </Box>

        <Typography fontSize={18} textAlign={'center'} fontWeight={600}>
        {cantidad}
      </Typography>

      <Typography fontSize={18} textAlign={'center'} fontWeight={600}>
        {precio}
      </Typography>


      <Typography fontSize={18} textAlign={'center'} fontWeight={600}>
        {precio * cantidad} 
      </Typography>


  
    </Paper>
  );
}
