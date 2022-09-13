import { motion,useAnimation } from 'framer-motion'
import { Button } from '../Button.Style'



const Box6 = () => {
    const control =useAnimation()
  return (
    <div className='box-container'>
        <Button primary onClick={()=>{
            control.start({
                x:1000,
                transition:{duration:2}
            })

        }}>Move Right</Button>
        <Button onClick={()=>{
            control.start({
                x:0,
                transition:{duration:2}
            })

        }}>Move Left</Button>
        <Button onClick={()=>{
            control.start({
                borderRadius:'50%',
                transition:{duration:1}
            })

        }}>Circle</Button>
        <Button onClick={()=>{
            control.start({
                borderRadius:0,
                transition:{duration:1}
            })

        }}>Squeare</Button>
        <Button onClick={()=>{
            control.stop()

        }}>Stop</Button>
        <motion.div 
        className='box'
        animate={control}
        
        >

        </motion.div>
      
    </div>
  )
}

export default Box6
