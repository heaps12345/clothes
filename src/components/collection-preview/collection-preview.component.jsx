import React from 'react';
import CollectionItem from '../collection-item/collection-item';
import { withRouter } from 'react-router-dom'

import { CollectionPreviewContainer, PreviewContainer, Title } from './collection-preview.styles';

const CollectionPreview = ({ title, routeName, items, history, match }) => {
  return (
    <CollectionPreviewContainer>
      <Title onClick={() => history.push(`${match.url}/${routeName}`)}>{title}</Title>
      <PreviewContainer>
        {items
          .filter((item, index) => index < 4)
          .map(({ id, ...props }) => (
            <CollectionItem key={id} {...props} />
          ))}
      </PreviewContainer>
    </CollectionPreviewContainer>
  );
};

export default withRouter(CollectionPreview);
