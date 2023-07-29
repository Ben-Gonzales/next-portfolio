'use client';
import React from "react";
import Image from 'next/image';
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

const AboutMe = () => {

    return (
        <main className={styles.main}>
            <Homemenu>
            <Title>
                BG Tech
            </Title>
            <Menubar>
                <Itemnav className={styles.menu}>
                    <Link href='../'><li className={styles.menuitems}>Home</li></Link>
                    <Link href='./'><li className={styles.menuitems}>About Me</li></Link>
                    <Link href='../projects'><li className={styles.menuitems}>Projects</li></Link>
                </Itemnav>
            </Menubar>
            </Homemenu>

            <ContentContainer>
                <Container className={styles.aboutbox}>
                    <h2 className={styles.title}>About Me</h2>
                    <p className={styles.paragraph}>Hi I am Benedict John Gonzales, I am 21 years old, <br />
                    a student of Bachelor of Science in Information Technology<br />
                    Major in Web Development. I am in my third year of college <br />
                    this coming school year in De La Salle University - Dasmariñas <br />
                    or DLSUD. I am aspiring to be a Full Stack Developer when I <br />
                    graduate in my course.</p>
                </Container>
            </ContentContainer>

            <ContentContainer className={styles.list}>
                <Container>
                    <Card>
                        <div className={styles.characteristics}>
                            <h3>Programming Languages I know</h3>
                            <ul>
                                <li>Java</li>
                                <li>Javascript</li>
                                <li>C#</li>
                                <li>C Language</li>
                            </ul>
                        </div>
                    </Card>
                    <Card>
                        <div className={styles.characteristics}>
                            <h3>Web Devloping Platforms I know</h3>
                            <ul>
                                <li>HTML</li>
                                <li>CSS</li>
                                <li>Next.js</li>
                            </ul>
                        </div>
                    </Card>
                    <Card>
                        <div className={styles.characteristics}>
                            <h3>Skills</h3>
                            <ul>
                                <li>Porblem Solving</li>
                                <li>Web Design</li>
                            </ul>
                        </div>
                    </Card>
                    <Card>
                        <div className={styles.characteristics}>
                            <h3>Portfolio Projects</h3>
                            <ul>
                                <li>Basic Calculator</li>
                                <li>IP Address Calculator</li>
                                <li>Weather Forecast Website/Application</li>
                            </ul>
                        </div>
                    </Card>
                </Container>
            </ContentContainer>

            <ContentContainer>
            <Container className={styles.aboutbox}>
                    
                </Container>
            </ContentContainer>
        </main>
    );
};

export default AboutMe;