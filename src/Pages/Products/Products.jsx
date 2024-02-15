import { useState, useEffect } from 'react'
import NavbarWithMegaMenu from '../../Components/Slidebar/NavbarWithMegaMenu';
import TextField from '@mui/material/TextField';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography'
import AOS from 'aos';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

const Products = () => {
    AOS.init()

    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true); // Initially set loading to true
    // const [filter,setFilter]

    useEffect(() => {
        // Simulate a delay before fetching data
        const delay = setTimeout(() => {
            fetch('https://fakestoreapi.com/products')
                .then(res => res.json())
                .then(json => {
                    
                    setProducts(json);
                    setLoading(false); 
                })
                .catch(error => {
                    console.error('Error fetching data:', error);
                    setLoading(false); 
                });
        }, 8000); 

        
        return () => clearTimeout(delay);
    }, []);
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setProgress((prevProgress) => (prevProgress >= 100 ? 0 : prevProgress + 10));
        }, 800);

        return () => {
            clearInterval(timer);
        };
    }, []);


    return (
        <>
            <NavbarWithMegaMenu />
            <div data-aos="fade-right"
                data-aos-offset="100"
                data-aos-delay="80"
                data-aos-duration="2000">

                <div className='bg-yellow-500 py-[2rem]'>
                    <div className='flex justify-center '>
                        <TextField
                            label="Search Your Item"
                            id="filled-size-small"
                            className='lg:w-[50rem] md:w-[30rem] w-[20rem]'
                            variant="standard"
                            size="small"
                            color="warning"
                        />
                    </div>
                </div>
                <div className='flex flex-col lg:w-[50rem] lg:mx-auto w-auto mx-2'>
                    <div className='mt-[2rem]  flex flex-col gap-y-[0.2rem] text-start'
                    >
                        <h1 className='text-orange-800 underline hover:decoration-4 cursor-pointer'>Products</h1>
                        <ul className='list-none flex lg:gap-x-[1rem] filter-products'>
                            <li className='text-orange-600 p-2 hover:underline cursor-pointer'>Man's Wear</li>
                            <li className='text-orange-600 p-2 hover:underline cursor-pointer'>Women's Wear</li>
                            <li className='text-orange-600 p-2 hover:underline cursor-pointer'>Watches</li>
                            <li className='text-orange-600 p-2 hover:underline cursor-pointer'>Jewelery</li>
                        </ul>
                    </div>
                    <div>
                        {loading ? (
                            <Box sx={{ display: 'flex', justifyContent: "center", alignItems: 'center', height: '100vh' }}>
                                <CircularProgress variant="determinate" value={progress}/>
                            </Box>
                        ) : (
                            <div className='lg:w-[50rem] text-start lg:my-[2rem] lg:mx-auto md:mx-auto gap-y-[2rem] md:gap-[2rem] justify-center mt-[2rem] grid lg:grid-cols-3 md:grid-cols-2 lg:gap-y-[2rem] lg:gap-x-[1rem]'>
                                {products.map(product => (
                                    <Card key={product.id} sx={{ maxWidth: 345 }}>
                                        <CardMedia
                                            sx={{ height: 140 }}
                                            image={product.image}
                                        />
                                        <CardContent>
                                            <Typography gutterBottom variant="h5" component="div">
                                                {product.title}
                                            </Typography>
                                            <Typography variant="body2" color="text.secondary">
                                                {product.description}
                                            </Typography>
                                        </CardContent>
                                        <CardActions>
                                            <Button size="small">Add To Cart</Button>
                                            <Button size="small">Remove</Button>
                                        </CardActions>
                                    </Card>
                                ))}
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Products