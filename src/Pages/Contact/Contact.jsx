import React from 'react'
import NavbarWithMegaMenu from '../../Components/Slidebar/NavbarWithMegaMenu';
import AOS from 'aos';


const  Contact = () => {
  AOS.init()
  return (
    <>
      <NavbarWithMegaMenu />
      <div data-aos="fade-right"
        data-aos-offset="100"
        data-aos-delay="80"
        data-aos-duration="2000">
           Contact
      </div>
    </>
  )
}

export default  Contact