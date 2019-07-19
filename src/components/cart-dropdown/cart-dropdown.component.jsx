import React from 'react'

import { DropdownContainer, CartDropdownButton, CartItemsContainer, EmptyMessage } from './cart-dropdown.styles';

const CartDropdown = ({ cartItems, history, toggleCartHidden }) => (
  <DropdownContainer>
    <CartItemsContainer>
      {/*cartItems.length ? (
        cartItems.map(cartItem => <CartItem key={cartItem.id} item={cartItem} />)
      ) : (
        <EmptyMessage>Your cart is empty</EmptyMessage>
      ) */}
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

export default CartDropdown;