import React, { Component } from 'react'
import { withRouter } from 'react-router'
import styled from 'styled-components'
import firebase from '../../firebase/firebase.utils'

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
  state = { id: this.props.match.params.id, product: {} }
  async componentDidMount() {
    const firestore = firebase.firestore()
    const product = (
      await firestore.collection('products').doc(`${this.state.id}`).get()
    ).data()
    console.log(product)
    this.setState({ product })
  }
  render() {
    return (
      <Wrapper>
        <ItemImage src={this.state.product.imageUrl}></ItemImage>
        <div>{this.state.product.price}</div>
      </Wrapper>
    )
  }
}

export default withRouter(Product)
