import styled from 'styled-components';
import { mobile } from '../../../utils';

export const MenuItem = styled.div`
  font-size: 16px;
  cursor: pointer;
  margin-left: 25px;
  color: black;
  ${mobile({ fontSize: '12px', marginLeft: '10px' })}
`;

export const Span = styled.div``;
