import React from 'react'
import { motion } from 'framer-motion'

const Box4 = () => {
    const container = {
        hidden: { opacity: 0 },
        show: {
          opacity: 1,
          transition: {
            staggerChildren: 0.5
          }
        }
      }
      
      const item = {
        hidden: { opacity: 0 },
        show: { opacity: 1 }
      }
      
      
  return (
   <div className='box-container'>
     <motion.div
    className='box'
    variants={container}
    initial="hidden"
    animate="show"
  >

    {[1,2,3].map((box)=>{
        return <motion.li className='boxitem' variants={item}></motion.li>
    })}


  </motion.div>
    

   </div>
  )
}

export default Box4
