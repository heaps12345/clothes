import React, { Component } from 'react';

import CustomButton from '../custom-button/custom-button.component';
import { SignInContainer, Title, CustomButtonContainer } from './sign-in.styles';
import FormInput from '../form-input/form-input.component';

import { signInWithGoogle, auth } from '../../firebase/firebase.utils';

export default class SignIn extends Component {
  state = {
    email: '',
    password: ''
  };

  handleChange = e => {
    const { value, name } = e.target;
    this.setState({
      [name]: value
    });
  };

  handleSubmit = async e => {
    e.preventDefault();
    const { email, password } = this.state;
    try {
      await auth.signInWithEmailAndPassword(email, password);
      this.setState({ email: '', password: '' });
    } catch (error) {
      console.log(error);
    }
  };
  render() {
    const { email, password } = this.state;
    return (
      <SignInContainer>
        <Title>I already have an account</Title>
        <span>Sign in with your email and password</span>
        <form onSubmit={this.handleSubmit}>
          <FormInput type="email" name="email" value={email} onChange={this.handleChange} label="Email" />
          <FormInput type="password" name="password" value={password} onChange={this.handleChange} label="Password" />
          <CustomButtonContainer>
            <CustomButton type="submit">Sign In</CustomButton>
            <CustomButton type="button" onClick={signInWithGoogle} googleSignIn>
              Sign In with Google
            </CustomButton>
          </CustomButtonContainer>
        </form>
      </SignInContainer>
    );
  }
}
