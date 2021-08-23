import styled from 'styled-components';
import { Link } from 'react-router-dom';//usado para single page aplication.

export const Title = styled.h1`
    text-align: center;
    font-size: 2rem;
    font-family: sans-serif;
    color: black;
`;

export const Lista = styled.ul`
    list-style: none;
    padding: 0;
    font-family: sans-serif;
`;

export const Item = styled.li`
    margin: .5rem 0;
    background: Purple;
    color: white;
    padding: .5rem;
    border-radius: 10px;
`;

export const Container = styled.div`
    width: 100%;
    max-width: 991px;
    margin: 0 auto;
`;

export const LinkHome = styled(Link)`
    display: block;
    height: 2rem;
    width: 10rem;
    text-align: center;
    margin: 2rem auto;
    padding: 1rem 0 0;
    background-color: aquamarine;
    color: Purple;
    text-decoration: none;
    border: 1px solid purple;
    border-radius: 10px
`;

