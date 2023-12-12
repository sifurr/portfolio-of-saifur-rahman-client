import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import edugram from '../assets/edugram.png'
import sharingFood from '../assets/sharing-surplus-food.png'
import brandShop from '../assets/brand-shop.png'

const Projects = () => {
    return (
        <div>
            <div className="text-center mb-5">
                <h1 className="text-lg lg:text-2xl uppercase"><span className='text-4xl font-bold'>|</span> <span className='px-3 font-bold'>02 : Projects</span> <span className='text-4xl font-bold'>|</span></h1>
            </div>
            <p className='mb-8 text-xs lg:text-lg lg:mb-16 w-full lg:w-2/3 mx-auto'>
                Welcome to my projects showcase! Dive into a curated collection that highlights my skills and expertise in web development. Let's explore the digital realm together!
            </p>
            <div className='mx-0 lg:mx-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 lg:gap-6'>
                <Card sx={{ maxWidth: 345 }}>
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            height="140"
                            image={edugram}
                            alt="project - edugram "
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                            Edugram
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                            Edugram is a fullstack web application on learning management system (LMS). It seamlessly integrates frontend and backend technologies, featuring secure payment processing through Stripe.
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                    <CardActions>
                        <Button size="small" color="primary">
                            <a href="https://splendorous-kheer-a4858e.netlify.app" rel="noreferrer" target='_blank' >More</a>
                        </Button>
                    </CardActions>
                </Card>
                <Card sx={{ maxWidth: 345 }}>
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            height="140"
                            image={sharingFood}
                            alt="project - Sharing Food "
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                            Sharing Surplus Food
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                            Sharing Surplus Food is a community-driven platform addressing food surplus and scarcity. Users can contribute and request surplus food securely. 
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                    <CardActions>
                        <Button size="small" color="primary">
                            <a href="https://lucent-dieffenbachia-e50d23.netlify.app" rel="noreferrer" target='_blank' >More</a>
                        </Button>
                    </CardActions>
                </Card>
                <Card sx={{ maxWidth: 345 }}>
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            height="140"
                            image={brandShop}
                            alt="project - Brand Shop "
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                            Brand Shop
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                            Brand Shop offers a seamless shopping experience with Firebase-powered authentication for secure interactions. Features include social login, user-friendly interfaces, dynamic image sliders, and MongoDB for efficient data storage.
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                    <CardActions>
                        <Button size="small" color="primary">
                            <a href="https://brandshop-assignment-10-62b49.web.app" rel="noreferrer" target='_blank' >More</a>
                        </Button>
                    </CardActions>
                </Card>
                

            </div>
        </div>
    );
}

export default Projects;