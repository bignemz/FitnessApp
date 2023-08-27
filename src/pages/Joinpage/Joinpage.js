import React,{ useEffect } from 'react'
import Join from '../../components/JoinUs/Join'
import Contact from '../../components/ContactUs/Contact'
import "./joinpage.scss"
import {motion, useAnimation} from 'framer-motion'
import { useInView } from 'react-intersection-observer'


function Joinpage() {

  const boxVariant={
    visible:{ opacity:1, scale:1,transition:{duration: 0.5} },
    hidden:{ opacity:1, scale:0 }
  }

  const control= useAnimation()
 const[ref,inView]=useInView()

 useEffect(()=>{

  if (inView) {
    control.start("visible")
  }
  else{
    control.start("hidden")
  }
 },[control,inView])
  return (
    <motion.div 
    ref={ref}
    variants={boxVariant}
    animate={control}
    
    className='Join-section'>
        <div> 
           
        <Join/> 
        </div>
        <div>
        <Contact/> 
        </div>

    </motion.div>
  )
}

export default Joinpage
