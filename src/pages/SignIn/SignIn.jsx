import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom'
import styled from 'styled-components'
import { Button } from '../../components/CustomButton/Button'
import { auth, signInWithGoogle } from '../../firebase/firebase.utils'

const Title = styled.h3`
  width: 90%;
  max-width: 1080px;
  margin: 10px auto;
`

const Form = styled.form`
  width: 50%;
  margin: 0 5%;
  max-width: 1080px;
  @media (max-width: 768px) {
    width: 90%;
    margin: 0 auto
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

const StyledLink = styled(Link)`
  text-decoration: none;
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

const Buttons = styled.div`
  margin: 0 5%;
  width: 50%;
  max-width: 1080px;
  @media (max-width: 768px) {
    width: 90%;
    margin: 0 auto;
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

  handleSubmit = async (event) => {
    event.preventDefault()

    const { email, password } = this.state

    try {
      await auth.signInWithEmailAndPassword(email, password)
      this.setState({ email: '', password: '' })
      this.props.history.push('/')
    } catch (e) {
      console.log(e)
    }
  }

  render() {
    return (
      <div>
        <Title>Sign In</Title>
        <Form onSubmit={this.handleSubmit}>
          <Email
            onChange={this.handleChange}
            value={this.state.email}
            required
          ></Email>
          <Password
            onChange={this.handleChange}
            value={this.state.password}
            required
          ></Password>
          <Button type='submit'>Submit</Button>
        </Form>
        <Buttons>
          <Button onClick={signInWithGoogle}>Google</Button>
          <StyledLink to='signup'>
            <Button white>Sign Up</Button>
          </StyledLink>
        </Buttons>
      </div>
    )
  }
}

export default withRouter(SignIn)
