'use client';
import React from "react";
import { styled } from "styled-components";
import styles from '../app/page.module.css';

const HeaderNavbar = () => {
    const Title = styled.h1`
    font-size: 1.5em;
    text-align: center;
    color: #BF4F74;
    position: relative;
    bottom: 1rem;
  `;
    return(
        <Title>
          Welcome to my Portfolio
        </Title>
    );
};

export default HeaderNavbar;