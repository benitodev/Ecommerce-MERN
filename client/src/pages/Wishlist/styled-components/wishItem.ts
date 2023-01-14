import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  display: grid;
  grid-template-areas: 'link' 'actions';
  grid-template-rows: auto 1fr auto;
  background-color: #fff;
  width: 25%;
  max-width: 320px;
`;

export const ImgContainer = styled.div`
  grid-area: image;
  position: relative;
`;

export const Img = styled.img`
  width: 100%;
  max-width: 100%;
  position: relative;
  object-fit: contain;
  padding: 3rem 0 1.5rem;
`;

export const LinkContainer = styled.div`
  display: grid;
  grid-area: link;
  grid-template-areas: 'image' 'info';
  grid-template-rows: auto 1fr auto;
  grid-row: 1/3;
`;

export const ActionsContainer = styled.div`
  grid-area: actions;
  grid-row: 3;
  display: grid;
  row-gap: 1.2rem;
`;

export const Label = styled.p`
  grid-area: label;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  width: 100%;
`;

export const InfoContainer = styled.div`
  grid-area: info;
  display: grid;
  grid-template-areas: 'label' 'info' 'price' 'swatch';
  grid-template-rows: 2.2rem 6.6rem 1fr;
  cursor: pointer;
`;

export const Info = styled.div`
  grid-area: info;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
`;

export const Text = styled.p`
  text-align: left;
  font-size: 1.3rem;
  line-height: 1.375;
  font-weight: 400;
  width: 80%;
`;

export const TextMarked = styled(Text)`
  font-weight: 700;
`;
export const PriceContainer = styled.div`
  grid-area: price;
  display: flex;
  flex-wrap: wrap;
`;

export const Price = styled.p`
  font-size: 1.3rem;
  letter-spacing: 2px
  line-height: 1.375;
`;

export const ButtonContainer = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  z-index: 2;
  cursor: pointer;
  &:hover {
    background-color: #fee;
  }
`;
