import { Button,Card,Wrapper,Images,Input } from "../Button.Style";

import React from 'react'

const Home = () => {
  return (
    <div>
        <Wrapper>
        <Button primary>submit</Button>
        <Button>submit2</Button>
        <Card background='grey'>
            hello this is a card
        </Card>
        <Card background='orangered'>hello this is a card</Card>
        </Wrapper>
        <Images width='40rem' height='30rem' color="white">hello this is a image div</Images>
        <Images width='20rem' height='15rem' color="white" primary display>

            <h6>hello this is a h6 tag</h6>
            <p>hello this is a p tag</p>
            
        </Images>
        <Input background='orange' placeholder="enter your name"/>
        <Input background='green' placeholder="enter your email"/>
        
        
      
    </div>
  )
}

export default Home
