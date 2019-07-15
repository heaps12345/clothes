import React from 'react';

import {
  CollectionItemContainer,
  CustomButton,
  CollectionFooterContainer,
  BackgroundImageContainer
} from './collection-item.styles';

const CollectionItem = ({ name, imageUrl, price }) => {
  return (
    <CollectionItemContainer>
      <BackgroundImageContainer imageUrl={imageUrl} />
      <CollectionFooterContainer>
        <div>{name}</div>
        <span>${price}</span>
      </CollectionFooterContainer>
      <CustomButton>ADD TO CART</CustomButton>
    </CollectionItemContainer>
  );
};

export default CollectionItem;
