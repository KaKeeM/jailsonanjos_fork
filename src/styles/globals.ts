import { createGlobalStyle } from 'styled-components';
import background from '../assets/image.jpg';

export const GlobalStyle = createGlobalStyle`

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
 }

 html {
   scroll-behavior: smooth;
 }

 body{
    color: ${(props) => props.theme['gray-300']};
    -webkit-font-smoothing: antialiased;
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    font-size: 1rem;

 }

 span, h2, nav{
    font-family: 'Cinzel', serif;
 }

`
