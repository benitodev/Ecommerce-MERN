import styled from 'styled-components';

type SlideProps = {
  bg: string;
};

export const Slide = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  background-color: #${(props: SlideProps) => props.bg};
`;

export const ImgContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  flex: 1;
`;

export const Img = styled.img`
  height: 80%;
  max-width: 500px;
  max-height: 500px;
`;

export const SlideContent = styled.div`
  flex: 1;
  padding: 50px;
  padding-top: 20px;
`;

export const TitleContent = styled.h2`
  font-size: 60px;
`;

export const DescriptionContent = styled.p`
  font-size: 20px;
  margin: 50px 0px;
  font-family: 'Urbanist', sans-serif;
`;
