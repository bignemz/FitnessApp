import React,{ useEffect } from 'react'
import "./About.scss"
import {motion, useAnimation} from 'framer-motion'
import { useInView } from 'react-intersection-observer'




function About() {

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
    <div className='About-section'>
       <h1>About Us </h1>
       <motion.div
       ref={ref}
       variants={boxVariant}
       animate={control}
       initial="hidden"
       
       >
       <div className='About'> 
        <div className='About-img'> <img src="./assest/gym1.jpg" alt=""/></div>
      <div className='About-text'>
      <div className='About-text-child'>
            <h2>Meet our head coach <span>Emily</span></h2>
            <p>Hello and a hearty welcome to all health enthusiasts and seekers of vitality! I'm immensely delighted to virtually meet you through this platform, as we embark on a journey of holistic wellness and personal transformation.




            </p>
        </div>
      </div>

       </div>
       </motion.div>

    
      
    
    </div>
  )
}

export default About
