import React from 'react'
import Join from '../../components/JoinUs/Join'
import Contact from '../../components/ContactUs/Contact'
import "./joinpage.scss"
import { Outlet} from 'react-router-dom';

function Joinpage() {
  return (
    <div className='Join-section'>
        <div> 
           <Outlet/>
        </div>
        <div>
          <Join/>  
        </div>

    </div>
  )
}

export default Joinpage
