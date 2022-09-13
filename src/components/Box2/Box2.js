import { motion } from 'framer-motion'

const Box2 = () => {
  return (
    <div className='box-container'>
        <motion.div 
        className='box' 
        drag
        dragConstraints={{
            left:-20,
            right:20,
            top:10,
            bottom:10
        }}
        whileHover={{
            scale:1.1
        }}
        whileTap={{
            scale:0.8
        }}
        
        >
        </motion.div>
      
    </div>
  )
}

export default Box2
