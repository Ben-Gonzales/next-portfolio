import { styled } from 'styled-components';

// TODO: put all styles/ styled components here
// TODO: apply dry principle
// TODO: files inside assets must be move in public folder

/*styled components */
const Container = styled.section `
display: flex;
justify-content: space-around;
`;

const ContentContainer = styled.div `
margin: 0;
padding: 0;
`;

const Homemenu = styled.section `
fixed: top;
width: 100rem;
margin-bottom: 2rem;
border-bottom: 1px solid grey;
display: flex;
align-items: center;
`;

const Title = styled.h1 `
position: relative;
left: 5rem;
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

export {Container, ContentContainer, Homemenu, Title, Menubar, Itemnav};