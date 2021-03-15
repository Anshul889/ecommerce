import React, { Component } from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'
import {
  increaseQuantity,
  decreaseQuantity,
  removeFromCart,
} from '../../redux/cart/cart.action'

const mapStateToProps = (state) => ({
  cart: state.cart,
})

const actions = {
  increaseQuantity,
  decreaseQuantity,
  removeFromCart,
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

const Price = styled.div``

const Quantity = styled.span`
  font-size: 24px;
  cursor: pointer;
`

class Cart extends Component {
  render() {
    let totalAmount = 0
    if (this.props.cart.length > 0) {
      for (let i = 0; i < this.props.cart.length; i++) {
        totalAmount =
          totalAmount + this.props.cart[i].price * this.props.cart[i].quantity
      }
    }
    return (
      <div>
        {this.props.cart?.map((cartitem) => {
          return (
            <Wrapper key={cartitem.id}>
              <Product>
                <ItemImage src={cartitem.imageUrl} />
                <Name>{cartitem.name}</Name>
              </Product>
              <Price>$ {cartitem.price}</Price>
              <div>
                {cartitem.quantity === 1 && (
                  <Quantity onClick={() => this.props.removeFromCart(cartitem)}>
                    {' '}
                    -{' '}
                  </Quantity>
                )}
                {cartitem.quantity >= 2 && (
                  <Quantity
                    onClick={() => this.props.decreaseQuantity(cartitem)}
                  >
                    {' '}
                    -{' '}
                  </Quantity>
                )}
                <span> {cartitem.quantity} </span>
                <Quantity onClick={() => this.props.increaseQuantity(cartitem)}>
                  +
                </Quantity>
              </div>
              <div>Total : $ {cartitem.price * cartitem.quantity}</div>
            </Wrapper>
          )
        })}
        {this.props.cart.length === 0 && <div>Your cart is empty</div>}
        {this.props.cart.length > 0 && <div>Grand Total : {totalAmount}</div>}
      </div>
    )
  }
}

export default connect(mapStateToProps, actions)(Cart)
