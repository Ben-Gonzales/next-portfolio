import { styled } from 'styled-components';

/*styled components */
const Homemenu = styled.section `
position: fixed;
bottom: 41rem;
z-index: 5;
margin-bottom: 2rem;
padding-right: 57rem;
border-bottom: 1px solid grey;
display: flex;
align-items: center;
`;

const Title = styled.h1 `
position: relative;
font-size: 1.5rem;
color: white;
`;

const Menubar = styled.nav `
list-style-type: none;
margin: 0.5rem;
color: white;
`;

const Itemnav = styled.ul `
display: flex;
align-items: center;
`;

export {
    Homemenu, Title, Menubar, Itemnav
}