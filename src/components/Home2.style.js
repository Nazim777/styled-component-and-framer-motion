import styled from "styled-components";

export const AppContainer = styled.div`
display:flex;
justify-content:center;
flex-wrap:wrap;
`

export const ChildContainer = styled.div`
width:20rem;
height:20rem;
background:${props=>props.background?props.background:'orange'};
margin:0.5rem;

`