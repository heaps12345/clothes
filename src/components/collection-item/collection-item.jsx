import React from 'react';

import { connect } from 'react-redux';
import { addItemToCart } from '../../redux/cart/cart.actions';

import {
  CollectionItemContainer,
  AddButton,
  CollectionFooterContainer,
  BackgroundImageContainer
} from './collection-item.styles';

const CollectionItem = ({ item, addItemToCart }) => {
  const { name, imageUrl, price } = item;
  return (
    <CollectionItemContainer>
      <BackgroundImageContainer imageUrl={imageUrl} className="image" />
      <CollectionFooterContainer>
        <div>{name}</div>
        <span>${price}</span>
      </CollectionFooterContainer>

      <AddButton onClick={() => addItemToCart(item)} inverted>
        Add to cart
      </AddButton>
    </CollectionItemContainer>
  );
};


export default connect(
  null,
  { addItemToCart }
)(CollectionItem);
