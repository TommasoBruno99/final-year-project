import styled from 'styled-components/macro';
import { Link as ReactLink } from 'react-router-dom';


export const Container = styled.div`

    display: flex;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    border: 1px solid white;
    border-radius: 10px;
    width: 50%;
    
    max-width: 350px;
    height: 500px;
    padding: 1em 2em;

    &::after {
        opacity: 0.5;
    }

    @media (max-width: 650px) {
        width: 70%;
    }
`;

export const Inner = styled.form`

    display: flex;
    flex-direction: column;
    width: 100%;
    z-index: 1
`;

export const Title = styled.h1`

    font-size: 24px;
    color: white;
`;

export const Input = styled.input`

    box-sizing: border-box;
    width: 100%;
    background: #3e3c3c;
    border: none;
    height: 3em;
    padding-left: 2em;
    margin-bottom: 2em;
    border-radius: 10px;
    color: white;
    outline: none;
    
    &:first-of-type {
        margin-top: 2em;
    }

    &:focus {
        border: 1px solid white;
    }
`;

type Props = {
    disabled: boolean;
}

export const Submit = styled.button<Props>`

    width: 100%;
    height: 2.5em;
    border: none;
    border-radius: 10px;
    background: #c12f2f;
    color: black;

    opacity: ${props => (props.disabled ? `0.4` : `1`)};
    cursor: ${props => (props.disabled ? `normal` : `pointer`)};

    &:hover {
        background: #c75454;
    }
`;

export const Description = styled.p`

    color: white;
    text-align: left;
`;

export const Link = styled(ReactLink)`

    color: #c12f2f;
    text-decoration: none;

    &:hover {
        color: #c75454;
    }
`;