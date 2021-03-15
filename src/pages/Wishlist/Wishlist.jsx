import React from 'react'
import { connect } from 'react-redux'
import { Button } from '../../components/CustomButton/Button'
import { removeFromWishlist } from '../../redux/wishlist/wishlist.action'
import { addToCart } from '../../redux/cart/cart.action'

const mapStateToProps = (state) => ({
  wishlist: state.wishlist,
  cart: state.cart
})

const actions = {
  removeFromWishlist,
  addToCart,
}

class Wishlist extends React.Component {
  render() {
    return (
      <div>
        {this.props.wishlist?.map((item) => {
          return (
            <div key={item.id}>
              <div>{item.name}</div>
              <Button onClick={() => this.props.removeFromWishlist(item)}>
                Remove
              </Button>
              {this.props.cart.find((x) => x.id === item.id) && (
                <div>Added To Cart</div>
              )}
              {!this.props.cart.find((x) => x.id === item.id) && (
                <Button onClick={() => this.props.addToCart(item, 1)}>
                  ADD TO CART
                </Button>
              )}
            </div>
          )
        })}
      </div>
    )
  }
}

export default connect(mapStateToProps, actions)(Wishlist)
