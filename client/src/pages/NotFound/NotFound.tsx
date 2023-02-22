import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.div`
  padding: 24px;
`;

const Title = styled.h1`
  margin-bottom: 1rem;
`;

const NotFound404 = () => {
  const navigate = useNavigate();
  useEffect(() => {
    setTimeout(() => {
      navigate('/');
    }, 2000);
  }, []);
  return (
    <Container>
      <Title>This page doens't exist</Title>
      <span>Redirecting to home page...</span>
    </Container>
  );
};
export default NotFound404;
