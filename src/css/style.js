import styled from 'styled-components';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0px;
    background:white;
  }
`;
const Container = styled.div`
    width:100vw;
    height:100vh;
`; 
const Grid = styled.div`
    display:grid;
    grid-template-columns: 5% repeat(3,30%) 5%;
    grid-template-rows: 2.5vh repeat(8,11.9%) 2.5vh;
    width:100%;
    height:100%;
    background:white;
`;
const AreaBox = styled.div`
    display:flex;
    flex-direction:${p=> p.fd || "column"};
    grid-area:${p=> p.g[0]+"/"+p.g[1]+"/"+p.g[2]+"/"+p.g[3]};
    justify-content:center;
    align-items:center;
    border:0.5px solid black;
    padding:0px;
    overflow-wrap:normal;
    background:White;
`;
const ParamBox = styled.div`
    display:flex;
    flex-direction:${p=> p.fd || "row"};
    width:${p => p.w || '100%'};
    height:${p => p.h || '100%'};
    justify-content:center;
    align-items:center;
    overflow-wrap:normal;
    overflow:scroll;
`;
const Text = styled.div`
    margin:${p => p.m};
        
`;
const Button = styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
    margin:1vmin;
    padding:5vmin;
    width:50vw;
    border:0.5vmin solid DarkSlateGrey;    
`;
const Img = styled.img`
    width:auto;
    height:80%;
`;
const TextBox = styled(ParamBox)`
    display:flex;
    width:100%;
    height:${p => p.h || "66%"};
    justify-content:flex-start;
    align-items:flex-start;
    font-size:1rem;
    padding:7vmin;
    overflow:scroll;
`;

const link = {
  'color': 'black',
  'text-decoration': 'none'
};
const naked = {
  'border': '0px',
};

export {
    GlobalStyle,Container,Grid,AreaBox,ParamBox,TextBox,Text,Button,Img,link,naked
}
