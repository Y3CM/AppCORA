import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

export default function  PicProducto ({pic, valor }) {


    return (
        <Box sx={{ width: '100%', position: 'relative' }} >
         <img style= {{ width: '100%' }} src={pic} />
         <Typography fontSize={15} textAlign={'center'} fontWeight={600}
         sx= {{ backgroundColor: "#ffffff" , width: {xs: '25%' , md: '50%'}, padding: '0.25rem', borderRadius: '025rem' , position: 'absolute', top: '0.25rem', right: '0.5rem', zIndex: '1'}}
         > {valor}  </Typography>
        </Box>
    )



 }