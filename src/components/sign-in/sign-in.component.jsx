import React from 'react';
import { connect } from 'react-redux';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button';
import './sign-in.styles.scss';
import { googleSignInStart, emailSignInStart } from '../../redux/user/user.actions';
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
        const { emailSignInStart } = this.props;
        const { Username, Password } = this.state;

        emailSignInStart(Username, Password);
    };

    render() {
        const { googleSignInStart } = this.props;
        return (
            <div className='sign-in'>
                <h1>I already have an account.</h1>
                <span>Sign-in with your username and password.</span>
                <form onSubmit={this.handleSubmit}>
                    <FormInput label='Email' name='Username' type='name' value={this.state.Username} required handleChange={this.handleChange} />
                    <FormInput label='Password' name='Password' type='password' value={this.state.Password} handleChange={this.handleChange} required />
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
}
const mapDispatchToProps = dispatch => ({
    googleSignInStart: () => dispatch(googleSignInStart()),
    emailSignInStart: (email, password) => dispatch(emailSignInStart({ email, password }))
})

export default connect(null, mapDispatchToProps)(SignIn);