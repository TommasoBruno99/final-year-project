import React, { useState } from 'react';
import { Form, FormDescription, FormInner, FormInput, FormLink, FormTitle } from '../components';
import { FormError } from '../components/form';


const RegisterFormContainer: React.FC = () => {

    const [email, setEmail] = useState<string>('');
    const [error, setError] = useState<string | null>(null);

    return (
        <Form>
            <FormInner method="POST" onSubmit={() => console.log('')}>
                <FormTitle> Register </FormTitle>
                <FormInput
                    type="text"
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder={'Insert email address'}
                    value={email}
                />

                <FormDescription> 
                    Already have an account?
                    <FormLink to="login"> Login</FormLink>
                </FormDescription>
                {error ? 
                    <FormError>
                        { error }
                    </FormError>
                    : null }
            </FormInner>
        </Form>
    )
}

export default RegisterFormContainer;