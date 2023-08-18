import React from 'react'

import Footer from '../../components/Footer/Footer';
import { Outlet} from 'react-router-dom';
import Navbar from '../../components/Navbar/Navbar';

function Layoutpage() {
  return (
    <div>
   
       <Navbar/>
       <Outlet/>
       <Footer/>
      

    </div>
  )
}

export default Layoutpage
