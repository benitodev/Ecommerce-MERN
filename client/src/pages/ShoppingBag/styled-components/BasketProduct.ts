import styled from 'styled-components';

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

export const ProductOptions = styled.div`
  height: 100%;
  margin-left: 1rem;
  margin-right: 1rem;
`;

export const ProductTitle = styled.h3`
  font-weight: 700;
  font-size: 1.4rem;
`;

export const ProductDescription = styled.p`
  font-size: 1.3rem;
`;

export const ProductId = styled.span``;

export const ProductSeason = styled.span`
  display: block;
  font-weight: 400;
  color: gray;
  margin-bottom: 0.8rem;
`;

export const ProductBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  height: 100%;
`;

export const OptionTitle = styled.h4`
letter-spacing:1px;
font-size: 1.1rem
font-weight: 600;
`;

export const OptionValue = styled.span`
  font-weight: 800;
  font-size: 1.7rem;
`;
