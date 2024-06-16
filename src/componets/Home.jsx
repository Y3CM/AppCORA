// import PicUser from './common/PicUser'
// import DataUser from './common/DataUser'
import {Paper, Typography, Box} from '@mui/material/';

export default function Home () {
    return ( 
        <Box sx={{ width: "100%" }}>
    <Paper elevation={3} sx={{ width: {xs:  '70%', sm: '600px'}, display: 'flex', flexDirection: {xs:  'column', sm: 'row'}, alignItems: 'center', padding: '2rem'}}>
    <Typography> Bienvenido </Typography>
     </Paper>
    </Box>
    )

}
