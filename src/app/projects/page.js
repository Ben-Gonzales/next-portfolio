'use client';
import React from "react";
import Image from 'next/image';
import pic1 from '../assets/calculator.png';
import pic2 from '../assets/ipaddress_calculator.png';
import pic3 from '../assets/weather_forecast.png';
import styles from './page.module.css'
import { styled } from 'styled-components';
import Link from "next/link";

/*styled components */
const Container = styled.section `
display: flex;
justify-content: space-around;
`;

const ContentContainer = styled.div `
margin: 0;
padding: 0;
position: relative;
z-index: 1;
`;

const ContentContainer2 = styled.div `
margin: 0;
padding: 0;
display: flex;
flex-direction: column;
align-items: center;
`;

const Card = styled.section `
display: flex;
flex-direction: column;
justify-content: space-around;
border: 3px solid gray;
border-radius: 0.5rem;
padding: 1rem;
margin: 0.8rem 0;
`;

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

const Projects = () => {
    
    return (
        <main className={styles.main}>
            <Homemenu>
            <Title>
                BG Tech
            </Title>
            <Menubar>
                <Itemnav className={styles.menu}>
                    <Link href='../'><li className={styles.menuitems}>Home</li></Link>
                    <Link href='../about_me'><li className={styles.menuitems}>About Me</li></Link>
                    <Link href='./'><li className={styles.menuitems}>Projects</li></Link>
                </Itemnav>
            </Menubar>
            </Homemenu>

            <ContentContainer>
                <Container className={styles.projectbox}>
                    <h2 className={styles.title}>My Portfolio</h2>
                    <p className={styles.context}>Here are the three examples of the websites I have created learning web Development</p>
                </Container>
                <br />
                <ContentContainer2>
                    <Link href='../projects/calculator'>
                        <Card className={styles.card}>
                            <h3 className={styles.calculator}>Basic Calculator</h3>
                            <Image src={pic1} width={250} height={300} />
                        </Card>
                    </Link>
                    <Link href='../projects/ipaddress_calculator'>
                        <Card className={styles.card}>
                            <h3 className={styles.calculator}>IP Address Calculator</h3>
                            <Image src={pic2} width={500} height={250} />
                        </Card>
                    </Link>
                    <Link href='../projects/weather_forecast'>
                        <Card className={styles.card}>
                            <h3 className={styles.calculator}>Weather Forecast website/Application</h3>
                            <Image src={pic3} width={500} height={250} />
                        </Card>
                    </Link>
                </ContentContainer2>
            </ContentContainer>
        </main>
    );
};

export default Projects;