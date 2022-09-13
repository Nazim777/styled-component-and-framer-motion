import React from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'
const Box7 = () => {
const AppContainer = styled(motion.div)`
width:100%;
background:orangered;
display:flex;
justify-content: center;
align-items:center;
flex-direction:column;
`
const Hello = styled(motion.div)`
height:30rem;
width:40rem;
background:${props=>props.background};
margin:1rem;
text-align:center;
font-size:2rem;

`
const Container = {
    hidden:{
        // opacity:0,
        x:'-100vw'
        
    },
    show:{
        // opacity:1,
        x:0,
        transition: {
            staggerChildren:1
          }
    }
}

const ChildContainer = {
    hidden:{
        opacity:0,
        
    },
    show:{
        opacity:1,
       
    }

}



  return (
    <div >
        <AppContainer
        variants={Container}
        initial='hidden'
        animate='show'
        >
        <Hello background='green' variants={ChildContainer}>
            <div>hello this is a child div</div>
            <div>hello this is a child div2</div>
        </Hello>
        <Hello background='cyan' variants={ChildContainer}>
       Box1
            
        </Hello>
        <Hello background='orange' variants={ChildContainer}>
        Box1
        </Hello>
        <Hello background='green' variants={ChildContainer}>
        Box1
        </Hello>
        <Hello background='cyan' variants={ChildContainer}>
        Box1
        </Hello>
        <Hello background='orange' variants={ChildContainer}>
        Box1
        </Hello>
        </AppContainer>
      
    </div>
  )
}

export default Box7
