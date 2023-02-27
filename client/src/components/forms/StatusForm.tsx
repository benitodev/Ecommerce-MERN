import { Container, Span } from '../../styled-components/Error';

interface Props {
  children: React.ReactNode;
  status: boolean;
}

const StatusForm = ({ children, status }: Props) => {
  return (
    <Container>
      <Span status={status}>{children}</Span>
    </Container>
  );
};
export default StatusForm;
