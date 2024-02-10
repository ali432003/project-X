import React from 'react'
import { NavbarWithMegaMenu } from '../../Components/Slidebar/NavbarWithMegaMenu'
import './Home.css';
import Products from '../Products/Products';

export default function Home() {
    return (


        <div className='grid'>
            <div>
                <NavbarWithMegaMenu />
                <div>
                    <img className='lg:h-screen' src="/src/assets/front.jpg" alt="" />
                    <Products />
                </div>

            </div>
        </div>

    )
}
