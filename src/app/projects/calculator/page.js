'use client';
import React from "react";
import Image from 'next/image';
import logo from '../../assets/Logo.png';
import styles from './page.module.css'
import { styled } from 'styled-components';
import Link from "next/link";
import { useState, useEffect } from 'react';
import { Button, Form, FormControl, Container, Navbar } from 'react-bootstrap';

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

const BasicCalculator = () => {
    const [inputvalue, setInputValue] = useState('');

    useEffect(() => {
        const handleKeyPress = (event) => {
        const { key } = event;
        if (/[0-9+\-*/.=]/.test(key)){
        event.preventDefault();
        handleButtonClick(key);
        } else if (key === 'Backspace') {
        event.preventDefault();
        handleDeleteButtonClick();
        } else if (key === 'Escape') {
        event.preventDefault();
        handleClearButtonClick();
        } else if (key === 'Enter') {
        event.preventDefault();
        handleEqualsClick();
        }
        };

        window.addEventListener('keydown', handleKeyPress);
        return() => {
        window.removeEventListener('keydown', handleKeyPress);
        };
    }, [inputvalue]);

    const handleButtonClick = (value) => {
        setInputValue((prevValue) => prevValue + value);
    }

    const handleClearButtonClick = () => {
        setInputValue('');
    }

    const handleDeleteButtonClick = () => {
        setInputValue(inputvalue.slice(0,-1));
    }

    const handleEqualsClick = () => {
        try {
        const result = eval(inputvalue);
        setInputValue(Number.isFinite(result) ? result.toString() : 'Invalid');
        } catch (error) {
        setInputValue('Error');
        }
    };
    
    return (
        <main className={styles.main}>
            <Homemenu>
            <Title>
                BG Tech
            </Title>
            <Menubar>
                <Itemnav className={styles.menu}>
                    <Link href='../../'><li className={styles.menuitems}>Home</li></Link>
                    <Link href='../../about_me'><li className={styles.menuitems}>About Me</li></Link>
                    <Link href='../../projects'><li className={styles.menuitems}>Projects</li></Link>
                </Itemnav>
            </Menubar>
            </Homemenu>

            <div className={styles.main}>
            <Navbar fixed="top" className="bg-color-tertiary">
                <Container id="containerh">
                    <Navbar.Brand id="header" href="#Calculator">
                    <Image src={logo} width={40} height={30} />{' '}
                    Online Basic Calculator
                    </Navbar.Brand>
                </Container>
            </Navbar>

            <section id="Calculator" className="container">
          <div>
            <Form>
              <FormControl type="text" className="display" value={inputvalue} readOnly/>
            </Form>
            <div className="buttons">
              <Button variant="light" id="ac" style={{ color: 'green' }} className="operator" onClick={handleClearButtonClick} active>AC</Button>
              <Button variant="light" style={{ color: 'green' }} className="operator" onClick={handleDeleteButtonClick} active>DEL</Button>
              <Button variant="light" style={{ color: 'green' }} className="operator" onClick={() => handleButtonClick("/")} active>/</Button>
              <Button variant="light" style={{ color: 'black' }} className="number" onClick={() => handleButtonClick("7")} active>7</Button>
              <Button variant="light" style={{ color: 'black' }} className="number" onClick={() => handleButtonClick("8")} active>8</Button>
              <Button variant="light" style={{ color: 'black' }} className="number" onClick={() => handleButtonClick("9")} active>9</Button>
              <Button variant="light" style={{ color: 'green' }} className="operator" onClick={() => handleButtonClick("*")} active>*</Button>
              <Button variant="light" style={{ color: 'black' }} className="number" onClick={() => handleButtonClick("4")} active>4</Button>
              <Button variant="light" style={{ color: 'black' }} className="number" onClick={() => handleButtonClick("5")} active>5</Button>
              <Button variant="light" style={{ color: 'black' }} className="number" onClick={() => handleButtonClick("6")} active>6</Button>
              <Button variant="light" style={{ color: 'green' }} className="operator" onClick={() => handleButtonClick("-")} active>-</Button>
              <Button variant="light" style={{ color: 'black' }} className="number" onClick={() => handleButtonClick("1")} active>1</Button>
              <Button variant="light" style={{ color: 'black' }} className="number" onClick={() => handleButtonClick("2")} active>2</Button>
              <Button variant="light" style={{ color: 'black' }} className="number" onClick={() => handleButtonClick("3")} active>3</Button>
              <Button variant="light" style={{ color: 'green' }} className="operator" onClick={() => handleButtonClick("+")} active>+</Button>
              <Button variant="light" style={{ color: 'black' }} className="number" onClick={() => handleButtonClick("0")} active>0</Button>
              <Button variant="light" style={{ color: 'black' }} className="number" onClick={() => handleButtonClick("00")} active>00</Button>
              <Button variant="light" style={{ color: 'black' }} className="number" onClick={() => handleButtonClick(".")} active>.</Button>
              <Button variant="light" style={{ color: 'green' }} className="operator" onClick={handleEqualsClick} active>=</Button>
            </div>
          </div>
        </section>

        <Navbar fixed="top" className="bg-color-tertiary">
                <Container id="containerf">
                    <Navbar.Brand id="footer" href="#Calculator">
                    Benedict Gonzales | &#169;2023
                    </Navbar.Brand>
                </Container>
            </Navbar>
        </div>
        </main>
    );
};

export default BasicCalculator;