import { useEffect, useState } from "react";
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

export default function Cantidad({getCantidad}) {

    const [cantidad , SetCantidad] = useState (0)


    const handleSumar = () => {
        SetCantidad (cantidad + 1)
        getCantidad(cantidad + 1)

    }
   const handleRestar = () => {

    let aux = cantidad
        aux = aux - 1

        if (aux <=  0) {
            aux = 0
        }

        SetCantidad (aux)
        getCantidad (aux)

        


   }

  return (
    <Box sx={{ display: 'flex', width: '100%' , justifyContent: 'space-between' , alignItems: 'center', margin: '0.25rem'}}>
      <Button sx= {{ width: '60px' , height: '25px'}} variant="contained" color="success" onClick={handleSumar}>
        +
      </Button>

      <Typography fontSize={15} textAlign={'justify'} fontWeight={600}>
        {cantidad}
      </Typography>

      <Button sx= {{ width: '60px' , height: '25px'}}  variant="contained" color="error"  onClick={handleRestar}>
        -
      </Button>
    </Box>
  );
}
