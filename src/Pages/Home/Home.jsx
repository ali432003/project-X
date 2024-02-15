import React from 'react';
import NavbarWithMegaMenu from '../../Components/Slidebar/NavbarWithMegaMenu';
import front from "/assets/front.jpg"
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useNavigate } from "react-router-dom";


export default function Home() {
    const navigate = useNavigate();
    AOS.init();
    return (
        <div className='grid'>
            <div className='relative'>
                <NavbarWithMegaMenu />
                <div className='relative'>
                    <img className='lg:h-screen w-auto mx-auto h-screen' src={front} alt="" />
                    <div data-aos="fade-right"
                        data-aos-offset="100"
                        data-aos-delay="80"
                        data-aos-duration="3000"
                        className='absolute  text-orange-600 md:left-[2rem] lg:left-[3rem] flex flex-col gap-y-[1rem] p-[3rem] lg:top-1/2 transform top-1/3 lg:-translate-y-1/2 bg-yellow-300 p-4 rounded'>
                        <h1 className='lg:text-4xl text-xl text-start font-bold'>Discover your style <i className='text-orange-800'>Find your spark</i></h1>
                        <p className='lg:text-xl text-sm text-start'>Upgrade your everyday with the latest trends.</p>
                        <p className='lg:text-xl text-sm text-start'>Life's too short for boring style. <button onClick={() => navigate("/Products")} className='border mt-2 lg:mt-0 bg-orange-600 text-white rounded-md px-[0.5rem] p-[0.2rem]  hover:bg-orange-800 transition duration-700 ease-in-out'>Let's accessorize!</button></p>
                    </div>
                </div>
            </div>
        </div>
    );
}
