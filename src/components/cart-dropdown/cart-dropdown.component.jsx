import React from 'react';
import { connect } from 'react-redux';
import { selectCartItems } from '../../redux/cart/cart.selectors';
import CartItem from '../cart-item/cart-item.component';
import { DropdownContainer, CartDropdownButton, CartItemsContainer, EmptyMessage } from './cart-dropdown.styles';
import { createStructuredSelector } from 'reselect';

const CartDropdown = ({ cartItems, history, toggleCartHidden }) => (
  <DropdownContainer>
    <CartItemsContainer>
      {cartItems.length ? (
        cartItems.map(cartItem => <CartItem key={cartItem.id} item={cartItem} />)
      ) : (
        <EmptyMessage>Your cart is empty</EmptyMessage>
      )}
    </CartItemsContainer>
    <CartDropdownButton
      onClick={() => {
        history.push('/checkout');
        toggleCartHidden();
      }}
    >
      GO TO CHECKOUT
    </CartDropdownButton>
  </DropdownContainer>
);

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems
});

export default connect(mapStateToProps)(CartDropdown);
