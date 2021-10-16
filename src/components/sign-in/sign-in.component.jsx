import React from 'react';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button';
import { auth, signInWithGoogle } from '../firebase/firebase.utility';
import './sign-in.styles.scss'
class SignIn extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            Username: '',
            Password: ''
        }
    }

    handleChange = (event) => {
        const { name, value } = event.target;
        this.setState({ [name]: value });
    }

    handleSubmit = async event => {
        event.preventDefault();
        const { Username, Password } = this.state;
        try {
            await auth.signInWithEmailAndPassword(Username, Password);
            this.setState({ Username: '', Password: '' });
        } catch (error) {
            console.error(error);
        }
    }

    render() {
        return (
            <div className='sign-in'>
                <h1>I already have an account.</h1>
                <span>Sign-in with your username and password.</span>
                <form onSubmit={this.handleSubmit}>
                    <FormInput label='Email' name='Username' type='name' value={this.state.Username} required handleChange={this.handleChange} />
                    <FormInput label='Password' name='Password' type='password' value={this.state.Password} handleChange={this.handleChange} required />
                    <div className='buttons'>
                        <CustomButton type="submit">Submit</CustomButton>
                        <CustomButton onClick={signInWithGoogle} isGoogleSignIn>
                            {' '}
                            Sign In with Google{' '}
                        </CustomButton>
                    </div>
                </form>
            </div>
        )
    }
}

export default SignIn;