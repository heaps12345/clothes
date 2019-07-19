import React from 'react';
import { connect } from 'react-redux';

import { clearItemFromCart, addItemToCart, removeItemFromCart } from '../../redux/cart/cart.actions';

import {
  CheckoutItemContainer,
  ImageContainer,
  TextContainer,
  QuantityContainer,
  RemoveButton
} from './checkout-item.styles';

const CheckoutItem = ({ cartItem, clearItemFromCart, addItemToCart, removeItemFromCart }) => {
  const { name, imageUrl, price, quantity } = cartItem;
  return (
    <CheckoutItemContainer>
      <ImageContainer>
        <img src={imageUrl} alt="item" />
      </ImageContainer>
      <TextContainer>{name}</TextContainer>
      <QuantityContainer>
        <div onClick={() => removeItemFromCart(cartItem)}>&#10094;</div>
        <span>{quantity}</span>
        <div onClick={() => addItemToCart(cartItem)}>&#10095;</div>
      </QuantityContainer>
      <TextContainer>${price}</TextContainer>
      <RemoveButton onClick={() => clearItemFromCart(cartItem)}>&#10005;</RemoveButton>
    </CheckoutItemContainer>
  );
};

export default connect(
  null,
  { addItemToCart, removeItemFromCart, clearItemFromCart }
)(CheckoutItem);
