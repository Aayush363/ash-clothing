import React from 'react';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button';
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
        console.log(this.state);
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.setState({ Username: '', Password: '' });
    }

    render() {
        return (
            <div className='sign-in'>
                <h1>I already have an account.</h1>
                <span>Sign-in with your username and password.</span>
                <form onSubmit={this.handleSubmit}>
                    <FormInput label='Username' name='Username' type='name' value={this.state.Username} required handleChange={this.handleChange} />
                    <FormInput label='Password' name='Password' type='password' value={this.state.Password} handleChange={this.handleChange} required />
                    <CustomButton type="submit">Submit</CustomButton>
                </form>
            </div>
        )
    }
}

export default SignIn;