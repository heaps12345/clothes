import React from 'react';
import CollectionItem from '../collection-item/collection-item';
import { withRouter } from 'react-router-dom';

import { CollectionPreviewContainer, PreviewContainer, Title } from './collection-preview.styles';

const CollectionPreview = ({ title, routeName, items, history, match }) => {
  return (
    <CollectionPreviewContainer>
      <Title onClick={() => history.push(`${match.url}/${routeName}`)}>{title}</Title>
      <PreviewContainer>
        {items
          .filter((item, index) => index < 4)
          .map(item => {
            return <CollectionItem key={item.id} item={item} />;
          })}
      </PreviewContainer>
    </CollectionPreviewContainer>
  );
};

export default withRouter(CollectionPreview);
