'use client';
import Image from 'next/image';
import styles from './page.module.css';
import logo from './assets/intro.png';
import aboutme from './assets/aboutme.png';
import project from './assets/project.png';
import { styled } from 'styled-components';
import Link from 'next/link';

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
border: 1px solid white;
border-radius: 1rem;
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

export default function Home() {
  

  return (
    <main className={styles.main}>
        <Homemenu>
          <Title>
            BG Tech
          </Title>
          <Menubar>
            <Itemnav className={styles.menu}>
              <li className={styles.menuitems}><a href='#Home'>Home</a></li>
              <li className={styles.menuitems}><a href='#AboutMe'>About Me</a></li>
              <li className={styles.menuitems}><a href='#Projects'>Projects</a></li>
            </Itemnav>
          </Menubar>
        </Homemenu>

        <ContentContainer>
          <Container id='Home'>
            <div className={styles.introbox}>
              <h2 className={styles.introtitle}>Welcome, I am Benedict,</h2>
              <p className={styles.context}>This is my portfolio, as you can see I built this website to <br />
              showcase myself and the projects that I have done. Here <br />
              you can learn a little about me and you will be able to see <br />
              and experience first hand the projects that I made.</p>
            </div>
            <div className={styles.introimg}>
              <Image src={logo} width={450} height={300} />
            </div>
          </Container>
        </ContentContainer>

        <ContentContainer>
          <Container id='AboutMe' className={styles.aboutme}>
            <div>
              <Image src={aboutme} width={450} height={300} />
            </div>
            <div className={styles.aboutbox}>
              <h2 className={styles.abouttitle}>About Me</h2>
              <p className={styles.context}>Hi I am Benedict John Gonzales, I am 21 years old, <br />
                    a student of Bachelor of Science in Information Technology<br />
                    Major in Web Development. </p>
              <Link href='./about_me'>
                <button className={styles.btn}>Know more about me here</button>
              </Link>
            </div>
          </Container>
        </ContentContainer>

        <ContentContainer>
          <Container id='Projects' className={styles.projects}>
            <div className={styles.projectbox}>
              <h2 className={styles.projecttitle}>Projects</h2>
              <p className={styles.context}>Here are the projects or Websites that I have made in the midst <br />
              of my training in this seminar. Each one of these project is a fully <br />
              functioning website that process information and give output.</p>
              <Link href='./projects'>
                <button className={styles.btn1}>Check my portfolio projects</button>
              </Link>
            </div>
            <div>
              <Image src={project} width={450} height={300} />
            </div>
          </Container>
        </ContentContainer>
    </main>
  )
}
