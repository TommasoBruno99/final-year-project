import React from 'react';

import { Container, Inner, Title, Input, Submit, Description, Error, Link } from './form.styled';
import { IForm, IFormInner, IFormTitle, IFormInput, IFormSubmit, IFormDescription, IFormLink } from './interfaces';


const Form: React.FC<IForm> = ({ children }) => {

    return (
        <Container> {children} </Container>
    )
}

export const FormInner: React.FC<IFormInner> = ({ children, method, onSubmit }) => {
    
    return (
        <Inner
            method={method}
            onSubmit={onSubmit}
        > 
            {children} 
        </Inner>
    )
}

export const FormTitle: React.FC<IFormTitle> = ({ children }) => {

    return (
        <Title> {children} </Title>
    )
}

export const FormInput: React.FC<IFormInput> = ({ placeholder, type, value, onChange}) => {

    return (
        <Input 
            value={value}
            type={type}
            placeholder={placeholder}
            onChange={onChange}
        /> 
    )
}


export const FormSubmit: React.FC<IFormSubmit> = ({ children, disable }) => {

    return (
        <Submit disabled={disable}>
            { children }
        </Submit>
    )
}

export const FormDescription: React.FC<IFormDescription> = ({ children }) => {

    return (
        <Description>
            { children }
        </Description>
    )
}

export const FormLink: React.FC<IFormLink> = ({ children, to }) => {

    return (
        <Link to={to}>
            { children }
        </Link>
    )
}

export const FormError: React.FC = ({ children }) => {

    return (
        <Error>
            { children }
        </Error>
    )
}
 

export default Form;