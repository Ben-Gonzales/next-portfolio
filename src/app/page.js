'use client';
import Image from 'next/image';
import styles from './page.module.css';
import logo from './assets/intro.png';
import aboutme from './assets/aboutme.png';
import project from './assets/project.png';
import Link from 'next/link';
import {Container, ContentContainer, Homemenu, Title, Menubar, Itemnav} from './styles';

export default function Home() {
  
  return (
    <ContentContainer className={styles.main}>
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
        
          <Container id='AboutMe' className={styles.aboutme}>
            <div>
              <Image src={aboutme} width={450} height={300} />
            </div>
            <div className={styles.aboutbox}>
              <h2 className={styles.abouttitle}>About Me</h2>
              <p className={styles.context}>Hi I am Benedict John Gonzales, I am 21 years old, <br />
                    a student of Bachelor of Science in Information Technology<br />
                    Major in Web Development. </p>
                <button className={styles.btn}><Link href='./about_me'>Know more about me here</Link></button>
            </div>
          </Container>

          <Container id='Projects' className={styles.projects}>
            <div className={styles.projectbox}>
              <h2 className={styles.projecttitle}>Projects</h2>
              <p className={styles.context}>Here are the projects or Websites that I have made in the midst <br />
              of my training in this seminar. Each one of these project is a fully <br />
              functioning website that process information and give output.</p>
                <button className={styles.btn1}><Link href='./projects'>Check my portfolio projects</Link></button>
            </div>
            <div>
              <Image src={project} width={450} height={300} />
            </div>
          </Container>
      </ContentContainer>
  )
}
