import React, { useState } from "react";
import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button";
import './sign-up.styles.scss';
import { signUpStart } from "../../redux/user/user.actions";
import { connect } from "react-redux";
const SignUp = (signUpStart) => {
    const [userCredentials, setUserCredentials] = useState({
        displayName: '',
        email: '',
        password: '',
        confirmPassword: '',
    });
    const { displayName, email, password, confirmPassword } = userCredentials;

    const handleSubmit = async event => {
        event.preventDefault();

        if (password !== confirmPassword) {
            alert("password don't match");
            return;
        }
        signUpStart({ displayName, email, password })
    }

    const handleChange = event => {
        const { name, value } = event.target;
        setUserCredentials({ ...userCredentials, [name]: value });
    }


    return (
        <div className='sign-up'>
            <h1 className='title'>
                I don't have a account.
            </h1>
            <span>
                Sign up with your email and password
            </span>
            <form className='sign-up-form' onSubmit={handleSubmit}>
                <FormInput
                    type='name'
                    name='displayName'
                    value={displayName}
                    onChange={handleChange}
                    label='Name'
                    required />
                <FormInput
                    type='email'
                    name='email'
                    value={email}
                    onChange={handleChange}
                    label='Email'
                    required />
                <FormInput
                    type='password'
                    name='password'
                    value={password}
                    onChange={handleChange}
                    label='Password'
                    required />
                <FormInput
                    type='password'
                    name='confirmPassword'
                    value={confirmPassword}
                    onChange={handleChange}
                    label='Confirm Password'
                    required />
                <CustomButton type='submit'>SIGN UP</CustomButton>
            </form>
        </div>
    )

}

const mapDispatchToProps = dispatch => ({
    signUpStart: userCredentials => dispatch(signUpStart(userCredentials))
})

export default connect(null, mapDispatchToProps)(SignUp);