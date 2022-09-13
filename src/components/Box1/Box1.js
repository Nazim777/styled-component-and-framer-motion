import React,{useState} from 'react'
import { motion } from 'framer-motion'

const Box1 = () => {

    const [animate,setAnimate] = useState(false)
  return (
    <div className='box-container'>
        <motion.div 
        className='box'
        animate={{
            x:animate? 1000:0,
            opacity: animate?1:0.5,
            rotate:animate?360:0
        }}
        initial={{
            opacity:0.5
        }}
        transition={{
            type:'spring',
            stiffness:60
        }}
        onClick={()=>setAnimate(!animate)}
        >

        </motion.div>
      
    </div>
  )
}

export default Box1
