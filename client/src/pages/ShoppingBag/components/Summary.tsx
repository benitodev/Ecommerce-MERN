import { Product } from '../../../models';
import { Span } from '../styled-components/ShoppingBag.styled';
import {
  Hr,
  SummaryContainer,
  SummaryFlex,
  SummaryTitle,
} from '../styled-components/Summary.styled';

interface Props {
  summaryArray: Array<number>;
}

const Summary = ({ summaryArray }: Props) => {
  const summary = summaryArray.reduce((acc, current) => acc + current);
  return (
    <SummaryContainer>
      <SummaryTitle>Summary</SummaryTitle>
      <SummaryFlex>
        <Span>Subtotal</Span>
        <Span>AED {summary}</Span>
      </SummaryFlex>
      <SummaryFlex>
        <Span>Delivery</Span>
        <Span>AED 0.00</Span>
      </SummaryFlex>
      <Hr />
      <SummaryFlex>
        <Span>Total</Span>
        <SummaryTitle>AED {summary}</SummaryTitle>
      </SummaryFlex>
    </SummaryContainer>
  );
};
export default Summary;
