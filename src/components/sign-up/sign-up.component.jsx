import React, { Component } from 'react';

import CustomButton from '../custom-button/custom-button.component';
import { SignUpContainer, Title, CustomButtonContainer } from './sign-up-styles';
import FormInput from '../form-input/form-input.component';

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

  handleSubmit = e => {
    e.preventDefault();
    console.log(this.state);
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
            <CustomButton type="submit">Sign In</CustomButton>
          </CustomButtonContainer>
        </form>
      </SignUpContainer>
    );
  }
}
