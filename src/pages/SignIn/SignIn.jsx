import React, { Component } from 'react'
import styled from 'styled-components'
import { Button } from '../../components/CustomButton/Button'

const Form = styled.form`
  width: 90%;
  margin: 0 auto;
  max-width: 1080px;
`

const Email = styled.input.attrs({
  type: 'email',
  name: 'email',
  placeholder: 'Email'
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
  }
`

const Password = styled.input.attrs({
  type: 'password',
  name: 'password',
  placeholder: 'Password'
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
  }
`

class SignIn extends Component {
  state = {
    email: '',
    password: '',
  }

  handleChange = (event) => {
    const { value, name } = event.target
    this.setState({ [name]: value })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    this.setState({ email: '', password: '' })
  }

  render() {
    return (
      <div>
        <Form onSubmit={this.handleSubmit}>
          <label>Email</label>
          <Email onChange={this.handleChange} required></Email>
          <label>Password</label>
          <Password onChange={this.handleChange} required></Password>
          <Button type='submit'>Submit</Button>
        </Form>
      </div>
    )
  }
}

export default SignIn
