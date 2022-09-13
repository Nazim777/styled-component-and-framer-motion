import styled from "styled-components";


export const Button = styled.button`
background: ${props => props.primary ? "palevioletred" : "white"};
color: ${props => props.primary ? "white" : "palevioletred"};

font-size: 2rem;
margin: 1em;
padding: 0.5rem;
border: 2px solid palevioletred;
border-radius: 3px;

@media(max-width:768px){
    font-size:1.5rem;
}
`

export const Wrapper = styled.div`
display:flex;
justify-content:center;
align-items:center;

`


export const Card = styled.div`
width:20rem;
height:15rem;
margin:1rem;
background:${props=>props.background};
font-size:2rem;
`
export const Images = styled.div`
width:${props=>props.width};
height:${props=>props.height};
color:${props=>props.color};
background:${props=>props.primary?'green':'crimson'};
margin:0.5rem;
display:${props=>props.display?'flex':' '};
justify-content:${props=>props.display?'space-between':''};
font-size:2rem;

`


export const Input = styled.input`

background:${props=>props.background};
padding:1rem;
margin:2rem;
border:none;
font-size:1.5rem;
@media(max-width:768px){
    padding:0.8rem;
    margin:1rem;
   
}
`

export const Modal = styled.div`
width:25rem;
height:25rem;
background:green;
margin-Bottom:1rem;
display:${props=>props.display};
font-size:2rem;
text-align:center;

@media(max-width:768px){
    width:20rem;
    height:20rem;
    font-size:1.5rem;
}

`
