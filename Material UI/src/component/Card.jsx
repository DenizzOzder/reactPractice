import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function MediaCard() {
    return (

        <div>
            <p style={{textAlign:'center'}}>Card Componenti</p>
        <Card>
            <CardMedia
                sx={{height: 140}}
                image='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7j1SD-uf8jMUUw4p5FtZPNIPXqd5olW5ydytwc2cWaXmH3eVK939Z-tVXPgy_bhK5QaL76qYCZ-SM_e1ieAd54gUhMVdnd46rWmJjVAcE&s=10'
            /> 
             <CardContent>
                <Typography variant='h5' component='div'>Lizard</Typography>
                <Typography>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores assumenda numquam temporibus qui sit accusantium eos possimus obcaecati nisi perferendis.</Typography>      
            </CardContent> 
            <CardActions>
                <Button>Share</Button>
                <Button>Learn More</Button>
            </CardActions>  
        </Card>
        </div>
    );
}