import styled from 'styled-components';

export const CollectionItemContainer = styled.div`
  width: 22vw;
  height: 350px;
  display: flex;
  flex-direction: column;

  &:not(:last-child) {
    margin-right: 25px;
  }

  &:hover {
    opacity: 0.8;
  }
`;

export const BackgroundImageContainer = styled.div`
  background-image: ${({ imageUrl }) => `url(${imageUrl})`};
  width: 100%;
  height: 95%;
  background-size: cover;
  background-position: center;
`;

export const CollectionFooterContainer = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 18px;
  margin-top: 5px;
  height: 5%;
`;

export const Name = styled.div``;

export const Price = styled.span``;
