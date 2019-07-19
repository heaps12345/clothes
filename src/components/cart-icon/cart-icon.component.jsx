import React from 'react';
import { CartIconContainer, ShoppingIcon, ItemCount } from './cart-icon.styles';

import { connect } from 'react-redux';
import { toggleCartHidden } from '../../redux/cart/cart.actions';

const CartIcon = ({ toggleCartHidden, itemCount }) => (
  <CartIconContainer onClick={toggleCartHidden}>
    <ShoppingIcon />
    <ItemCount>{itemCount}</ItemCount>
  </CartIconContainer>
);

const mapStateToProps = state => ({
  itemCount: state.cart.cartItems.reduce((accumulatedQuantity, cartItem) => accumulatedQuantity + cartItem.quantity, 0)
});

export default connect(
  mapStateToProps,
  { toggleCartHidden }
)(CartIcon);
