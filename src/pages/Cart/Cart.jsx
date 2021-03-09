import React, { Component } from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'
import { increaseQuantity, decreaseQuantity, removeFromCart } from '../../redux/cart/cart.action'

const mapStateToProps = (state) => ({
  cart: state.cart,
})

const actions = {
  increaseQuantity,
  decreaseQuantity,
  removeFromCart
}

const Wrapper = styled.div`
  width: 90%;
  margin: 0 auto;
  max-width: 1080px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  place-items: center;
`

const Product = styled.div``

const ItemImage = styled.img`
  height: 100px;
`

const Name = styled.div`
  text-align: center;
`

class Cart extends Component {
  render() {
    return (
      <div>
        {this.props.cart?.map((cartitem) => {
          return (
            <Wrapper key={cartitem.id}>
              <Product>
                <ItemImage src={cartitem.imageUrl} />
                <Name>{cartitem.name}</Name>
              </Product>
              <div>$ {cartitem.price}</div>
              <div>
                {cartitem.quantity === 1 && (<span onClick={() => this.props.removeFromCart(cartitem)}>-</span>)}
                {cartitem.quantity >= 2 && (<span onClick={() => this.props.decreaseQuantity(cartitem)}>-</span>)}
                <span>{cartitem.quantity}</span>
                <span onClick={() => this.props.increaseQuantity(cartitem)}>
                  +
                </span>
              </div>
              <div>Total : $ {cartitem.price * cartitem.quantity}</div>
            </Wrapper>
          )
        })}
      </div>
    )
  }
}

export default connect(mapStateToProps, actions)(Cart)
