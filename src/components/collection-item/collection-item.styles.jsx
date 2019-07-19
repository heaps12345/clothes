import styled from 'styled-components';
import CustomButton from '../custom-button/custom-button.component';

export const CollectionItemContainer = styled.div`
  width: 22vw;
  height: 350px;
  display: flex;
  flex-direction: column;
  position: relative;

  &:not(:last-child) {
    margin-right: 25px;
  }

  &:hover {
    .image {
      opacity: 0.8;
    }
    button {
      display: block;
      opacity: 0.85;
    }
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

export const AddButton = styled(CustomButton)`
  position: absolute;
  top: 255px;
  width: 80%;
  opacity: 0.7;
  align-self: center;
  display: none;

}
`;

export const Price = styled.span``;
