import React from 'react';
import { withRouter } from 'react-router-dom';
import { BackgroundImageContainer, Title, Subtitle, ContentContainer, MenuItemContainer } from './menu-item.styles';

const MenuItem = ({ title, imageUrl, size, history, match, linkUrl }) => {
  return (
    <MenuItemContainer onClick={() => history.push(`${match.url}${linkUrl}`)} size={size}>
      <BackgroundImageContainer className="image" imageUrl={imageUrl} />

      <ContentContainer className="content">
        <Title>{title}</Title>
        <Subtitle>Shop Now</Subtitle>
      </ContentContainer>
    </MenuItemContainer>
  );
};

export default withRouter(MenuItem);
