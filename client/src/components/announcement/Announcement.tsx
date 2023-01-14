import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 30px;
  background-color: teal;
  color: white;
  font-weight: 500;
`;

const Announcement = () => {
  return <Container>Super Deal! Free Shopping On Order Over 50$</Container>;
};
export default Announcement;
