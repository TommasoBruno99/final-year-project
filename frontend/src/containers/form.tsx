import React, { useState } from 'react';
import { Form, FormInner, FormTitle, FormInput, FormSubmit, FormDescription, FormLink } from '../components/index';

const FormContainer: React.FC = () => {

    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');

    const disabled = email === '' || password === '';

    const handleSignIn = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log(email, password);
    }

    return (
        <Form>
            <FormInner method="POST" onSubmit={(e) => handleSignIn(e)}>
                <FormTitle> Sign In </FormTitle>
                <FormInput 
                    type="text" 
                    placeholder="Enter email address"
                    onChange={(e) => setEmail(e.target.value)}
                />
                <FormInput 
                    type="password" 
                    placeholder="Enter password" 
                    onChange={(e) => setPassword(e.target.value)}
                />
                <FormSubmit disable={disabled}> Sign in </FormSubmit>
                <FormDescription> 
                    Already have an account?
                    <FormLink to="signup"> Sign up </FormLink>
                </FormDescription>
            </FormInner>
        </Form>
    )
}

export default FormContainer;