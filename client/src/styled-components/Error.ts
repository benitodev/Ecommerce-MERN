import { props } from 'cypress/types/bluebird';
import styled from 'styled-components';

type SpanTypes = {
  status: boolean;
};

export const Container = styled.div`
  display: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const Span = styled.span<SpanTypes>`
  color: ${(props) => (props.status ? '#d32f2f' : '#43c72a')};
  font-weight: 400;
  font-size: 1rem;
  line-height: 1.66;
  letter-spacing: 0.03333em;
  text-align: left;
  margin-top: 4px;
  margin-right: 14px;
  margin-bottom: 0;
  margin-left: 14px;
`;
