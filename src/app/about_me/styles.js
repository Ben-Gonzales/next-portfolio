import { styled } from 'styled-components';

// TODO: put all styles/ styled components here
/*styled components */
const Container = styled.section `
display: flex;
justify-content: space-around;
`;

const ContentContainer = styled.div `
margin: 0;
padding: 0;
position: relative;
`;

const Card = styled.section `
display: flex;
flex-direction: column;
justify-content: space-around;
border: 3px solid gray;
border-radius: 0.5rem;
padding: 2rem;
margin: 0.8rem 0;
`;

const Homemenu = styled.section `
position: fixed;
bottom: 41rem;

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

export {Itemnav, Menubar, Title, Homemenu, Card, ContentContainer, Container};