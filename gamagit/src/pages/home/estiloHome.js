import styled from 'styled-components';

export const HomeContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
`;

export const Content = styled.div`
    width: 100vw;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const Input = styled.input`
    border: 1px  solid Purple;
    border-radius: .25rem 0 0 .25rem;
    height: 2.1rem;
    padding: 0 0 0 10px;
    width: 400px;

    &:focus;
    &:active {
        outline: none;
        box-shadow: none;
    };
`;

export const Button = styled.button`
    border: 1px solid Purple;
    border-radius: 0 .25rem .25rem 0;
    height: 2.25rem;
    background: aquamarine;
    color: purple;
    cursor: pointer;
    width: 200px;

    &:focus;
    &:active {
        outline: none;
        box-shadow: none;
    };
`;

export const ErroMsg = styled.span`
    display: block;
    font-size: 1.2rem;
    color: red;
    font-weight: 600;
    margin-top: 1rem;
`;