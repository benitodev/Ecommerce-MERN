import styled from 'styled-components';

export const Info = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  display:flex;
  align-items: center;
  justify-content: center;
  transition: all 0.5s ease
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  opacity: 0;
  background-color: rgba(0, 0, 0, 0.2);
  cursor: pointer;
`;

export const Container = styled.div`
  flex: 1;
  margin: 5px;
  min-width: 280px;
  height: 350px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;

  &:hover ${Info} {
    opacity: 1;
  }
`;

export const Img = styled.img`
  height: 70%;
`;

export const Circle = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin: 0 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
`;
