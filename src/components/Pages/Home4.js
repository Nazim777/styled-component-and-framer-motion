import React,{useState} from 'react'
import { Modal,Button } from '../Button.Style'

const Home4 = () => {
    const [showModal,setShowModal] = useState(false)
  return (
    <div style={{display:'flex',flexDirection:'column', justifyContent:'center' ,alignItems:'center'}}>
        <Modal display={showModal?'block':'none'}>hello this is a modal</Modal>
        <div>
        <Button onClick={()=>setShowModal(!showModal)}>{showModal?'hide modal':'show modal'}</Button>
        </div>



    </div>
    
        
        
    
  )
}

export default Home4
