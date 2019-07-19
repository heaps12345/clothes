import React from 'react';

import { CartItemsContainer, CartDetailsContainer } from './cart-item.styles';

const CartItem = ({ item: { name, price, quantity, imageUrl } }) => {
  return (
    <CartItemsContainer>
      <img src={imageUrl} alt="cart item" />
      <CartDetailsContainer>
        <span>{name}</span>
        <span>
          {quantity} x {price}
        </span>
      </CartDetailsContainer>
    </CartItemsContainer>
  );
};

export default CartItem;
