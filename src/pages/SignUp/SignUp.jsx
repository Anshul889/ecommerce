import React, { Component } from 'react'
import styled from 'styled-components'
import { Button } from '../../components/CustomButton/Button'

import { auth, createUserProfileDocument } from '../../firebase/firebase.utils'

const Form = styled.form`
  width: 50%;
  margin: 0 auto;
  max-width: 1080px;
  @media (max-width: 768px) {
    width: 90%;
  }
`

const Email = styled.input.attrs({
  type: 'email',
  name: 'email',
  placeholder: 'Email',
})`
  background: none;
  background-color: lightgray;
  color: black;
  font-size: 18px;
  padding: 10px 10px 10px 5px;
  display: block;
  width: calc(100% - 20px);
  border: none;
  border-radius: 0;
  border-bottom: 1px solid $sub-color;
  margin: 25px 0;

  &:focus {
    outline: none;
    border: 1px solid gray;
  }
`

const DisplayName = styled.input.attrs({
  type: 'displayname',
  name: 'displayname',
  placeholder: 'Display Name',
})`
  background: none;
  background-color: lightgray;
  color: black;
  font-size: 18px;
  padding: 10px 10px 10px 5px;
  display: block;
  width: calc(100% - 20px);
  border: none;
  border-radius: 0;
  border-bottom: 1px solid $sub-color;
  margin: 25px 0;

  &:focus {
    outline: none;
    border: 1px solid gray;
  }
`

const Password = styled.input.attrs({
  type: 'password',
  name: 'password',
  placeholder: 'Password',
})`
  background: none;
  background-color: lightgray;
  color: black;
  font-size: 18px;
  padding: 10px 10px 10px 5px;
  display: block;
  width: calc(100% - 20px);
  border: none;
  border-radius: 0;
  border-bottom: 1px solid $sub-color;
  margin: 25px 0;
  &:focus {
    outline: none;
    border: 1px solid gray;
  }
`

const ConfirmPassword = styled.input.attrs({
  type: 'password',
  name: 'confirmPassword',
  placeholder: 'Confirm Password',
})`
  background: none;
  background-color: lightgray;
  color: black;
  font-size: 18px;
  padding: 10px 10px 10px 5px;
  display: block;
  width: calc(100% - 20px);
  border: none;
  border-radius: 0;
  border-bottom: 1px solid $sub-color;
  margin: 25px 0;
  &:focus {
    outline: none;
    border: 1px solid gray;
  }
`

class SignUp extends Component {
  state = {
    displayName: '',
    email: '',
    password: '',
    confirmPassword: '',
  }

  handleSubmit = async (event) => {
    event.preventDefault()
    const { displayName, email, password, confirmPassword } = this.state
    if (password !== confirmPassword) {
      alert('passwords dont match')
      return
    }

    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password
      )
      await createUserProfileDocument(user, { displayName })
      this.setState({
        displayName: '',
        email: '',
        password: '',
        confirmPassword: '',
      })
    } catch (e) {
      console.log(e.message)
    }
  }

  handleChange = (event) => {
    const { name, value } = event.target

    this.setState({ [name]: value })
  }

  render() {
    return (
      <div>
        <Form onSubmit={this.handleSubmit}>
          <Email onChange={this.handleChange} required></Email>
          <DisplayName onChange={this.handleChange}></DisplayName>
          <Password onChange={this.handleChange} required></Password>
          <ConfirmPassword onChange={this.handleChange}></ConfirmPassword>
          <Button type='submit'>Submit</Button>
        </Form>
      </div>
    )
  }
}

export default SignUp
