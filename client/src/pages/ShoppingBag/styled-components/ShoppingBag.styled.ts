import styled from 'styled-components';

export const Container = styled.div`
  padding: 24px;
`;

export const BagContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  width: 100%;
`;

export const Title = styled.h1`
  font-weight: 700;
  letter-spacing: 1px;
  font-size: 3rem;
`;

export const TitleContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  margin-bottom: 2rem;
`;

export const BasketContainer = styled.div`
  width: 73%;
  max-width: 50rem;
`;

export const ProductContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 1.2rem;
`;

export const ProductDetails = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
`;

export const ProductAmount = styled.div`
  height: 100%;
  margin-left: 0.8rem;
  margin-right: 0.8rem;
`;

export const Amount = styled.span`
  display: block;
  font-weight: 700;
  font-size: 1.4rem;
`;

export const Span = styled.span`
  display: block;
  font-size: 1.3rem;
`;

export const OptionTitle = styled.h4`
letter-spacing:1px;
font-size: 1.1rem
font-weight: 600;
`;
