import styled from 'styled-components';

export const BackgroundImageContainer = styled.div`
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
  background-image: ${({ imageUrl }) => `url(${imageUrl})`};
`;

export const MenuItemContainer = styled.div`
  height: ${({ size }) => (size ? '380px' : '240px')};
  width: 30%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1 1 auto;
  margin: 0 7.5px 15px;
  cursor: pointer;
  overflow: hidden;
  border: 1px solid black;

  &:hover {
    .content {
      opacity: 0.9;
    }

    .image {
      transform: scale(1.1);
      transition: transform 6s;
    }
  }
`;

export const ContentContainer = styled.div`
  height: 90px;
  width: 120px;
  background-color: #fff;
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 1px solid black;
  text-transform: uppercase;
  opacity: 0.7;
`;

export const Title = styled.h2`
  font-weight: bold;
  margin: 0 6px 0;
  font-size: 22px;
  color: #4a4a4a;
`;

export const Subtitle = styled.span`
  font-weight: lighter;
  font-size: 16px;
`;
