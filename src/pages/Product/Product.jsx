import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'
import { compose } from 'redux'
import styled from 'styled-components'
import { Button } from '../../components/CustomButton/Button'
import firebase from '../../firebase/firebase.utils'
import { addToCart } from '../../redux/cart/cart.action'

const actions = {
  addToCart,
}

const Wrapper = styled.div`
  width: 90%;
  margin: 20px auto;
  max-width: 1080px;
`

const ItemImage = styled.img`
  width: 100%;
  height: 300px;
  object-fit: cover;
  @media (max-width: 768px) {
    height: 400px;
  }
`

class Product extends Component {
  state = { id: this.props.match.params.id, product: {}, quantity: 1 }
  async componentDidMount() {
    const firestore = firebase.firestore()
    const productQuery = await firestore
      .collection('products')
      .doc(`${this.state.id}`)
      .get()
    const productData = productQuery.data()
    const id = productQuery.id
    const product = {...productData, id}
    this.setState({ product })
    console.log(product)
  }

  handleChange = (event) => {
    this.setState({ quantity: event.target.value })
  }

  handleSubmit = async (event) => {
    event.preventDefault()
    const { product, quantity } = this.state
    console.log(product, quantity)
    this.props.addToCart(product, quantity)
    console.log('done')
  }

  render() {
    return (
      <Wrapper>
        <ItemImage src={this.state.product.imageUrl}></ItemImage>
        <form onSubmit={this.handleSubmit}>
          <label for='quantity'>Quantity</label>
          <select name='quantity' id='quantity' onChange={this.handleChange}>
            <option value='1'>1</option>
            <option value='2'>2</option>
            <option value='3'>3</option>
            <option value='4'>4</option>
            <option value='5'>5</option>
            <option value='6'>6</option>
            <option value='7'>7</option>
            <option value='8'>8</option>
          </select>
          <Button type='submit'>Add to Cart</Button>
        </form>
        <div>{this.state.product.price}</div>
      </Wrapper>
    )
  }
}

export default connect(null, actions)(Product)
