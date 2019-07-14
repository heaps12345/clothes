import React from 'react';

import { CollectionItemContainer, CollectionFooterContainer, BackgroundImageContainer } from './collection-item.styles';

const CollectionItem = ({ name, imageUrl, price }) => {
  return (
    <CollectionItemContainer>
      <BackgroundImageContainer imageUrl={imageUrl} />
      <CollectionFooterContainer>
        <div>{name}</div>
        <span>${price}</span>
      </CollectionFooterContainer>
    </CollectionItemContainer>
  );
};

export default CollectionItem;
