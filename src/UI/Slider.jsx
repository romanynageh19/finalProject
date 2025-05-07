import React from 'react';
import Slider from 'react-slick';
import { Box, Typography } from '@mui/material';

import HomeImage from "../assets/images/HomeImage.jpg"
import HomeImage2 from "../assets/images/istockphoto-1409298953-612x612.jpg"
import HomeImage3  from "../assets/images/mianImage.jpg"

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const images = [
    HomeImage2,
    HomeImage,
    HomeImage3,
];

export default function ImageCarousel() {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        autoplay:true,
    };    

    return (
        <Box sx={{ height:"50vh", minHeight:"350px", position:"relative", overflow: 'hidden' }}>
            <Box
                sx={{
                    backgroundColor: 'rgba(0, 0, 0, 0.5)',
                    position: 'absolute',
                    height: '100%',
                    width: '100%',
                    zIndex: 1,
                }}
                />
            <Slider {...settings}>
                {images.map((src, index) => (<Box key={index} component="img" src={src} alt={`slide-${index}`} 
                    sx={{ width: '100%', height:"100%", minHeight:"300px", objectFit:"cover" }} />
                ))}
            </Slider>
            <Typography         
                variant="h2"
                sx={{
                    position: 'absolute',
                    top: '42%',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    fontFamily: 'Open Sans',
                    fontWeight: 700,
                    fontSize: { xs: '32px', sm: '48px', md: '64px' },
                    lineHeight: 1,
                    color: 'white',
                    zIndex: 2,
                    whiteSpace: 'nowrap',
                }} >
                    Find Your Dream Home
            </Typography>
        </Box>
    );
}