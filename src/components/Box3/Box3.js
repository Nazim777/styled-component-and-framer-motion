import { motion } from 'framer-motion'

const Box3 = () => {

    const boxVariants = {
        hidden:{
            x:'-100vw'
        },
        visible:{
            x:0,
            transition:{
                staggerChildren: 0.5
            }
        }
    }

    const listVariants = {
        hidden:{
            opacity:0
        },
        visible:{
            opacity:1
        }

    }
   
  return (
    <div className='box-container'>
        <motion.div 
        className='box'
        variants={boxVariants}
        initial='hidden'
        animate='visible'
        
        >
            {[1,2,3].map((box)=>{
                return(
                    <motion.li
                     className='boxitem'
                     variants={listVariants}
                     
                     

                     ></motion.li>

                ) 
            })}

        </motion.div>
      
    </div>
  )
}

export default Box3
