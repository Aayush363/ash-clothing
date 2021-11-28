import React, { useState } from 'react';
import { connect } from 'react-redux';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button';
import './sign-in.styles.scss';
import { googleSignInStart, emailSignInStart } from '../../redux/user/user.actions';

const SignIn = ({ emailSignInStart, googleSignInStart }) => {
    const [userCredentials, setCredentials] = useState({ Username: '', Password: '' });
    const handleChange = (event) => {
        const { name, value } = event.target;
        setCredentials({ ...userCredentials, [name]: value });
    }
    const { Username, Password } = userCredentials;

    const handleSubmit = async event => {
        event.preventDefault();

        emailSignInStart(Username, Password);
    };

    return (
        <div className='sign-in'>
            <h1>I already have an account.</h1>
            <span>Sign-in with your username and password.</span>
            <form onSubmit={handleSubmit}>
                <FormInput label='Email' name='Username' type='name' value={Username} required handleChange={handleChange} />
                <FormInput label='Password' name='Password' type='password' value={Password} handleChange={handleChange} required />
                <div className='buttons'>
                    <CustomButton type="submit">Submit</CustomButton>
                    <CustomButton type="button" onClick={googleSignInStart} isGoogleSignIn>
                        {' '}
                        Sign In with Google{' '}
                    </CustomButton>
                </div>
            </form>
        </div>
    )

}
const mapDispatchToProps = dispatch => ({
    googleSignInStart: () => dispatch(googleSignInStart()),
    emailSignInStart: (email, password) => dispatch(emailSignInStart({ email, password }))
})

export default connect(null, mapDispatchToProps)(SignIn);