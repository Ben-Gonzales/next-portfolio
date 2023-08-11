'use client';
import React from "react";
import Image from 'next/image';
import styles from './page.module.css'
import Link from "next/link";
import {Itemnav, Menubar, Title, Homemenu, Card, ContentContainer, Container} from './styles';

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