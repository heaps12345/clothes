import React, { Component } from 'react';

import CustomButton from '../custom-button/custom-button.component';
import { SignUpContainer, Title, CustomButtonContainer } from './sign-up-styles';
import FormInput from '../form-input/form-input.component';
import { auth, createUserFirestoreDocument } from '../../firebase/firebase.utils';

export default class SignUp extends Component {
  state = {
    displayName: '',
    email: '',
    password: '',
    confirmPassword: ''
  };

  handleChange = e => {
    const { value, name } = e.target;
    this.setState({
      [name]: value
    });
  };

  handleSubmit = async e => {
    e.preventDefault();
    const { email, password, confirmPassword, displayName } = this.state;

    if (password !== confirmPassword) {
      alert('passwrods dont match');
      return;
    }
    try {
      debugger;
      const { user } = await auth.createUserWithEmailAndPassword(email, password);
      await createUserFirestoreDocument(user, { displayName });
      this.setState({
        displayName: '',
        email: '',
        password: '',
        confirmPassword: ''
      });
    } catch (err) {
      console.error(err);
    }
  };
  render() {
    const { email, password, confirmPassword, displayName } = this.state;
    return (
      <SignUpContainer>
        <Title>I do not have an account</Title>
        <span>Sign up with your email and password</span>
        <form onSubmit={this.handleSubmit}>
          <FormInput
            type="text"
            name="displayName"
            value={displayName}
            onChange={this.handleChange}
            label="Display Name"
          />

          <FormInput type="email" name="email" value={email} onChange={this.handleChange} label="Email" />
          <FormInput type="password" name="password" value={password} onChange={this.handleChange} label="Password" />
          <FormInput
            type="password"
            name="confirmPassword"
            value={confirmPassword}
            onChange={this.handleChange}
            label="Confirm Password"
          />

          <CustomButtonContainer>
            <CustomButton type="submit">Sign Up</CustomButton>
          </CustomButtonContainer>
        </form>
      </SignUpContainer>
    );
  }
}
