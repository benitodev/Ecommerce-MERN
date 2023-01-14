import styled from 'styled-components';

export const Container = styled.div`
  padding: 24px;
  display: flex;
`;

export const ImgContainer = styled.div`
  flex: 1;
  margin-top: 3rem;
`;

export const Img = styled.img`
  width: 100%;
  height: 70vh;
  object-fit: contain;
`;

export const InfoContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  margin-top: 3rem;
`;

export const Title = styled.h1`
  font-weight: 600;
  font-size: 2.3rem;
`;

export const Description = styled.p`
  font-size: 1.4rem;
  margin-top: 1rem;
`;

export const Price = styled.h3`
  font-size: 1.8rem;
  color: teal;
  margin-top: 3rem;
`;

export const ProductOptions = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 1rem;
`;

export const ColorContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ColorTitle = styled.h3`
  font-size: 1.4rem;
  margin-right: 5px;
`;
export const FilterColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
  margin: 0px 5px;
  cursor: pointer;
`;
