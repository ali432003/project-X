import { data } from 'autoprefixer';
import React from 'react'
import { useState,useEffect } from 'react'

const Products = () => {
    const [data,setData] = useState("") 

    useEffect(() => {
        async function getUser() {
            try {
              const response = await axios.get('https://fakestoreapi.com/products');
              console.log(response);
            } catch (error) {
              console.error(error);
            }
          }
    }, []);
    return (
        <div>
            <button  onClick={getUser} className='bg-red-700'>Click Me!</button>
        </div>
    )
}
export default Products